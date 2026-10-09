# Datas Citoyennes

A French public-data explorer, built with HTML, CSS, JavaScript and accessible SVG charts. No backend, build step or account is required.

## Run locally

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. Hash routing works under any GitHub Pages subdirectory.

## Deploy

Create the public repository `vchaillo/datas-citoyennes`, push these files to `main`, and select **GitHub Actions** in Settings → Pages. The included workflow deploys the static files.

## Scope and provenance

- Charts describe the **2025 initial finance act**, not actual expenditure or the 2026 budget.
- Source: Direction du Budget, [2025 key figures](https://www.budget.gouv.fr/documentation/file-download/29012), pp. 2–5.
- Amounts are stored in millions of euros at the source precision.
- General-budget mission rows sum to the published total of 582,397 million. Special-account mission rows sum to 226,311 million, while published subtotals sum to 226,310 million, due to rounding. Percentages use the sum of the displayed rows.
- The default expenditure perimeter excludes the entire refunds mission, including local-tax refunds. This does not equal net expenditure in the official balance table.
- Special accounts and annexed budgets are separate. Do not add them to general-budget charts without removing internal transfers.
- The 2025 execution balance from the [PLRG presentation](https://www.budget.gouv.fr/reperes/loi_de_finances/articles/publication-projet-loi-relatif-0) is shown separately.
- Coverage follows the official key-figures document: all missions and its revenue categories. Programme/action-level detail and decomposition of other taxes are not included yet.
- Figures are a manually verified snapshot, checked on 2026-10-09. The application does not automatically refresh sources.

## Files

- `data.js`: source-backed data, amounts and scope metadata.
- `app.js`: routes, interactions, charts, calculations and JSON export.
- `styles.css`: responsive layout and visual theme.
- `.github/workflows/pages.yml`: deployment.

Visible interface copy is French; code and comments are English. The app has keyboard-operable charts, native dialogs, searchable tables, reduced-motion support and a mobile layout. Google Fonts is optional; system fonts are the fallback.
