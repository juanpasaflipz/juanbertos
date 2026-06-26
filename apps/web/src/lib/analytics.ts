/**
 * Google Ads conversion tracking.
 *
 * Setup checklist (done once per account):
 * 1. Google Ads UI → Tools → Conversions → New conversion action
 *    Create one per ConversionType below. Category suggestions:
 *    - order_whatsapp / order_rappi / order_didi → "Purchase"
 *    - directions → "Other (contact)"
 *    - phone_call → "Phone call"
 * 2. Each new conversion action gives you a snippet with
 *    `send_to: 'AW-11120993342/XXXX-YYYYY'`. Copy the value after the slash.
 * 3. Set the env vars in Vercel (Production + Preview):
 *    NEXT_PUBLIC_GADS_CONV_WHATSAPP=AW-11120993342/...
 *    NEXT_PUBLIC_GADS_CONV_RAPPI=AW-11120993342/...
 *    NEXT_PUBLIC_GADS_CONV_DIDI=AW-11120993342/...
 *    NEXT_PUBLIC_GADS_CONV_DIRECTIONS=AW-11120993342/...
 *    NEXT_PUBLIC_GADS_CONV_PHONE=AW-11120993342/...
 *
 * The named events fire regardless; send_to only adds conversion attribution.
 */

export type ConversionType =
  | "order_whatsapp"
  | "order_rappi"
  | "order_didi"
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

const SEND_TO: Record<ConversionType, string | undefined> = {
  order_whatsapp: process.env.NEXT_PUBLIC_GADS_CONV_WHATSAPP,
  order_rappi: process.env.NEXT_PUBLIC_GADS_CONV_RAPPI,
  order_didi: process.env.NEXT_PUBLIC_GADS_CONV_DIDI,
  directions: process.env.NEXT_PUBLIC_GADS_CONV_DIRECTIONS,
  phone_call: process.env.NEXT_PUBLIC_GADS_CONV_PHONE,
};

// Estimated MXN value per conversion — Google Smart Bidding reads these to
// optimize for revenue. Adjust per action in the Google Ads UI later.
const DEFAULT_VALUE: Record<ConversionType, number> = {
  order_whatsapp: 250,
  order_rappi: 270,
  order_didi: 270,
  directions: 200,
  phone_call: 350,
};

const META_EVENT: Record<ConversionType, string> = {
  order_whatsapp: "Lead",
  order_rappi: "Lead",
  order_didi: "Lead",
  directions: "FindLocation",
  phone_call: "Contact",
};

export function trackConversion(type: ConversionType, value?: number): void {
  if (typeof window === "undefined") return;
  const w = window as Win;
  const resolvedValue = value ?? DEFAULT_VALUE[type];

  if (w.gtag) {
    const params: Record<string, unknown> = {
      value: resolvedValue,
      currency: "MXN",
      event_label: type,
    };
    const sendTo = SEND_TO[type];
    if (sendTo) params.send_to = sendTo;
    w.gtag("event", type, params);
  }

  if (w.fbq) {
    w.fbq("track", META_EVENT[type], {
      value: resolvedValue,
      currency: "MXN",
      content_name: type,
    });
  }
}
