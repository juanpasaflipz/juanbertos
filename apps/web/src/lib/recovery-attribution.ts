// These references support staff reconciliation; they do not prove a sale or incrementality.
const STORAGE_KEY = 'jb_recovery_reference';
const MAX_AGE = 24 * 60 * 60 * 1000;
const GROUPS = { burritos_cerca: 'CER', california_burrito: 'CAL', brand: 'MAR' } as const;
type Group = keyof typeof GROUPS;
export type RecoveryReference = { reference: string; group: Group; createdAt: number };
type StorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

export function referenceStorage(getStorage: () => StorageLike): StorageLike {
  const memory = new Map<string, string>();
  return {
    getItem(key) {
      if (memory.has(key)) return memory.get(key)!;
      try { return getStorage().getItem(key); } catch { return null; }
    },
    setItem(key, value) {
      memory.set(key, value);
      try { getStorage().setItem(key, value); } catch { /* Use memory for this visit. */ }
    },
    removeItem(key) {
      // Tombstone prevents a failed persistent removal from resurrecting old attribution.
      memory.set(key, '');
      try { getStorage().removeItem(key); } catch { /* Memory remains cleared. */ }
    },
  };
}

export function recoveryReference(
  search: string,
  storage: StorageLike,
  now: number,
  uniqueId: () => string,
): RecoveryReference | null {
  const params = new URLSearchParams(search);
  const group = params.get('utm_content') as Group | null;
  const isRecovery = params.get('utm_source') === 'google' &&
    params.get('utm_medium') === 'cpc' && params.get('utm_campaign') === 'jb_recovery_sep2026' &&
    group !== null && Object.hasOwn(GROUPS, group);
  let saved: RecoveryReference | null = null;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (raw) {
      const candidate = JSON.parse(raw);
      if (candidate && Object.hasOwn(GROUPS, candidate.group) &&
        typeof candidate.reference === 'string' && /^JB-(CER|CAL|MAR)-[A-F0-9]{12}$/.test(candidate.reference) &&
        Number.isFinite(candidate.createdAt) && now >= candidate.createdAt && now - candidate.createdAt < MAX_AGE) {
        saved = candidate;
      }
    }
    if (params.has('utm_source') && !isRecovery) {
      storage.removeItem(STORAGE_KEY);
      return null;
    }
  } catch { /* Ordering must work when storage is unavailable. */ }
  if (isRecovery) {
    if (saved?.group === group) return saved;
    const reference = `JB-${GROUPS[group]}-${uniqueId().replace(/-/g, '').slice(0, 12).toUpperCase()}`;
    const result = { reference, group, createdAt: now };
    try { storage.setItem(STORAGE_KEY, JSON.stringify(result)); } catch { /* Keep this page's reference. */ }
    return result;
  }
  return saved;
}

export function referencedWhatsAppUrl(href: string, reference: string | undefined): string {
  if (!reference) return href;
  try {
    const url = new URL(href);
    if (url.hostname !== 'wa.me' || url.pathname !== '/525613096835') return href;
    const message = url.searchParams.get('text') || 'Hola, quiero ordenar un burrito.';
    url.searchParams.set('text', `${message}\nReferencia de pedido: ${reference}`);
    return url.toString();
  } catch { return href; }
}
