"use client";

import { createContext, Suspense, useContext, useEffect, useState, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import { recoveryReference, referenceStorage, type RecoveryReference } from '@/lib/recovery-attribution';

const ReferenceContext = createContext<RecoveryReference | null>(null);

function CaptureReference({ onChange }: { onChange: (reference: RecoveryReference | null) => void }) {
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const [storage] = useState(() => referenceStorage(() => window.sessionStorage));
  useEffect(() => {
    try {
      onChange(recoveryReference(search, storage, Date.now(), () => crypto.randomUUID()));
    } catch { onChange(null); }
  }, [search, storage, onChange]);
  return null;
}

export function RecoveryReferenceProvider({ children }: { children: ReactNode }) {
  const [reference, setReference] = useState<RecoveryReference | null>(null);
  return (
    <ReferenceContext.Provider value={reference}>
      {children}
      <Suspense fallback={null}><CaptureReference onChange={setReference} /></Suspense>
    </ReferenceContext.Provider>
  );
}

export function useRecoveryReference() {
  return useContext(ReferenceContext);
}
