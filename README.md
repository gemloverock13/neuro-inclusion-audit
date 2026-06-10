# Neurodivergent Employee Experience Audit

A free, browser-based audit tool that helps HR teams honestly assess the day-to-day lived experience of neurodivergent employees in their organisation — not just whether policies exist, but whether they actually work for real people.

Built by [Brain in Hand](https://braininhand.co.uk).

---

## What it does

18 questions across 6 pillars, each scored 0–3. Results show an overall maturity rating, a breakdown by pillar, and the top 3 priority recommendations — each linked directly to what Brain in Hand does.

Everything runs in the browser. No data is stored, tracked or sent anywhere.

## The six pillars

1. Visibility & belonging
2. Day-to-day working life
3. Understanding their needs
4. Manager relationships
5. Getting support
6. Staying & thriving

## Maturity ratings

| Score | Level |
|-------|-------|
| 0–24% | Significant gaps |
| 25–49% | Some foundations |
| 50–74% | Making progress |
| 75–100% | Strong practice |

---

## Hosting on GitHub Pages

1. Upload all four files to your GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder, click **Save**
4. Your live URL will appear as: `https://yourusername.github.io/your-repo-name`

---

## Customisation

### Demo booking link
In `audit.js`, find the CTA near the bottom and update:
```js
href="https://braininhand.co.uk/contact"
```

### Questions
All questions are in the `SECTIONS` array at the top of `audit.js`. Each option is scored 0–3 by position (0 = least inclusive, 3 = most inclusive).

### Brand colours
Defined as CSS variables at the top of `style.css`:
```css
:root {
  --bih-deep:   #1B002E;
  --bih-purple: #8E3CCE;
  --bih-lilac:  #EAC1FF;
  --bih-pale:   #F5EAF9;
  --bih-mint:   #7EDEC8;
  --bih-yellow: #FFC962;
  --bih-cream:  #FAF9F5;
}
```

---

## File structure

```
/
├── index.html   — page structure
├── style.css    — Brain in Hand brand styles
├── audit.js     — questions, scoring, results
└── README.md    — this file
```

---

## Privacy

No data is collected. All processing happens in the user's browser. No backend, no analytics, no cookies, no database.

---

## Licence

&copy; Brain in Hand. All rights reserved.
