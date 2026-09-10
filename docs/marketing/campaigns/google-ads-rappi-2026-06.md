# Google Ads — Juanberto's Rappi Acquisition Campaign

> Historical June 2026 plan, superseded for recovery on 9 September 2026. Rappi-30 is paused. Its old phone, hours, promotions, budgets and click-as-purchase instructions are not current launch instructions. Current WhatsApp is +52 56 1309 6835; Tuesday–Saturday closes at 21:00. See [recovery tracking](../recovery-tracking.md). Link clicks are engagement, never verified sales.

**Campaign codename:** `JB-SEARCH-RAPPI-2026-06`
**Owner:** juan@injupe.com
**Account:** AW-11120993342 (Google Ads CID `747-447-7580`, campaign_id `23936395368`)
**Status:** LIVE — campaign `Rappi-30` active since 2026-06-14; paused + cleaned + re-enabled 2026-06-30
**Last updated:** 2026-06-30 (see §1b)

---

## 1. TL;DR

- **Objective:** Drive `order_rappi` conversions on `juanbertos.com/es/order` (NOT direct to Rappi). Click on Rappi card on the order page = primary conversion (270 MXN value).
- **Value prop:** 30% OFF menu-wide on Rappi via the **"MD - 0 Commission x off in store"** program (Rappi-funded commission-swap — margin-neutral for Juanberto's). Currently active through 2026-07-06; Rappi typically auto-renews for performing restaurants. **Do NOT layer restaurant-funded promos on top** — would stack into ~51% off or void the commission waiver.
- **Budget:** Start at $4,000 MXN/mo (~$133 MXN/day). Scale to $6,000 MXN/mo after we hit 30+ conversions and switch to tCPA.
- **Geo:** Roma Sur + delivery radius. Roma Norte, Condesa, Doctores, Narvarte, Hipódromo, Del Valle Norte, Juárez, Cuauhtémoc, Escandón, Centro Médico area. Presence-only targeting.
- **Primary KPI:** Cost per `order_rappi` conversion. Target ceiling: 90 MXN per conversion (3:1 value/cost ratio at 270 MXN per).
- **First optimization checkpoint:** Day 14. By then we want ~20–30 conversions to enable Smart Bidding tCPA transition.

---

## 1a. Launch addendum — 2026-06-15

**Status:** LIVE. Campaign `Rappi-30` running at $133 MXN/día since 2026-06-14. All deltas below are the source of truth; the planning sections (§2–§11) remain for reference.

### As-built deltas

| Area | Planned | Shipped | Why |
|---|---|---|---|
| Ad groups | AG1 + AG2 + AG3 | AG1 + AG2 only | AG3 (Delivery Near Me) deferred until AG2 has 14d of data. Avoids fragmenting Smart Bidding signal at $133/día. |
| RSAs per ad group | 2 each (six total) | 1 each (two total) | One strong RSA per group is enough for learning. Second variant per group is a day-21 task. AG2's RSA = 15/15 headlines, 4/4 descriptions, H1 `Auténticos California Burritos` pinned to position 1. |
| AG2 keyword list | §5 list | §5 list, adjusted (still 20 kw) | Final list emphasizes geo-modifiers (`cdmx` / `roma sur` / `condesa`) and `a domicilio` over generic `[california burrito]`. All 20 verified exact/phrase post-fix. |
| Campaign conversion goals | Account default (Compras + Vistas de página) | **Campaign-specific override → Compras only** | Default included `Vistas de página`, which would dilute Smart Bidding toward pageviews. Overrode via Configuración de la campaña → Objetivos de conversión → Usar configuración personalizada (2026-06-15). |
| `order_whatsapp` role | Secondary (observation) | **Primary** (same `Compras` category as `order_rappi`) | Landing `/es/order` has both Rappi + WhatsApp CTAs; both are valid intent signals. Re-evaluate day 14 — demote to Secondary if WhatsApp share <15% of conversions. |
| Call asset | Attached per §7 | **Not attached** | Operations can't take phone calls during service. `Llamar` still renders on AG1 brand searches because Google Business Profile map-format ads include it — accepted; AG2 commercial queries don't trigger map format and `Sitio` still routes to Rappi. |
| Ad schedule | Tue–Sat split + Sun + Mon OFF | **Lun–Sáb 11:00–13:00 + 16:30–22:00, Dom 11:00–21:00** | Restaurant now operates 7 days. 1–4pm intentionally dark — slow window, AOV drops, ad spend wasted there. |
| Negative keyword list | ~80 entries per §8 | 53 attached as `JB-NEG-MASTER` | Trimmed to highest-leverage (recipe / job / competitor / info-only). Day 8 search-terms report will expand based on actual waste. |
| IA Máx. para Búsqueda | (not in original plan) | **OFF** | New Configuración toggle. Kept off to preserve keyword-level discipline at this budget — IA Max acts like Performance Max for Search and dissolves match-type control. |
| Match-type integrity | Per §5 brackets/quotes | Re-entered after first paste | First bulk paste stripped brackets/quotes → all keywords saved as broad. Re-added inline via `+ Agregar palabras clave` preserving `[exact]` / `"phrase"`. 9/9 AG1 + 20/20 AG2 verified post-fix. |

### Day +1 sanity check

- Diagnostic warnings in Resumen are normal day-1 noise:
  - `No hay suficientes palabras clave relevantes` → brand-new keywords with `Volumen de búsquedas bajo`. Auto-reactivates as queries come in. Ignore for 7 days.
  - `La nueva estrategia de ofertas está en aprendizaje` → Maximize Conversions learning phase. Lasts ~7 days or 30 conv.
- Resumen date range defaulted to `14 may – 10 jun 2026` (pre-launch). Reset to `Hoy` to see real data.

### Calendar reminder created

Google Calendar event `Verificar renovación Rappi MD program (Juanberto's)` — **2026-07-01 09:00 CDMX** (5 days before MD's 2026-07-06 end). Reminders: popup 1h before, email 24h before. Description embeds the §11 items 36–40 verification checklist plus an explicit instruction to **pause `Rappi-30` if MD does not auto-renew** (ad copy `30% OFF en Rappi` would cease to be true).

### Backlog seeded by this build session

- **Day 8** — search-terms report; expand `JB-NEG-MASTER` from 53 toward planned ~80.
- **Day 14** — re-evaluate `order_whatsapp` Primary vs. Secondary based on conversion mix.
- **Day 14** — Smart Bidding tCPA switch decision per §10.
- **Day 21** — build AG3 (Delivery Near Me) if AG2 is converting under 90 MXN/conv; otherwise restructure AG2.
- **Day 21** — add second RSA per ad group (RSA 1.2, 2.2 per §6).
- **Non-blocking** — confirm GBP location extension is wired at campaign level (not just inherited via map format).

---

## 1b. Day +16 audit & cleanup — 2026-06-30

**Status:** RE-ENABLED. Campaign was paused for surgery this morning; re-enabled after cleanup at ~$100 MXN/día. Source-of-truth state below; §1a remains as the launch-day snapshot.

### Why we audited

Day-16 performance gate from §10 was missed: ≥30 conversions in trailing 14d → actual 7 conversions in trailing 10d (Windsor.ai `get_data` on `google_ads` connector, dates `2026-06-14` to `2026-06-30`). Cost/conv was $156 MXN vs $90 target ceiling. Budget pacing was on plan ($1,093 spend across 10 days), so the problem was efficiency, not volume.

### What the data revealed

| Finding | Evidence |
|---|---|
| **`JB-NEG-MASTER` was attached to ZERO campaigns.** §1a claimed 53 negatives attached; on 2026-06-30 the list view showed "0 campaigns using this list". Smart Bidding trained for 16 days with no negative discipline. | Screenshot of `Tools → Shared library → Exclusion lists → JB-NEG-MASTER` |
| **AG2 had collapsed to a single broad keyword.** The 20-keyword AG2 plan from §5 reduced to one row: `california burrito cerca de mi` (Broad), which ate $578 MXN / 56 clicks / 1 conversion in 10 days = $578 cost/conv (vs $90 target). | Likely cause: §1a's "first bulk paste stripped brackets" bug — re-add fix didn't stick for AG2, or the other 19 were marked "Low search volume" by Google. |
| **Undocumented `Dynamic Ad group` existed.** Not in §4 (§4 only planned AG1 + AG2). This is a Dynamic Search Ads group — Google auto-crawls the site to generate targets, which contradicts §3's "Final URL expansion OFF" and §1a's "IA Máx. para Búsqueda OFF". 0 spend at audit time but would have leaked once it started serving. | Visible in `Ad groups (3)` dropdown at top of campaign view. |
| **Brand keyword `[juanbertos]` showing $36 MXN avg CPC** — 10× normal brand-defense CPC. | Likely competitor brand-bidding or quality-score suppression caused by neighboring broad keywords. Deferred; not blocking. |
| **Conversion mix: 6× WhatsApp, 1× Rappi** ($1,500 vs $270 value). Rappi MD 30% OFF is the campaign hook, but users overwhelmingly chose chat-first ordering. | Strategic — see §1b decisions. |

### Search-terms leak pattern (top by cost)

AG2's broad keyword matched to almost no California-burrito intent. The top spend went to:

| Bucket | Examples (cost) |
|---|---|
| Competitor restaurants | `porfirios cerca de mi` ($19.71), `restaurante los girasoles` ($13.72), `cantina la 20` ($6.59), `carnitas alfonso` ($6.18), `enfrijoladas jauja` ($5.28), `don frank` ($4.35), `el califa cerca de mi` ($2.67), `el pariente` ($1.98), `mexicanisimo` ($3.50), `casa de toño cerca de mi` ($1.51), `mr burro` ($0.22), `toks cerca de uam i 8va ampliación...` ($1.64) |
| Generic "comida"/"cerca" | `comida economica y rica` ($36.82, single click), `comida a domicilio cerca de aquí` ($23.04), `comida` ($14.86), `restaurantes cerca de mi` ($7.09), `comida cerca de mi` ($13.56) |
| Wrong product | `hamburguesas near me` ($6.12), `hamburguesa near me` ($4.82) |
| Wrong geo | `restaurants near mexico city international airport...` ($3.17) |
| AG1 mild leak | `burritos cerca de mi` ($38.25, 20 clicks, 0 conv) |

### As-applied deltas (cleanup completed 2026-06-30)

| Area | Pre-cleanup state | Post-cleanup state | Action source |
|---|---|---|---|
| Daily budget | $133 MXN/day | **$100 MXN/day** ($3K/mo test, scale path $8K → $15K → $30K+ on proof) | User changed via UI |
| `JB-NEG-MASTER` | 0 entries, 0 campaigns using it | **36 new negatives added** + applied to Rappi-30. Block includes: phrase variants of "cerca de mi" / "near me" / "comida cerca" / "restaurantes cerca", competitor brand names (`jauja`, `el califa`, `porfirios`, `los girasoles`, `cantina la 20`, `casa de toño`, `don frank`, `mexicanisimo`, `el pariente`, `mr burro`, `toks`, `carnitas alfonso`, `remolkito`, `garnacha`, `enfrijoladas`, `molletes`, `cantina`/`cantinas`), wrong product (`hamburguesa`/`hamburguesas`, `"tacos near"`, `"taqueria cerca"`), wrong geo (`aeropuerto`, `airport`, `benito juarez`) | Manual UI |
| AG2 keyword list | 1 broad: `california burrito cerca de mi` | Paused the broad. Added 10 strict-match: `[california burrito cdmx]`, `[california burrito roma sur]`, `[burrito california cdmx]`, `[carne asada fries cdmx]`, `"burrito estilo san diego"`, `"burrito san diego cdmx"`, `"burrito de carne asada cdmx"`, `"burrito de carne asada roma"`, `"donde comer california burrito"`, `"mejor california burrito cdmx"`. **Match-type integrity verified post-paste — brackets/quotes stuck this time, no broad-strip recurrence.** | Manual UI |
| AG1 leaks | `juanberto` (Broad, 1290 imp, 29 clicks, 0 conv), `juan bertos` (Broad, 0 imp), `tu burrito` (Phrase, 484 imp, 11 clicks, 0 conv), `todo burrito` (Broad), `"burritos cerca de mi"` (Phrase, 183 imp, 19 clicks, 0 conv), `"burritos cdmx"` (Phrase, 506 imp, 14 clicks, 0 conv — Rarely shown / low QS) | All 6 paused. Added `[burritos cdmx]` exact to preserve the legitimate intent. | Manual UI |
| `Dynamic Ad group` | Enabled, undocumented | **Paused** at ad group level (not deleted — preserves history for later audit) | Manual UI |
| AI Max for Search | Visible "AI Max expanded / AI Max landing" totals rows in AG2 (suggested it might be on) | Confirmed OFF at campaign level. Banner in Ad group settings: "Turn on AI Max in your campaign to use these ad group level settings." | Verified, no change needed |
| `order_whatsapp` role | Primary (per §1a) | **Confirmed correct** by data — 6× WhatsApp vs 1× Rappi. Stays Primary. | No change |
| Brand variant coverage | `"juanbertos cdmx"` enabled; `"juanberto's cdmx"` / `"juanbertos roma sur"` / `"juanbertos menu"` / `"juanbertos rappi"` / `[juanberto's] [juanberto]` all paused | Left as-is (paused). Re-enabling for fuller brand defense is a backlog item — they're cheap, high-intent, and currently uncaught. | No change (backlog) |

### Strategic decision — WhatsApp:Rappi 6:1 conversion preference

Data showed users overwhelmingly prefer WhatsApp over Rappi for ordering (6:1) despite Rappi 30% OFF being the headline hook in every RSA. Likely drivers: lower friction (no app install/login), Mexico chat-first ordering culture, ability to confirm before paying. **Implications:**

1. `order_whatsapp` stays Primary (§1a's promote-to-Primary call was right).
2. Future RSAs should include WhatsApp-first headline variants — currently all RSAs lead with "Pide en Rappi" / "30% OFF en Rappi". This is the next experiment.
3. `/es/order` UX: WhatsApp card visibility/prominence matters more than Rappi. Re-evaluate card order.
4. Don't sunset the Rappi MD promo — it's margin-neutral and the 1 Rappi conversion is real signal. Just don't lead with it.

### Sources of truth verified 2026-06-30

- Live campaign data: Windsor.ai `google_ads` MCP, account `747-447-7580`, campaign_id `23936395368`. Use `get_data` before recommending changes — the doc's described state may diverge from reality (see §1b finding #1).
- Conversion action attribution: GA4-import path (per §12 item 2). Both `order_whatsapp` and `order_rappi` are firing correctly — the "no Rappi conversions" initial hypothesis was wrong.
- Write actions: Windsor.ai write is disabled at the account level. To enable, see https://onboard.windsor.ai/app/team-management. Until enabled, all execution (pause/enable/budget) goes through the Google Ads UI manually.

### Backlog seeded by this audit

- **Day +1 (2026-07-01 AM)** — Pull search-terms report. Verify the 36 new negatives stopped the competitor + cerca-de-mi waste. If `jauja`, `el califa`, `comida cerca de mi`, etc. reappear, the negative didn't save — re-check `JB-NEG-MASTER`.
- **Day +1 (overlaps with §1a calendar item)** — Verify Rappi MD program "MD - 0 Commission x off in store" auto-renewed past 2026-07-06. If not, pause campaign or pivot value-prop.
- **Day +3** — New AG2 keywords still "Low search volume"? Normal up to day +7. If still flagged at day +10, broaden 1 phrase keyword.
- **Day +7 (2026-07-07)** — Cost/conv trend check. Target ≤$90 MXN. If holding ≤$90 → consider step-up to $8K MXN/mo and re-add AG3 (Delivery Near Me) per §4. If still >$120 → diagnose deeper before scaling.
- **Day +7** — Draft WhatsApp-first RSA variant per ad group (1 new RSA each, lead headline = `Pide por WhatsApp en 1 minuto` or similar).
- **Day +14** — Switch bid strategy to tCPA = 90 MXN (per §10 gate), only if ≥30 conv in trailing 30d.
- **Investigate** — `[juanbertos]` $36 MXN CPC anomaly via Auction Insights. Suspected competitor brand-bidding.
- **Investigate** — Re-enable brand variant keywords (`"juanberto's cdmx"`, `"juanbertos menu"`, `"juanbertos rappi"`, `"juanbertos roma sur"`) for fuller brand defense. Cheap, high-intent.
- **Decide** — `Dynamic Ad group`: delete or repurpose with proper page feeds. Currently paused.
- **Non-blocking** — Enable Windsor.ai write actions so future cleanups can be done from MCP without UI hops.

---

## 2. Conversion setup status

| Item | Status | Notes |
|---|---|---|
| GA4 property `juanbertos` (G-2SBPB11P42) | Done | Verified active |
| GA4 ↔ Google Ads link | Done (2026-06-14) | One-way, GA4 → Ads |
| Conversion action `juanbertos (web) order_rappi` imported from GA4 | Done | Primary, count = "Una", value = 270 MXN |
| `send_to` env vars (`NEXT_PUBLIC_GADS_CONV_RAPPI`, etc.) deployed to Vercel | **Intentionally NOT set** | GA4-import path is the source of truth — adding native `send_to` would double-count every Rappi click. Tech-debt cleanup: delete the `send_to: SEND_TO[type]` line in `apps/web/src/lib/analytics.ts:66` to make code intent unambiguous (non-blocking). |
| Click-through conversion window | **Currently 90d — shorten to 30d after launch** | Restaurant delivery has <24h decision cycle, so 30d window is plenty. Update in Tools → Conversions → action → "Conversion window". |
| `order_whatsapp` secondary conversion (250 MXN) | Done | Set to Secondary in Google Ads (NOT counted in Smart Bidding optimization for THIS campaign, but tracked). |
| Enhanced conversions for web | **TO ENABLE** | Tools → Conversions → action → Settings → Enhanced conversions ON, source = Google tag. No code changes needed. |

**Reverification source of truth:** `apps/web/src/lib/analytics.ts` — `DEFAULT_VALUE.order_rappi = 270` (line 49). Currency = MXN. Confirmed.

---

## 3. Campaign settings

| Setting | Value | Reasoning |
|---|---|---|
| Campaign type | **Search** | Capturing existing demand. Performance Max is wrong at this budget/maturity. |
| Goal | "Sales" — Website conversions only | Use without goal-guided setup to keep settings under our control. |
| Networks | **Google Search ON, Search partners OFF, Display Network OFF** | Search partners dilutes intent at this budget (Smart Bidding can't tell them apart from Google.com signal). Display on a Search campaign is leaky CTR-bait spend. |
| Locations | **Presence** ("Personas que se encuentran en o frecuentan tus ubicaciones objetivo") — NOT "Interest" | "Interest" matches anyone searching about Roma Sur from anywhere in MX. Wrong. |
| Geo targets | Roma Sur, Roma Norte, Condesa, Hipódromo, Hipódromo Condesa, Juárez, Cuauhtémoc, Doctores, Narvarte Poniente, Narvarte Oriente, Del Valle Norte, Escandón I, Escandón II, San Pedro de los Pinos, Nápoles | These are the colonias inside Rappi's effective delivery radius from Coahuila 192, Roma Sur. |
| Location exclusions | All other CDMX delegaciones, all of Edomex | Hard gate against wasted impressions. |
| Language | **Spanish** | es-MX. Do not add English. |
| Audience | None as targeting (signals only — see §9) | At this budget we cannot afford observation-only audience layering. |
| Ad rotation | "Optimizar" (Optimize for best-performing ads) | Default. Smart Bidding needs this signal. |
| Ad schedule | Tue–Sat: 11:30–15:30 + 18:30–22:30. Sun: 10:30–19:30. Mon: OFF | Restaurant is closed Mondays. Ads outside those windows attract clicks the kitchen can't serve. |
| Bid strategy (weeks 1–2) | **Max Conversions** (no tCPA cap) | We have zero campaign-specific signal. Let Smart Bidding gather data. |
| Bid strategy (week 3+) | **tCPA = 90 MXN** | Switch trigger: ≥30 conversions in trailing 30d. Target derived from 270 MXN value × 33% target margin = 90 MXN cost ceiling. Reasonable for restaurant delivery in CDMX. |
| Daily budget | **$133 MXN/day** | $4,000/30. Allow campaign to run 2× daily budget on high-intent days (Google does this automatically; monthly cap still enforced). |
| Bid limits | None | Don't constrain Smart Bidding's first 2 weeks. |
| Final URL expansion | **OFF** | Force traffic to `/es/order`. |
| Auto-applied recommendations | **OFF** | We do not want Google silently adding broad keywords, Display partners, or sitelinks. |

---

## 4. Ad group structure

Three ad groups. Each has a distinct intent and matches a different stage of the funnel.

| Ad group | Theme | Match type strategy | Keyword count | Final URL |
|---|---|---|---|---|
| **AG1 — Brand defense** | People searching "juanbertos", "juanberto's", common misspellings. Captures brand intent before competitors do. | Exact + phrase only. No broad. | ~10 | `https://www.juanbertos.com/es/order` |
| **AG2 — California burrito intent** | People searching the signature product ("california burrito cdmx", "california burrito roma sur"). Mid-funnel commercial intent. | Phrase + exact. One broad with audience signal. | ~20 | `https://www.juanbertos.com/es/order` |
| **AG3 — Delivery near me intent** | People searching "burritos a domicilio cdmx", "comida americana rappi roma", "burritos roma sur". High purchase intent. | Phrase dominant, a few exact, two broad with audience signals. | ~25 | `https://www.juanbertos.com/es/order` |

Total: ~55 keywords. Inside the recommended 50–80 range.

**Why not a dedicated Rappi-promo ad group?** Promo lives at the asset level (promotion extension + ad headlines). Putting it at ad group level forces us to rebuild ad groups every time the promo changes.

---

## 5. Keywords (paste-ready)

### AG1 — Brand defense

```
[juanbertos]
[juanberto's]
[juanberto]
[juan bertos]
"juanbertos cdmx"
"juanberto's cdmx"
"juanbertos roma sur"
"juanbertos burrito"
"juanbertos menu"
"juanbertos rappi"
```

### AG2 — California burrito intent

```
[california burrito cdmx]
[california burrito roma sur]
[burrito california cdmx]
[burrito california roma sur]
"california burrito"
"california burrito mexico"
"california burrito ciudad de mexico"
"burrito california"
"burrito estilo san diego"
"burrito san diego cdmx"
"burrito con papas adentro"
"burrito con papas a la francesa"
"burrito de carne asada cdmx"
"burrito de carne asada roma"
"burrito grande cdmx"
"el mejor burrito cdmx"
"mejor california burrito cdmx"
"donde comer california burrito"
"que es un california burrito"
+burrito +california +cdmx
```

### AG3 — Delivery near me intent

```
[burritos a domicilio cdmx]
[burritos rappi cdmx]
[burritos roma sur]
"burritos a domicilio"
"burritos a domicilio cdmx"
"burritos a domicilio roma norte"
"burritos a domicilio condesa"
"burritos a domicilio narvarte"
"burritos a domicilio del valle"
"burritos rappi"
"pedir burritos rappi"
"burritos por rappi cdmx"
"burritos roma norte"
"burritos condesa"
"burritos narvarte"
"comida americana a domicilio cdmx"
"comida gringa a domicilio cdmx"
"burrito a domicilio cerca"
"burritos cerca de mi"
"burritos gigantes a domicilio"
"taqueria americana cdmx"
"taqueria california burrito"
+burritos +domicilio +cdmx
+burritos +rappi +roma
```

---

## 6. Responsive Search Ads

Each ad group gets **2 RSAs** (Google's recommended minimum for Smart Bidding to A/B). Char limits are enforced — every headline ≤30, every description ≤90.

**Offer scope:** The 30% OFF on Rappi is the **Rappi-funded MD program** ("MD - 0 Commission x off in store") — applies menu-wide. Juanberto's does NOT layer a restaurant-funded promo on top. Ad copy can claim "30% OFF en Rappi" honestly (menu-wide), but operator must verify the MD program is still active before launch and at day 25 of the campaign (see §11 launch checklist).

Display path for all ads: `juanbertos.com/Rappi/30-Off`

### AG1 — Brand defense

#### RSA 1.1 — "Direct to order"

**Final URL:** `https://www.juanbertos.com/es/order`
**Path 1:** `Rappi` · **Path 2:** `30-Off`

**Headlines (15):**
1. `Juanberto's — Pide en Rappi` *(PIN to position 1)*
2. `30% OFF en Rappi Hoy` *(PIN to position 2)*
3. `California Burrito Original`
4. `Carne Asada · Papas Adentro`
5. `Pide Juanberto's en Rappi`
6. `El Burrito de Roma Sur`
7. `Hecho a Mano en CDMX`
8. `Ordena Ahora con 30% OFF`
9. `Receta Original de San Diego`
10. `Burritos Juanberto's CDMX`
11. `Coahuila 192, Roma Sur`
12. `Llega en 30 Min por Rappi`
13. `Picaña, Cheddar, Guacamole`
14. `También por WhatsApp`
15. `Una Sola Sucursal, Un Burrito`

**Descriptions (4):**
1. `El California burrito original de Juanberto's, ahora con 30% OFF en Rappi. Pide en un toque.`
2. `Carne asada, papas a la francesa adentro, queso cheddar, guac y pico. Hecho a mano en Roma Sur.`
3. `Coahuila 192, Roma Sur. Entrega rápida a Condesa, Narvarte, Del Valle y más. Pide por Rappi.`
4. `Receta original de San Diego, enrollada a mano en CDMX. 30% OFF esta semana en Rappi.`

#### RSA 1.2 — "Brand + menu"

**Final URL:** `https://www.juanbertos.com/es/order`
**Path 1:** `Burritos` · **Path 2:** `Roma-Sur`

**Headlines (15):**
1. `Juanberto's Burritos CDMX` *(PIN to position 1)*
2. `30% OFF en Rappi`
3. `California, Porkbelly, Ensenada`
4. `Burritos desde $210`
5. `Pide en Rappi en 1 Toque`
6. `El California Burrito Real`
7. `Roma Sur — Coahuila 192`
8. `Carne Asada · Cheddar · Guac`
9. `Hecho a Mano, Recién Hecho`
10. `Pollo Loco · Porkbelly · Pescado`
11. `Breakfast Burrito Todo el Día`
12. `Picaña Choice, ¼ de Kilo`
13. `Pide por Rappi o WhatsApp`
14. `Entrega en Roma, Condesa, Narvarte`
15. `El Burrito que Sale por la Puerta`

**Descriptions (4):**
1. `Picaña choice, papas, cheddar, guacamole, pico y crema. El California burrito original en CDMX.`
2. `6 burritos en el menú. Pide el que quieras por Rappi con 30% OFF esta semana.`
3. `Una sola sucursal, una sola regla: papas adentro. Pide por Rappi desde Roma, Condesa o Narvarte.`
4. `Burrito Breakfast servido todo el día. Pide por Rappi y aprovecha el 30% OFF.`

### AG2 — California burrito intent

#### RSA 2.1 — "Anatomy of the burrito"

**Final URL:** `https://www.juanbertos.com/es/order`
**Path 1:** `California` · **Path 2:** `Burrito`

**Headlines (15):**
1. `California Burrito en CDMX` *(PIN to position 1)*
2. `30% OFF en Rappi Hoy`
3. `Papas a la Francesa Adentro`
4. `Carne Asada · Cheddar · Guac`
5. `Receta Original San Diego`
6. `Juanberto's — Roma Sur`
7. `El Burrito de Picaña Choice`
8. `Hecho a Mano, ¼ de Kilo`
9. `Pide en Rappi en 1 Minuto`
10. `Burrito Estilo San Diego`
11. `El Original — No la Copia`
12. `Coahuila 192, Roma Sur`
13. `Pico, Crema, Guacamole Fresco`
14. `Burrito California Auténtico`
15. `El Burrito que Pediste en SD`

**Descriptions (4):**
1. `El California burrito original: carne asada, papas a la francesa adentro, cheddar, guac, pico, crema.`
2. `Nació en San Diego. Se enrolla a mano en Roma Sur. Pide en Rappi con 30% OFF.`
3. `Picaña choice de ¼ de kilo, queso cheddar derretido, papas a la francesa adentro. $250.`
4. `Juanberto's es la única taquería en CDMX especializada en California burritos. Pide ya.`

#### RSA 2.2 — "Where to find it"

**Final URL:** `https://www.juanbertos.com/es/order`
**Path 1:** `California` · **Path 2:** `CDMX`

**Headlines (15):**
1. `Dónde Comer California Burrito` *(PIN to position 1)*
2. `Juanberto's — 30% OFF Rappi`
3. `Roma Sur, CDMX — Coahuila 192`
4. `Papas Adentro, Como Debe Ser`
5. `Burrito California en CDMX`
6. `Carne Asada de Picaña Choice`
7. `Pide por Rappi o Ven`
8. `A 3 Cuadras de Centro Médico`
9. `El Original con 30% OFF`
10. `Burrito San Diego en Roma`
11. `Hecho a Mano Todos los Días`
12. `Cheddar Derretido y Guac`
13. `Mar a Sáb 10:30 – 21:30`
14. `Dom 10:30 – 19:30`
15. `Una Sucursal. Un Burrito.`

**Descriptions (4):**
1. `Coahuila 192, Roma Sur. La única taquería en CDMX que hace California burritos con la receta original.`
2. `Papas adentro, carne asada, cheddar, guacamole. El que comiste en San Diego, ahora en CDMX.`
3. `Abierto martes a domingo. Pide por Rappi con 30% OFF o pásate por Coahuila 192.`
4. `¼ de kilo de picaña, papas a la francesa, cheddar, guac, pico, crema. $250 en menú.`

### AG3 — Delivery near me intent

#### RSA 3.1 — "Delivery now"

**Final URL:** `https://www.juanbertos.com/es/order`
**Path 1:** `Domicilio` · **Path 2:** `30-Off`

**Headlines (15):**
1. `Burritos a Domicilio CDMX` *(PIN to position 1)*
2. `30% OFF Esta Semana en Rappi`
3. `Pide en Rappi en 1 Toque`
4. `Burritos Juanberto's por Rappi`
5. `Entrega en Roma, Condesa, Narvarte`
6. `California Burrito a Domicilio`
7. `Llega en 30–40 Min`
8. `Carne Asada · Cheddar · Guac`
9. `Hecho a Mano en Roma Sur`
10. `Burritos Grandes, ¼ de Kilo`
11. `Pide Por Rappi — 30% OFF`
12. `Receta Original San Diego`
13. `El California Burrito Real`
14. `Coahuila 192, Roma Sur`
15. `También Pide por WhatsApp`

**Descriptions (4):**
1. `Pide Juanberto's por Rappi con 30% OFF. Carne asada, papas adentro, cheddar, guac. Llega caliente.`
2. `Entrega rápida en Roma, Condesa, Narvarte, Del Valle, Doctores, Juárez. Pide ya por Rappi.`
3. `El California burrito original, ahora a domicilio en CDMX. 30% OFF en Rappi esta semana.`
4. `¿No tienes Rappi? Pide por WhatsApp al +52 56 2124 3007. Mismo burrito, recién hecho.`

#### RSA 3.2 — "Comparison hook"

**Final URL:** `https://www.juanbertos.com/es/order`
**Path 1:** `Burritos` · **Path 2:** `Rappi`

**Headlines (15):**
1. `El Mejor Burrito en CDMX` *(PIN to position 1)*
2. `30% OFF en Rappi Hoy`
3. `Burritos a Domicilio Roma Sur`
4. `Burritos a Domicilio Condesa`
5. `Burritos a Domicilio Narvarte`
6. `Burritos a Domicilio Del Valle`
7. `Pide Juanberto's en Rappi`
8. `California Burrito Original`
9. `Carne Asada de Picaña Choice`
10. `Papas a la Francesa Adentro`
11. `Cheddar, Guac, Pico, Crema`
12. `Receta de San Diego en CDMX`
13. `Hecho a Mano, Servido Caliente`
14. `Burrito Grande, Lleno, Sabroso`
15. `Coahuila 192, Roma Sur`

**Descriptions (4):**
1. `Burritos Juanberto's a domicilio en Roma, Condesa, Narvarte, Del Valle. 30% OFF en Rappi.`
2. `California, Porkbelly, Ensenada, Pollo Loco, Breakfast, Portobello. Hay para todos. Pide ya.`
3. `Picaña choice, ¼ de kilo, papas a la francesa adentro. El burrito grande que estabas buscando.`
4. `Pide en Rappi y aprovecha el 30% OFF. Llega caliente, hecho a mano, en menos de 40 min.`

---

## 7. Ad extensions / assets

### Sitelinks (6)

| Title (25 char max) | Description Line 1 (35 char) | Description Line 2 (35 char) | Final URL |
|---|---|---|---|
| `Pedir por Rappi` | `30% OFF esta semana en Rappi` | `California, Porkbelly, Ensenada` | `https://www.juanbertos.com/es/order` |
| `Menú Completo` | `6 burritos desde $210 MXN` | `Hecho a mano en Roma Sur` | `https://www.juanbertos.com/es/menu` |
| `Burrito California` | `Carne asada, papas adentro` | `La receta original de San Diego` | `https://www.juanbertos.com/es/burrito-california-cdmx` |
| `Cómo Llegar` | `Coahuila 192, Roma Sur` | `A 3 cuadras de Centro Médico` | `https://www.juanbertos.com/es/locations` |
| `Pedir por WhatsApp` | `Recoge en tienda o entrega` | `Respuesta en minutos` | `https://www.juanbertos.com/es/order` |
| `Nuestra Historia` | `De San Diego a Coahuila 192` | `Una sucursal, una regla` | `https://www.juanbertos.com/es/story` |

### Callouts (8 — 25 char each)

```
30% OFF en Rappi
Hecho a mano
Receta original San Diego
Papas adentro siempre
Picaña choice ¼ de kilo
Entrega en 30–40 min
Coahuila 192, Roma Sur
Mar a Dom desde 10:30
```

### Structured snippets (4)

| Header | Values |
|---|---|
| `Modelos` (Burritos disponibles) | `California`, `Porkbelly`, `Ensenada`, `Pollo Loco`, `Breakfast`, `Portobello` |
| `Servicios` | `Pedido por Rappi`, `Pedido por WhatsApp`, `Recoge en tienda`, `30% OFF en Rappi` |
| `Tipos` | `California burrito`, `Burrito de pescado`, `Breakfast burrito`, `Vegetariano` |
| `Características` | `Hecho a mano`, `Papas adentro`, `Picaña choice`, `Servido caliente` |

### Location extension

- **Link to Google Business Profile** for "Juanberto's — Coahuila 192, Roma Sur, CDMX 06760"
- **PENDING:** If GBP not yet claimed/verified for this address, claim it before launch (24–72h verification turnaround). See open question §12.

### Call extension

- **Phone:** `+52 56 2124 3007`
- **Source:** `apps/web/messages/es.json` line 141 (`shop.phone`)
- **Call reporting:** ON (creates `phone_call` conversion — 350 MXN)
- **Schedule:** Tue–Sat 10:30–21:30, Sun 10:30–19:30, Mon OFF (match shop hours; don't ring when closed)

### Promotion extension

- **Occasion:** None
- **Promotion type:** Percent discount
- **Discount:** 30%
- **Item:** `Burritos Juanberto's` (menu-wide — matches Rappi MD program scope)
- **Promotion code:** None required (Rappi MD program applies automatically on platform)
- **Promotion details:** `30% OFF al pedir por Rappi`
- **Final URL:** `https://www.juanbertos.com/es/order`
- **Start date:** Launch day
- **End date:** **2026-07-06** (matches Rappi MD program's current end). Operator sets a calendar reminder for **2026-07-01** to verify Rappi extended MD — they usually do for performing restaurants. If MD ends, update the promotion extension end date and revisit the value-prop hook.
- **Prerequisite:** Rappi MD program "MD - 0 Commission x off in store" is active on Juanberto's listing AND verified visible in consumer Rappi (see §11 launch checklist).

---

## 8. Negative keywords (campaign-level)

Paste as a single shared negative keyword list named `JB-NEG-MASTER`.

```
# === Irrelevant ===
gratis
trabajo
trabajos
empleo
vacante
vacantes
curriculum
cv
franquicia
franquicias
inversionista
inversion
proveedor
proveedores
mayoreo
distribuidor

# === Wrong intent: recipe / how-to ===
receta
recetas
como hacer
como preparar
preparacion
ingredientes
tortilla casera
diy

# === Wrong location ===
tijuana
san diego
guadalajara
monterrey
queretaro
puebla
playa del carmen
cancun
merida
ensenada baja
estados unidos
usa
california estado

# === Wrong product / brand confusion ===
chipotle
chipotle mexican grill
taco bell
chilis
guzman y gomez
qdoba
moe's
moes
burrito boy
burrito factory
burrito loco
calmex
calexico
sushi burrito
breakfast burrito recipe

# === Free / cheap intent ===
2x1
gratis cdmx
descuento gratis
muestra gratis
sample
trial
prueba gratis

# === Wrong meal context ===
buffet
catering
banquete
fiesta infantil
boda
evento corporativo
```

After 14 days, run a search terms report and add anything spending >50 MXN with zero conversions.

---

## 9. Audience signals (Smart Bidding signals, NOT targeting)

Attach these to the campaign as signals only. They sharpen Smart Bidding but do not exclude users outside them.

### In-market segments (Google's pre-built)

1. `Restaurantes` → `Comida para llevar y entrega a domicilio`
2. `Restaurantes` → `Comida rápida`
3. `Comida y bebidas` → `Comida internacional` → `Comida mexicana / latinoamericana`
4. `Servicios de viaje` → none (excluded — tourists are noise at this geo budget)

### Custom audiences (build these)

**Custom audience 1: "Pedidos de comida CDMX"**
- People who searched any of:
  - `pedir comida rappi`
  - `rappi burritos`
  - `comida a domicilio cdmx`
  - `pedir comida cdmx`
- OR who use apps similar to `rappi.com`, `ubereats.com`, `didifood.com`

**Custom audience 2: "Foodies Roma-Condesa"**
- People who searched: `donde comer roma sur`, `mejores tacos cdmx`, `restaurantes roma norte`, `comida americana cdmx`
- OR browsed sites like: `chilango.com`, `food-and-travel.mx`, `eater.com`

### Affinity (1 only, observation)
- `Foodies` (Aficionados a la comida) — observation only

---

## 10. 30-day measurement plan

### Week 1 (daily checks — 10 min/day)

| Metric | Threshold | Action if breached |
|---|---|---|
| Impressions | <500/day after day 3 | Audit: are geo + language correct? Are keywords stuck in "Low search volume"? Loosen match types in AG3. |
| CTR | <2% overall after day 5 | Pull bottom-performing headlines, replace. Likely Headlines 11–15 across RSAs. |
| Avg CPC | >25 MXN | Geo too broad or competitor in auction. Add 1–2 negatives, check auction insights. |
| Conversions (order_rappi) | 0 conversions by day 5 | (a) Verify conversion fires — open `/es/order` with `?debug_mode=1` and click Rappi card. Check Google Tag Assistant. (b) If firing but no Ads attribution: GA4 import lag or `send_to` missing. |
| Budget pacing | Burning daily budget before 18:00 | Likely too-broad keyword pulling impressions. Add negatives. |
| Daily spend | >$150 MXN | Cap manually until investigated. |

### Weeks 2–4 (weekly review — 30 min/week)

| Day | Task |
|---|---|
| Day 8 | Search terms report → add 5–10 negatives. Pause keywords with >100 MXN spend, 0 conv. |
| Day 14 | **DECISION GATE: switch to tCPA.** If ≥30 conversions in trailing 14d: switch bid strategy to tCPA = 90 MXN. If <30: stay on Max Conversions, broaden 1 match type per ad group, re-evaluate day 21. |
| Day 15 | Shorten conversion window from 90d to 30d (Tools → Conversions → order_rappi → window). |
| Day 21 | RSA asset performance review. Pull "Low" rated headlines, replace with new variants. |
| Day 28 | Full campaign review: spend vs. conversions vs. value. Decide whether to (a) hold budget, (b) scale to $6K/mo, or (c) restructure AG3 if it's the weakest. |

### tCPA switch trigger (precise)
- ≥30 `order_rappi` conversions in trailing 30 days AND
- Cost/conv between 60 and 150 MXN (i.e., model has real signal, not a fluke conversion at 5 MXN)
- Start tCPA at 1.2× current avg CPA (gives Smart Bidding headroom), then ratchet down 10% every 5 days until at 90 MXN.

---

## 11. Launch checklist

**Do not enable until every box is checked.**

### Tracking
- [ ] 1. GA4 → Ads link verified (Tools → Linked accounts → Google Analytics 4 → status = Linked)
- [ ] 2. `order_rappi` conversion action shows status "Recording conversions" (or "No recent conversions" if no test fires yet — that's OK pre-launch)
- [ ] 3. `order_rappi` is set to **Primary**, count = "Una", value = 270 MXN
- [ ] 4. `order_whatsapp` is set to **Secondary** (not primary)
- [ ] 5. Enhanced conversions ON for `order_rappi`
- [ ] 6. Test fire: open `https://www.juanbertos.com/es/order` in incognito, click Rappi card, verify `order_rappi` event in GA4 DebugView
- [ ] 7. UTM template on campaign: `{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign=jb-search-rappi-2026-06&utm_content={creative}&utm_term={keyword}&gclid={gclid}`

### Campaign
- [ ] 8. Campaign type = Search (NOT Performance Max)
- [ ] 9. Search partners OFF, Display Network OFF
- [ ] 10. Final URL expansion OFF
- [ ] 11. Auto-applied recommendations OFF (Settings → Recommendations → Auto-apply)
- [ ] 12. Location targeting = **Presence** (not Interest)
- [ ] 13. All 15 colonias added; CDMX-wide and Edomex excluded
- [ ] 14. Language = Spanish only
- [ ] 15. Ad schedule matches restaurant hours (Mon OFF)
- [ ] 16. Bid strategy = Maximize Conversions (NOT tCPA yet)
- [ ] 17. Daily budget = $133 MXN

### Ad groups + assets
- [ ] 18. AG1, AG2, AG3 each have ≥2 RSAs, ≥10 keywords
- [ ] 19. Sitelinks (6) live at campaign level
- [ ] 20. Callouts (8) live at campaign level
- [ ] 21. Structured snippets (4) live at campaign level
- [ ] 22. Call extension live with shop hours schedule
- [ ] 23. Location extension linked to Google Business Profile (or queued)
- [ ] 24. Promotion extension with 30% OFF, end date set

### Negatives + signals
- [ ] 25. Negative keyword list `JB-NEG-MASTER` attached to campaign
- [ ] 26. Custom audiences "Pedidos de comida CDMX" + "Foodies Roma-Condesa" built and attached as signals
- [ ] 27. In-market segments attached as signals

### Billing + safety
- [ ] 28. Billing payment method active, no past-due balance
- [ ] 29. Account-level budget alert configured at $4,500 MXN/mo
- [ ] 30. Campaign budget pacing = "Standard" (NOT accelerated)
- [ ] 31. Conversion window scheduled for 30d (calendar reminder for day 15)
- [ ] 32. Final ad copy reviewed by Juan — no claims about cooking time, exclusive ingredients, or unverifiable benefits

### Site readiness
- [ ] 33. `/es/order` page loads <2.5s on mobile (PageSpeed Insights)
- [ ] 34. Rappi card is live (not "Próximamente") — confirmed in `apps/web/src/app/[locale]/order/OrderContent.tsx` line 21
- [ ] 35. Rappi target URL working — Juanberto's listing 687998 accepting orders

### Rappi promo (GATE — campaign cannot launch without these)
- [ ] 36. **Rappi Aliados portal:** "MD - 0 Commission x off in store" program is active on Juanberto's (Promociones → Activas). Note the campaign ID and end date.
- [ ] 37. **No restaurant-funded promos stacking:** All restaurant-funded promos on California/Breakfast/etc. are **paused or set to "Inactivas"**. Confirmed in Aliados → Promociones. (If a restaurant-funded promo overlaps with MD, the customer-paid effective discount can hit ~51% or void the MD commission waiver.)
- [ ] 38. **Verification in consumer app:** Open `https://www.rappi.com.mx/restaurantes/delivery/687998-juanberto-s` in incognito — menu-wide -30% / strikethrough pricing visible on at least 3 items (California, Breakfast, one other).
- [ ] 39. **MD program end date** noted on calendar reminder set for ~5 days before (currently 2026-07-01 if MD ends 2026-07-06). At that date: log into Aliados, verify MD extended; if not, pause Google Ads or update promotion extension copy.
- [ ] 40. **CAC tracking:** Confirm with Juan that MD is margin-neutral commission-swap (Rappi waives commission in exchange for the 30% discount). If MD's funding structure changes (e.g., shifts to "Compartido"), recompute unit economics.

---

## 12. Decisions locked (2026-06-14)

All open questions were resolved with Juan on 2026-06-14. Locked answers below.

1. **Promo structure — LOCKED: Use Rappi's "MD - 0 Commission x off in store" program. No restaurant-funded promos.**
   - **What MD is:** Rappi-managed program where customer sees 30% off menu-wide; Rappi waives their ~30% commission in exchange. Net to Juanberto's per order: margin-neutral. Active on Juanberto's listing as of 2026-06-14 (discovered 2026-06-14 mid-build; rows 1693604 / 1696050 / 1699103 in Aliados → Promociones → Activas; row 1696050 had $429 in sales overnight).
   - **Why not restaurant-funded:** Two restaurant-funded promos (1699211 Pro, 1699210 non-Pro) were set up on California + Breakfast at 30% before we discovered MD. They were paused on 2026-06-14 because stacking with MD would either (a) push effective discount to ~51% or (b) void the MD commission waiver — either way, big margin hit. Never re-enable while MD is active.
   - **Effect on CAC:** Old plan (restaurant-funded) projected blended CAC of ~138 MXN (90 ad cost + 48 foregone margin). New plan (MD-funded) → blended CAC = **90 MXN** (just Google Ads). 35% improvement in CAC, same LTV.
   - **MD end date:** 2026-07-06 per current Aliados entry. Rappi typically auto-renews MD for performing restaurants. Calendar reminder for 2026-07-01 to verify. If MD ends and isn't renewed: pause campaign OR pivot to a different value-prop hook (e.g., free guac, combo bundles).
   - **Ad copy rule:** "30% OFF en Rappi" can be claimed menu-wide because MD applies menu-wide. If MD ends or its scope changes, the playbook must be re-verified before continuing ads.
   - **Future combo upsell:** Water-fresca combos (California + agua, Breakfast + agua) are still a good AOV-lift idea — build them as new combo SKUs in Rappi → Menú when convenient, but not blocking this launch.

2. **Vercel `NEXT_PUBLIC_GADS_CONV_RAPPI` env var — LOCKED: SKIP, do not set.**
   Conversion attribution flows via the GA4-import path (Ads conversion action `juanbertos (web) order_rappi` has source = `Sitio web (Google Analytics (GA4))`). Adding native `send_to` would double-count every Rappi click. Native `send_to` and GA4 import are mutually exclusive attribution paths — we picked GA4 import. Tech-debt cleanup item: delete the `send_to: SEND_TO[type]` line at `apps/web/src/lib/analytics.ts:66` to make the code's intent unambiguous (non-blocking, can do anytime).

3. **Google Business Profile — LOCKED: VERIFIED. Location extension enabled.**
   GBP for Coahuila 192 is claimed and verified. Add the location extension on day 1 build per §7.

4. **WhatsApp number in ads — LOCKED: KEEP `+52 56 2124 3007`.**
   Non-Rappi fallback for users who prefer ordering by chat. Already on the public site.

5. **Initial tCPA target — LOCKED: 90 MXN.**
   33% of 270 MXN value. Ratchet down on the week 3+ schedule in §10 once we have ≥30 conversions.

6. **Competitor conquesting — LOCKED: HOLD (no conquesting in v1).**
   Chipotle / Taco Bell / Chili's / QDOBA stay in negatives. Revisit at day 30 if we have headroom in budget.

7. **Device strategy — LOCKED: All devices at launch.**
   Day-14 device performance review: if mobile is 90%+ of conversions (expected for delivery), apply a -50% desktop bid adjustment in week 3.

---

## Appendix — Source-of-truth references

- Order page CTAs + conversion wiring: `apps/web/src/app/[locale]/order/OrderContent.tsx`
- Cornerstone product/positioning copy: `apps/web/src/app/[locale]/burrito-california-cdmx/CornerstoneContent.tsx`
- Address, phone, hours: `apps/web/src/app/[locale]/locations/LocationsContent.tsx` + `apps/web/messages/es.json` lines 138–148
- Conversion values + types: `apps/web/src/lib/analytics.ts`
- Menu prices + descriptions: `apps/web/messages/es.json` lines 90–98
