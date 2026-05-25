# calculate.website — Project Context

## ⚠️ CRITICAL RULE — SESSION SCOPE
This chat is **ONLY** for `calculate.website`.
- `calculadora.live` has its own separate chat — do NOT touch calculadora.live files from this session.
- `countdowns.site` has its own separate chat — do NOT touch countdowns.site files from this session.

---

## What is this
Multilingual online calculator site. Public URL: **https://calculate.website**
- Primary language: **English** (`/`)
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

## ⚠️ MANDATORY RULE — ALL CALCULATORS IN 4 LANGUAGES
**EVERY calculator on this site MUST exist in all 4 languages:**
- `/calculator/` → English
- `/es/calculator/` → Spanish
- `/pt/calculator/` → Portuguese (BR)
- `/fr/calculator/` → French

**No exceptions.** When creating a new calculator, always create all 4 versions in the same batch.
When updating an existing calculator, check if the other 3 language versions need the same update.

The only exception: country-specific calculators (e.g. aguinaldo, sueldo-neto, nafta) that are
tagged with `countries:['AR']` in nav.js. These only make sense in Spanish/Argentina context and
don't need EN/PT/FR versions — but they still need the `countries` tag in nav.js.

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
/nav.js                    <- Global shared JS: nav, categories, FAQ, CSS injection
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
- **CSS injection**: global styles injected into every page (input normalization, nav, footer, FAQ, etc.)
- **Navigation**: hamburger menu (sidebar), language pills (EN/ES/PT/FR), country picker
- **FAQ system**: per-page FAQs based on current URL
- **Share button**, related calculators widget, site footer
- **Dark/light mode toggle**

### Adding a new calculator to nav.js
Find the correct category in the `calcs` array and add an item:
```js
{ n: 'Calculator Name', u: '/slug/', icon:'emoji', badge:true,
  d: 'Short description (card)',
  hd: 'Long description (hero subtitle)',
  countries: ['AR'] }  // only if country-specific
```
- `badge:true` marks the item as new
- `countries` array limits visibility by country; omit for global calculators

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

**Note**: nav.js globally injects `color-scheme:light` and normalizes all inputs/selects/textareas
to use Inter font, 10px border-radius, correct colors and focus state.

### Input with currency/unit prefix (e.g. $, euro, %)
Use `.has-prefix` class — nav.js automatically sets `padding-left:30px` on it:
```html
<div style="position:relative">
  <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);
               color:var(--ink-3);font-size:15px;pointer-events:none">$</span>
  <input type="number" class="has-prefix" ...>
</div>
```

---

## Calculator page template
Every page (all 4 languages) follows this exact structure:

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
  <style>/* design system + calculator styles */</style>
</head>
<body>
  <header><a href="/[lang/]" class="logo">calculate<span>.website</span></a></header>
  <div class="hero">
    <div class="bc"><!-- breadcrumb --></div>
    <h1><!-- emoji + title --></h1>
    <p class="sub"><!-- subtitle --></p>
  </div>
  <main><!-- Calculator card(s) --></main>
  <script src="/nav.js"></script>
  <script>/* Calculator JS */</script>
</body>
</html>
```

Header `href` per language:
- EN: `href="/"`  |  ES: `href="/es/"`  |  PT: `href="/pt/"`  |  FR: `href="/fr/"`

---

## i18n conventions

### Number formatting
- EN: `toLocaleString('en-US')` — 1,234.56
- ES: `toLocaleString('es-AR')` — 1.234,56
- PT: `toLocaleString('pt-BR')` — 1.234,56
- FR: `toLocaleString('fr-FR')` — 1 234,56

### Currency symbols
- EN: `$` (USD generic)
- ES global: `$` | ES Argentina-specific: `$` (ARS)
- PT: `R$` (BRL)
- FR: `€` (EUR)

### Work week (salary calculators)
- EN/ES global/PT: 40 h/week
- ES Argentina-specific: 44 h/week (legal AR)
- FR: 35 h/week (legal FR)

### Typing speed units
- EN: WPM  |  ES: PPM  |  PT: PPM  |  FR: MPM

---

## Key formulas reference
- **BMI**: weight(kg) / height(m)²
- **BMR (Mifflin-St Jeor)**: men 10W+6.25H-5A+5; women 10W+6.25H-5A-161
- **Mortgage**: M = P*r*(1+r)^n / ((1+r)^n-1)
- **Compound interest**: A = P*(1+r/n)^(nt)
- **ROI**: (final-initial)/initial * 100; annualized: (final/initial)^(1/years)-1
- **Inflation**: futureValue = amount*(1+rate/100)^years
- **Calories burned**: MET * weight(kg) * duration(h)
- **Body fat (US Navy)**: 495/(1.0324-0.19077*log10(waist-neck)+0.15456*log10(height))-450
- **Ideal weight (Devine)**: men 50+2.3*(in-60); women 45.5+2.3*(in-60)
- **Pregnancy EDD**: LMP + 280 days (Naegele's rule)
- **Heart rate zones**: 5 zones 50-60% to 90-100% of maxHR = 220-age
- **SAC/Aguinaldo (AR)**: bestSalary/2 * (daysWorked/semesterDays)
- **Sueldo neto (AR)**: gross * 0.83 (jubilacion 11% + PAMI 3% + Obra Social 3%)
- **Triangle (Heron)**: s=(a+b+c)/2; area=sqrt(s*(s-a)*(s-b)*(s-c))
- **Base converter**: parseInt(val, fromBase).toString(toBase)

---

## _redirects (Cloudflare Pages fallback)
When a translated version doesn't exist yet, Cloudflare redirects to the EN version:
```
/es/*  /:splat  302
/pt/*  /:splat  302
/fr/*  /:splat  302
```
Cloudflare serves existing static files FIRST — redirects only fire for missing pages.
Replace fallback redirects with real translated pages as soon as possible.

---

## Things NOT to do
- No frameworks, bundlers, or npm packages
- No DM Sans — always Inter
- No `calculadora.live` references anywhere in calculate.website files
- No calculator without all 4 language versions (unless AR-specific with `countries` tag)
- No page without `<script src="/nav.js"></script>`
- No forgetting `git push origin main` after committing
- No touching countdowns.site or calculadora.live files from this session

## Things to always do
- All 4 language versions when creating any calculator
- Correct hreflang tags on every page
- Add new calculators to nav.js with all required fields
- Use Inter font, CSS variables, and the standard template
- Commit and push after each completed batch of work
