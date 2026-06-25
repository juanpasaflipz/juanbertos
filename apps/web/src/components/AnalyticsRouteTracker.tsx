"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type GtagFn = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>,
) => void;

type FbqFn = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>,
) => void;

type Win = Window & { gtag?: GtagFn; fbq?: FbqFn };

export function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as Win;

    const search = searchParams?.toString();
    const path = pathname + (search ? `?${search}` : "");

    if (w.gtag) {
      w.gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    if (w.fbq) {
      w.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}
