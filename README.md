# MDX Deck Theme Awesomeness

> This theme was created for my talks

## Install

```bash
npm install mdx-deck-theme-awesomeness
```

or

```bash
yarn add mdx-deck-theme-awesomeness
```

## Usage

To use it, you have to call the `awesomeTheme` function. If you want it to have your profile on the bottom-left, you must pass `name` and `twitter` to it.

## Example

```js
import awesomeTheme from "mdx-deck-theme-awesomeness";

export const themes = [
  awesomeTheme({ name: "Pedro Filho", twitter: "pedrofilhome" })
];
```
