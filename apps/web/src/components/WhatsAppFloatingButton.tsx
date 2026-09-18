"use client";

import { useTranslations } from "next-intl";
import { trackConversion } from "@/lib/analytics";
import { referencedWhatsAppUrl } from "@/lib/recovery-attribution";
import { useRecoveryReference } from "@/components/useRecoveryReference";

export function WhatsAppFloatingButton() {
  const t = useTranslations("orderPage");
  const reference = useRecoveryReference();
  const href = referencedWhatsAppUrl(t("channels.whatsapp.href"), reference?.reference);
  const label = t("floatingLabel");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion("order_whatsapp")}
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink-900 bg-cilantro-500 text-paper-100 shadow-[4px_4px_0_0_var(--color-ink-900)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink-900)] sm:h-16 sm:w-16"
    >
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.66 4.05 1.78 5.66L2 22l4.6-1.21a9.85 9.85 0 0 0 5.44 1.55c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.09a8.13 8.13 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.18 8.18 0 1 1 6.87 3.81zm4.45-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.1-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.19-.47-.39-.4-.55-.41-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.52.1.46-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}
