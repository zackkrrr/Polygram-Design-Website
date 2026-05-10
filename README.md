# Polygram Design Website

Official website for **Polygram Design** — Commercial Interior Design & R&R Painting, Singapore.

## Pages

| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Homepage (V5 — Reference-led direction) |
| `about.html` | `/about` | Studio — story, stats, certifications, clients |
| `services.html` | `/services` | Two disciplines: Interior Design + R&R Painting |
| `portfolio.html` | `/portfolio` | Editorial masonry split by discipline (Portfolio B) |
| `case-study.html` | `/case-study` | Project case study — Marina One Boardroom |

## Design System

| Token | Value | Use |
|---|---|---|
| `--ink` | `#2b2620` | Text, borders |
| `--paper` | `#f5efe6` | Page background |
| `--gold` | `#c5a572` | Brand accent |
| `--taupe-bg` | `#ede4d3` | Section backgrounds (philosophy, stats, process) |
| `--white` | `#ffffff` | Card backgrounds |

**Fonts** (Google Fonts):
- `Cormorant Garamond` — serif headlines, brand wordmark
- `Inter` — body text, nav, UI labels
- `JetBrains Mono` — section labels, meta text

## Running Locally

Open `index.html` in any browser — no build step required.

```bash
# Or serve with a local dev server:
npx http-server . -p 8080
# then open http://localhost:8080
```

## Adding Real Photography

Image placeholders are `<div class="img-ph">` elements throughout each page. Replace each with a real `<img>` tag and remove the class once photos are ready. The `data-label` attribute identifies each slot.

## Structure

```
Polygram Design Website/
├── index.html          ← Homepage
├── about.html
├── services.html
├── portfolio.html
├── case-study.html
├── css/
│   └── style.css       ← All styles (design tokens + components + pages)
├── js/
│   └── main.js         ← Mobile menu toggle
└── README.md
```

## License

All rights reserved © Polygram Design Pte Ltd
