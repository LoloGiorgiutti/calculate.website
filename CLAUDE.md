# calculate.website — Project Context

## ⚠️ CRITICAL RULE — SESSION SCOPE
This chat is **ONLY** for `calculate.website`.
- `calculadora.live` has its own separate chat — do NOT touch calculadora.live files from this session.
- `countdowns.site` has its own separate chat — do NOT touch countdowns.site files from this session.

---

## What is this
Multilingual online calculator site. Public URL: **https://calculate.website**
- Primary language: **English** (`/`) — main traffic target
- Spanish: `/es/`
- Portuguese (BR): `/pt/`
- French: `/fr/`

## Stack
- Pure HTML/CSS/JS — no frameworks, no bundlers, no npm
- Static files deployed via **Cloudflare Pages**
- Repo: `git@github.com:LoloGiorgiutti/calculate.website.git` (branch `main`)
- Deploy: automatic on `git push origin main`
- **Always `git push origin main` after committing**

## Project root path (local)
```
/Users/lorenzogiorgiutti/Desktop/paginas web/calculate.website/
```

---

## Owner goals & strategy

### Primary goal — 2026
Reach **$1,000/month** in revenue by end of 2026 (minimum: at least one month hitting that figure).

### Monetization
- **Primary**: Google AdSense display ads
- Ads placement strategy: TBD based on real traffic data — do not hardcode aggressive ad layouts
- No subscription or premium plan planned for now
- Future: affiliate links (finance products, brokers, fintech) may be added

### Market & audience
- **Primary market**: global English-speaking audience (EN traffic is the main priority)
- **Secondary markets**: Spanish-speaking LATAM (Argentina core), Portuguese (Brazil), French
- Competitors to outperform: calculator.net, omnicalculator.com, rapidtables.com
- **Differentiation**: combination of (1) superior design and UX, (2) real multilingual adaptation
  (not just translation — local currency, units, laws, cultural context), (3) unique niche
  calculators others don't cover (nafta AR, aguinaldo, crypto, ecommerce, etc.)

### Growth strategy
- **SEO organic**: main growth channel — Google ranking for calculator-related queries
- **Social media**: TikTok, Instagram, YouTube Shorts showing calculators in use
- **Cross-traffic**: users from calculadora.live may discover calculate.website
- No paid advertising planned

### Analytics
- **Google Analytics 4** installed — Measurement ID: `G-F7TMYTM75E`
  - Injected via nav.js (top of file) → applies to every page automatically
  - Tracks: page views, scroll depth, outbound clicks, and more (Enhanced Measurement enabled)
- **Google Search Console (GSC)** also active for search performance metrics
- Do NOT add a second GA4 tag to individual pages — nav.js already covers all of them

### Future languages
- Additional languages (Italian, German, Arabic, etc.) will be added **based on traffic data**
- No new languages until EN/ES/PT/FR are fully complete

---

## ⚠️ MANDATORY RULE — ALL CALCULATORS IN 4 LANGUAGES
**EVERY calculator on this site MUST exist in all 4 languages:**
- `/calculator/` → English
- `/es/calculator/` → Spanish
- `/pt/calculator/` → Portuguese (BR)
- `/fr/calculator/` → French

**No exceptions.** When creating a new calculator, always create all 4 versions in the same batch.
When updating an existing calculator, update all 4 language versions.

The only exception: country-specific calculators (e.g. aguinaldo, sueldo-neto, nafta) tagged
with `countries:['AR']` in nav.js. These are Argentina-specific and don't need EN/PT/FR versions.

---

## ⚠️ EVERGREEN PRINCIPLE
The site must be **100% evergreen** — content and results must never go stale.

### For calculators with dynamic data (prices, rates, taxes):
1. **Preferred**: fetch data from a reliable public API automatically
2. **Fallback if no API exists**: let the user enter the current value manually (e.g. "enter today's fuel price")
3. **Default values**: maintain a JSON/admin panel with editable default values, so the page works
   out of the box even if the user doesn't change them
4. **Never hardcode data that changes** (prices, tax rates, legal limits, etc.) directly in HTML

### Admin panel
For calculators with default values that need periodic updates, use a protected admin panel
(password-protected page) that updates a JSON file via GitHub API — same pattern as calculadora.live.

---

## Development priority
**Parallel approach**: fix existing bugs and improve UX *at the same time* as adding new calculators.
- Do not block new calculators on full polish of existing ones
- Do not ignore UX bugs in favor of volume
- When creating new pages, fix any known issues from the start (don't copy bugs)

---

## SEO guidelines
- Each page must have: unique `<title>`, `<meta name="description">`, `<link rel="canonical">`, hreflang tags
- **Depth depends on the calculator's potential**: high-traffic calculators (BMI, mortgage, percentage)
  deserve deeper SEO work (schema markup, detailed FAQs, structured data); niche calculators can be lighter
- FAQs are included via nav.js automatically — add entries to nav.js FAQ section for each calculator
- Schema markup: `WebApplication` type for calculators
- hreflang: always include all 4 languages + x-default on every page
- **No blog/editorial content planned for now** — FAQs within each calculator page serve this purpose

---

## File structure
```
/                          <- EN homepage
/es/                       <- ES homepage
/pt/                       <- PT homepage
/fr/                       <- FR homepage
/[calculator]/             <- EN calculator page
/es/[calculator]/          <- ES calculator page
/pt/[calculator]/          <- PT calculator page
/fr/[calculator]/          <- FR calculator page
/nav.js                    <- Global shared JS: categories, CSS injection, nav, FAQ
/_redirects                <- Cloudflare Pages: language fallback (missing /es/ -> /)
/sitemap.xml
/robots.txt
/favicon.svg
/og-image.png
```

---

## nav.js — Central shared system
Included in every page: `<script src="/nav.js"></script>` (at the end of `<body>`)

nav.js provides:
- **Calculator data**: all categories, items, URLs, descriptions, country tags
- **CSS injection**: global styles applied to every page (input normalization, nav, footer, FAQ, share, etc.)
- **Navigation**: hamburger menu (sidebar), language pills (EN/ES/PT/FR), country picker
- **FAQ system**: per-page FAQs keyed by URL pathname
- **Share button**, related calculators widget, site footer
- **Dark/light mode toggle**

### Adding a new calculator to nav.js
Find the correct category in the `calcs` array and add an item:
```js
{ n: 'Calculator Name', u: '/slug/', icon:'emoji', badge:true,
  d: 'Short description (shown on cards)',
  hd: 'Longer description (shown in hero subtitle on the calculator page)',
  countries: ['AR'] }  // only if country-specific; omit for global
```

### Categories currently in nav.js
1. 💪 Health & Fitness — slug: `health`
2. 💰 Finance & Money — slug: `finance`
3. 🔢 Math & Numbers — slug: `math`
4. 📅 Dates & Time — slug: `dates`
5. 🎮 Games & Tests — slug: `games`
6. ⚽ World Cup 2026 — slug: `world-cup`
7. 🪙 Crypto — slug: `crypto`
8. 🛍️ eCommerce — slug: `ecommerce`
9. 🚗 Cars & Fuel — slug: `autos`
10. 🏠 Home & Property — slug: `hogar`
11. ⚖️ Legal & Labor — slug: `legal`
12. 💱 Finance AR — slug: `finanzas` (Argentina-specific)

---

## CSS Design System
Every calculator page must use these variables and base styles:

```css
:root {
  --bg:#F7F8FA; --surface:#fff; --ink:#0A0E1A; --ink-2:#363B4F;
  --ink-3:#858AA0; --line:#E4E7EE; --accent:#4F6BFF;
  --accent-soft:#EEF1FF; --pos:#22C55E; --radius:16px;
}
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family:'Inter',sans-serif; background:var(--bg); color:var(--ink);
       min-height:100vh; -webkit-font-smoothing:antialiased; }
a { color:inherit; text-decoration:none; }
```

**Font**: always `Inter` (never DM Sans). Load via Google Fonts in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

nav.js globally injects:
- `color-scheme: light` — prevents macOS/browser dark mode from styling form elements
- Normalized input/select/textarea styles: Inter font, 10px border-radius, #F7F8FA bg, #4F6BFF focus
- `.has-prefix` / `.with-prefix`: `padding-left:30px!important` so currency symbols ($, €, %) don't overlap values
- Desktop responsive: `@media(min-width:768px)` expands `.page`, `.faq-section`, `.related-section`, `.share-wrap` from 520px to 720px

### Input with currency/unit prefix — MANDATORY PATTERN
⚠️ **CRITICAL RULE:** nav.js injects `padding:12px 14px!important` on ALL inputs. This resets padding-left to 14px,
which causes the currency symbol to overlap the typed value. To fix this, **every** input that has a `$`, `€`, `%`
or any prefix span MUST have the class `has-prefix` (or `with-prefix`). nav.js then applies `padding-left:30px!important`
to restore the correct spacing.

**NEVER** rely on base `input[type=number]{padding-left:30px}` — nav.js will override it.
**ALWAYS** add `class="has-prefix"` (or include `has-prefix` in an existing class list) to any input with a left prefix span.

```html
<!-- ✅ CORRECT — has-prefix class ensures padding-left:30px survives nav.js override -->
<div style="position:relative">
  <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);
               color:var(--ink-3);font-size:15px;pointer-events:none">$</span>
  <input type="number" class="has-prefix" ...>
</div>

<!-- ❌ WRONG — nav.js will override padding-left and symbol will overlap the text -->
<div style="position:relative">
  <span style="position:absolute;left:14px;...">$</span>
  <input type="number" style="padding-left:30px" ...>   <!-- no has-prefix class -->
</div>
```

Classes recognised by nav.js for prefix inputs: `has-prefix`, `with-prefix`, `input-field has-prefix`

---

## Calculator page template
```html
<!DOCTYPE html>
<html lang="[xx]">
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Title] | calculate.website</title>
  <meta name="description" content="[desc]">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://calculate.website/[lang/]calculator/">
  <link rel="alternate" hreflang="en"    href="https://calculate.website/calculator/">
  <link rel="alternate" hreflang="es"    href="https://calculate.website/es/calculator/">
  <link rel="alternate" hreflang="pt-BR" href="https://calculate.website/pt/calculator/">
  <link rel="alternate" hreflang="fr"    href="https://calculate.website/fr/calculator/">
  <link rel="alternate" hreflang="x-default" href="https://calculate.website/calculator/">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>/* design system variables + calculator-specific styles */</style>
</head>
<body>
  <!-- HEADER: nav.js COMPLETELY REPLACES the header content at runtime.     -->
  <!-- Just put an empty <header> tag. nav.js builds: left(hamburger+logo)  -->
  <!-- + right(lang-pills+country+theme). Logo href is set from CW_LANG.    -->
  <!-- DO NOT put logo or any nav elements inside <header> — nav.js owns it. -->
  <header></header>
  <div class="hero">
    <div class="bc"><!-- breadcrumb: Home > Category > Calculator Name --></div>
    <h1><!-- emoji + calculator name --></h1>
    <p class="sub"><!-- one-line description --></p>
  </div>
  <main><!-- Calculator card(s) --></main>
  <script src="/nav.js"></script>
  <script>/* Calculator logic */</script>
</body>
</html>
```

### Header — nav.js owns it entirely
nav.js replaces `<header>` content with a definitive two-group layout:
- **Left** (`.hdr-left`): hamburger button + logo link
- **Right** (`.hdr-right`): language pills (EN/ES/PT/FR) + country picker + theme toggle
- **Height**: 64px | **Horizontal padding**: 24px each side (Apple/MercadoLibre style)
- Logo `href` is set automatically based on `CW_LANG` (no need to set it manually)
- Language switcher `cwLangUrl(lang)` strips existing prefix and adds the target one
- Auto-detect saves country for AR-specific calculator filtering — does NOT auto-redirect language

---

## i18n conventions

### Number formatting
- EN: `toLocaleString('en-US')` → 1,234.56
- ES: `toLocaleString('es-AR')` → 1.234,56
- PT: `toLocaleString('pt-BR')` → 1.234,56
- FR: `toLocaleString('fr-FR')` → 1 234,56

### Currency
- EN: `$` (generic USD)
- ES global: `$` | ES Argentina-specific: `$` (ARS, formatted as large integers)
- PT: `R$` (BRL)
- FR: `€` (EUR)

### Work week (salary calculators)
- EN / ES global / PT: 40 h/week
- ES Argentina: 44 h/week (legal AR)
- FR: 35 h/week (legal FR)

### Typing speed units
- EN: WPM | ES: PPM | PT: PPM | FR: MPM

---

## Key formulas reference
- **BMI**: weight(kg) / height(m)²
- **BMR (Mifflin-St Jeor)**: men 10W+6.25H-5A+5; women 10W+6.25H-5A-161
- **TDEE**: BMR × activity multiplier (sedentary 1.2 → very active 1.9)
- **Mortgage**: M = P·r·(1+r)^n / ((1+r)^n − 1)
- **Compound interest**: A = P·(1+r/n)^(nt)
- **ROI**: (final−initial)/initial × 100; annualized: (final/initial)^(1/years) − 1
- **Inflation**: futureValue = amount·(1+rate/100)^years
- **Calories burned**: MET × weight(kg) × duration(h)
- **Body fat (US Navy)**: 495/(1.0324−0.19077·log10(waist−neck)+0.15456·log10(height))−450
- **Ideal weight (Devine)**: men 50+2.3·(in−60); women 45.5+2.3·(in−60)
- **Pregnancy EDD**: LMP + 280 days (Naegele's rule)
- **Heart rate zones**: 5 zones 50–60% to 90–100% of maxHR = 220−age
- **SAC/Aguinaldo (AR)**: bestSalary/2 × (daysWorked/semesterDays)
- **Sueldo neto (AR)**: gross × 0.83 — jubilacion 11% + PAMI 3% + Obra Social 3%
- **Triangle (Heron)**: s=(a+b+c)/2; area=√(s·(s−a)·(s−b)·(s−c))
- **Base converter**: parseInt(val, fromBase).toString(toBase)

---

## Language fallback (_redirects)
Cloudflare Pages serves static files BEFORE checking redirects.
If `/es/bmi/` doesn't exist yet, user is redirected to `/bmi/` (EN version).
This is a temporary fallback — replace with a real translated page as soon as possible.
```
/es/*  /:splat  302
/pt/*  /:splat  302
/fr/*  /:splat  302
```

---

## Things NOT to do
- No frameworks, bundlers, or npm packages
- No DM Sans — always Inter
- No `calculadora.live` references in calculate.website files
- No calculator without all 4 language versions (unless country-specific with `countries` tag)
- No page without `<script src="/nav.js"></script>`
- No hardcoded dynamic data (prices, rates, legal values) — use APIs, user input, or admin panel
- No forgetting `git push origin main` after committing
- No touching countdowns.site or calculadora.live files from this session
- **NO "no ads tracking you"** anywhere on the site — monetization IS Google AdSense (ad tracking is the business model)
- **NO hello@calculate.website email** anywhere — this address does not exist. Always direct users to the feedback widget instead.

## Content rules
- **Monetization**: Google AdSense display ads are the primary revenue source. Never claim the site is "ad-free" or "no tracking". The privacy policy already discloses AdSense use correctly.
- **Contact**: Never reference hello@calculate.website. Always say "use the feedback button on any calculator page" instead.
- **No email addresses** in any page content — not about, not terms, not privacy, not any calculator.

## Things to always do
- All 4 language versions when creating any calculator
- Correct hreflang tags (en, es, pt-BR, fr, x-default) on every page
- Add new calculators to nav.js with all fields (n, u, icon, badge, d, hd, countries if needed)
- Use Inter font, CSS variables, and the standard page template
- Keep all content evergreen — no stale prices, dates, or values
- Commit and push after each completed batch of work
