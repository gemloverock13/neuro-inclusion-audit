# Neuro-Inclusion Workplace Audit Tool

A free, browser-based self-assessment tool that helps HR teams understand how neuro-inclusive their organisation is across six key areas.

Built by [Brain in Hand](https://braininhand.co.uk).

---

## What it does

- 18 questions across 6 pillars of neuro-inclusion
- Scores each pillar independently and produces an overall maturity rating
- Generates prioritised recommendations based on lowest-scoring areas
- **100% client-side** — no data is stored, tracked or sent anywhere

## The six pillars

1. Culture & awareness
2. Recruitment & onboarding
3. Management practices
4. Environment & flexibility
5. Policies & adjustments
6. Employee voice

## Maturity ratings

| Score | Level |
|-------|-------|
| 0–24% | Starting out |
| 25–49% | Developing |
| 50–74% | Progressing |
| 75–100% | Leading |

---

## How to use

### Share via GitHub Pages

1. Fork or clone this repository into your own GitHub account
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Save — GitHub will give you a public URL like `https://yourusername.github.io/neuro-inclusion-audit`
5. Share that link with employers

### Run locally

No build step needed. Just open `index.html` in a browser, or serve with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Customisation

### Update the demo booking link

In `audit.js`, find the CTA section near the bottom and update the URL:

```js
<a href="https://braininhand.co.uk/contact" ...>
```

Replace with your actual booking or contact page URL.

### Update questions or scoring

All questions and section definitions are in the `SECTIONS` array at the top of `audit.js`. Each option is scored 0–3 (index position), where 0 = least inclusive and 3 = most inclusive.

### Branding

Colours are defined as CSS custom properties at the top of `style.css`:

```css
:root {
  --bih-deep:    #1B002E;
  --bih-purple:  #8E3CCE;
  --bih-lilac:   #EAC1FF;
  --bih-pale:    #F5EAF9;
  --bih-mint:    #7EDEC8;
  --bih-yellow:  #FFC962;
  --bih-cream:   #FAF9F5;
}
```

---

## File structure

```
/
├── index.html     # Main HTML shell
├── style.css      # All styles and Brain in Hand brand tokens
├── audit.js       # Questions, scoring logic, results rendering
└── README.md      # This file
```

---

## Privacy

This tool collects no data. All processing happens in the user's browser. There is no backend, no analytics, no cookies, and no database. It is safe to share with employers who may be concerned about sensitive self-assessment data leaving their organisation.

---

## Licence

&copy; Brain in Hand. All rights reserved.  
This tool may be shared freely for the purpose of employer engagement. It may not be modified or redistributed under a different brand without permission.
