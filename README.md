Mini Me
=======

This project is a static portfolio site built with Next.js.
It requires Node.js 22 or newer.

## Quick Start
1. Copy `portfolio.default.json` to `portfolio.json`
2. Run `npm install`
3. Run `npm run lint` to ensure the code adheres to the project's ESLint rules.
4. Edit `portfolio.json` to reflect your information.
5. Run `npm run dev` and navigate to http://localhost:3000 to view the site.
6. Run `npm test` to execute the unit tests.
7. When you are satisfied with the results run `npm run export` to generate the static site.
   * The results of the export can be found in the `out` folder.

## Customizing Colors and Fonts

The `portfolio.json` file may include a `style` section to override the default
colors and fonts.  The following keys are supported:

```
{
  "style": {
    "colors": {
      "text": "#ffddff",
      "background": "#111111",
      "accent": "#ad71fb",
      "accentAlt": "#ffddff",
      "iconBackground": "#dfdfdf",
      "icon": "#111111"
    },
    "fonts": {
      "body": "'lato', sans-serif",
      "header": "'PT Sans', sans-serif",
      "googleFontsUrl": "//fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic|PT+Sans:400,700|PT+Sans+Narrow:400,700|Inconsolata:400"
    }
  }
}
```

Any of these values can be omitted to use their defaults. The fonts URL
defaults to the value in `DEFAULT_GOOGLE_FONTS_URL` inside `pages/index.js`.

### Using Google Fonts

1. Browse or search fonts at [fonts.google.com](https://fonts.google.com).
2. Add each font to your selection then open the **Get embed code** panel.
3. Copy the `href` attribute from the `<link>` tag and place it in
   `style.fonts.googleFontsUrl`.
