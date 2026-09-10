/**
 * Engagement events, not completed orders. Historical event names are retained
 * for reporting continuity. Never attach assumed revenue to a link click.
 * GA4 receives these named events; GTM owns native Google Ads click tags.
 * Keep imported click actions secondary, without monetary values. A purchase
 * requires a separate verified paid order, its actual value and transaction ID.
 */

export type ConversionType =
  | "order_whatsapp"
  | "order_rappi"
  | "order_didi"
  | "order_ubereats"
  | "directions"
  | "phone_call";

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

const META_EVENT: Record<ConversionType, string> = {
  order_whatsapp: "Lead",
  order_rappi: "Lead",
  order_didi: "Lead",
  order_ubereats: "Lead",
  directions: "FindLocation",
  phone_call: "Contact",
};

export function trackConversion(type: ConversionType): void {
  if (typeof window === "undefined") return;
  const w = window as Win;
  if (w.gtag) {
    const params: Record<string, unknown> = {
      event_label: type,
      interaction_type: "outbound_click",
    };
    w.gtag("event", type, params);
  }

  if (w.fbq) {
    w.fbq("track", META_EVENT[type], {
      content_name: type,
    });
  }
}
