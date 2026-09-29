# Corgi small business landing pages

Direct-to-business landing pages for cold outreach, built from the 15 Beagle sell sheets.
Corgi branded. **Not indexed** — `noindex` on every page plus a blanket `robots.txt`.
These are meant to be shared by link only.

## Pages

| Industry | File |
|---|---|
| Hub | `index.html` |
| Restaurants & Bars | `restaurant-insurance.html` |
| Retail | `retail-insurance.html` |
| Automotive | `automotive-insurance.html` |
| Construction | `construction-insurance.html` |
| Contractors & Trades | `contractor-insurance.html` |
| Professional Services | `professional-services-insurance.html` |
| Property Services | `property-services-insurance.html` |

## Editing

- `data.js` — all the copy, one object per industry. This is the content spec.
  Nothing here is invented; every line traces back to a sell sheet.
- `index.html` — the template, styles and render functions.
- `node build.js` — regenerates `docs/`, which is what GitHub Pages serves.

## Still open

- **State availability per industry.** Every page carries a visible flag where the
  state list belongs. The product team has to supply it.
- **Where the quote form posts.** It currently posts nowhere. The live version
  should post where `app.corgi.insure/sign-up` posts, plus three hidden values:
  industry, campaign, and source link — that is what attributes a quote back to
  the outreach email that produced it.
- **Liquor Liability** has no page yet. It is the eighth direct-to-business class
  in the sell sheets and currently appears only as a coverage line on the
  restaurant page.
