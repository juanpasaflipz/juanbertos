# Recovery order tracking

Updated 9 September 2026.

The `order_whatsapp`, `order_rappi`, `order_didi`, `order_ubereats`, `directions` and `phone_call` browser events describe clicks. Their historical names remain for continuity; they carry no assumed monetary value, currency or transaction ID. Native Google Ads click tags are managed in GTM. The website no longer adds an optional native Ads destination to its named GA4 events. Configure imported click actions as secondary engagement, without sales values, and audit native tags separately.

A completed purchase requires a paid, completed order record, its actual merchandise value and unique transaction ID. The website does not manufacture purchase events or marketplace order attribution. Historical reports are not rewritten by this change.

## Recovery references

The campaign URL suffix uses `utm_source=google&utm_medium=cpc&utm_campaign=jb_recovery_sep2026` and one of these `utm_content` labels:

| Label | Reference prefix |
|---|---|
| `burritos_cerca` | `JB-CER-` |
| `california_burrito` | `JB-CAL-` |
| `brand` | `JB-MAR-` |

One reference is shared by the order page, floating WhatsApp button and inline WhatsApp links on the California and neighborhood pages. It persists in session storage for up to 24 hours, with a shared in-memory fallback when storage is blocked. Another tagged source clears it. It contains no customer information or Google click ID.

The reference is included in the WhatsApp message draft to the confirmed number +52 56 1309 6835. No message is sent automatically. At checkout, staff must copy the reference onto a paid order record alongside the POS/order ID, actual amount, refunds and channel. One reference may lead to multiple orders; deduplicate sales by actual order ID, not reference alone. Reference-tagged revenue is a reporting aid, not proof of incremental sales or a verified individual Google click match.

Marketplace links stay available. Orders without valid matching evidence remain unattributed. Opening an app or chat does not complete an order.

## Verification

From the repository root, with Node 22.6+:

```sh
node --experimental-strip-types --test apps/web/tests/*.test.mjs
npm run typecheck --workspace=@juanbertos/web
npm run build --workspace=@juanbertos/web
```

Check a tagged `/es/order` visit, then navigate to the California guide: visible reference and WhatsApp drafts must agree. Verify the ordinary untagged page still has working links and the server-rendered HTML contains the ordering destinations. Website code tests do not establish that Google Ads/GTM received an event or that a marketplace order completed; verify those separately in their interfaces.
