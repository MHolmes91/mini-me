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

## `portfolio.json` Reference

The file `portfolio.json` controls what content appears on your portfolio site. Below is an explanation of every supported field and where to obtain its value.

### Basic Fields

* `title` – The main heading displayed on the page.
* `pageTitle` – (optional) Title shown in the browser tab. Defaults to `title` when omitted.
* `description` – Markdown text shown below the heading.
* `googleAnalyticsID` – (optional) Measurement ID for Google Analytics. Create a property at [analytics.google.com](https://analytics.google.com), open the Web stream for your site and copy the *Measurement ID* (for example `G-XXXXXXX`).
* `gravatarEmail` – (optional) Email address associated with your [Gravatar](https://gravatar.com) account. The site hashes this email to fetch the avatar image.

### Favicon and Header Picture

* `favicon.linkUrl` – URL to an image used as the browser favicon.
* `favicon.useGravatar` – Set to `true` to use the avatar from `gravatarEmail` instead of `linkUrl`.
* `headerPicture.linkUrl` – URL of the picture displayed in the page header.
* `headerPicture.useGravatar` – Set to `true` to display your Gravatar.
* `headerPicture.pictureText` – Alternate text for the header picture.

### Styling

The optional `style.colors` and `style.fonts` objects override the default colours and fonts as shown above. The `googleFontsUrl` value should be copied from the `href` attribute of the embed link on [Google Fonts](https://fonts.google.com).

### Portfolio Links

`portfolio` contains entries for the icons displayed on the page. Each entry accepts an optional `order` property to control its position. Supported entries are:

* `github.username` – GitHub user name.
* `twitter.handle` – Twitter handle without the `@`.
* `bluesky.handle` – Bluesky handle.
* `linkedIn.username` – LinkedIn profile name.
* `email.address` – Email address for the mail link.
* `bitbucket.username` – Bitbucket user name.
* `stackOverflow.id` – Numeric user ID from your Stack Overflow profile URL.
* `stackExchange.id` – Numeric user ID from your Stack Exchange profile URL.

### Minimal Example

`portfolio.minimal.json` contains the smallest possible configuration:

```json
{
  "title": "Developer Name",
  "description": "A short description about me.",
  "portfolio": {
    "github": { "username": "github" }
  }
}
```

Copy this file to `portfolio.json` and update the values to get started quickly.
