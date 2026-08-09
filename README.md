# BMI Calculator

A browser-based Body Mass Index calculator. Enter your weight (kg) and height (m), click "Calculate BMI", and see your BMI value along with a category (Thin / Normal / Overweight / Obese).

## Features

- Weight (kg) and height (m) number inputs
- Calculates BMI as `weight / height²`
- Categorizes the result:
  - **Thin** — BMI < 18.5
  - **Normal** — 18.5 ≤ BMI < 25
  - **Overweight** — 25 ≤ BMI ≤ 30
  - **Obese** — BMI > 30
- Basic range validation on inputs (see [Known issues](#known-issues))
- Background image styling

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no framework, build step, or dependencies.

## Running locally

No build step or server required — just open `index.html` directly in a browser:

```bash
open index.html   # macOS
# or
xdg-open index.html   # Linux
```

Or serve it locally if you prefer:

```bash
npx serve .
```

## Project structure

```
BMICalculator-main/
├── index.html
├── style.css
├── script.js
└── images/
    └── back_ground.jpg
```

## How it works

- `calculateBMI()` first checks that both fields are filled in.
- It then checks the entered height is between 0.55m and 2.72m, and weight between 2.5kg and 635kg (a sanity range roughly covering realistic human height/weight, based on recorded extremes) before computing BMI.
- If valid, it computes `bmi = weight / height ** 2`, picks a category via a nested `description()` function, and writes the result into the page.

## Known issues

- **The "invalid input" message never actually displays.** When height/weight fall outside the accepted range, the code builds a `message` string and `return`s it from `calculateBMI()`, but since this is only a click event handler, that returned string goes nowhere — `bmiText.innerHTML` is never updated in this branch, so the page just silently shows nothing (or the previous result).
- **The BMI value is displayed at full floating-point precision** (e.g. `23.437500000000004`) rather than rounded to a sensible number of decimal places.
- **No input `min`/`max` attributes on the fields themselves** — the range validation only happens in JavaScript after clicking Calculate, so there's no immediate feedback while typing.

## License

Not specified.
