import { themes } from "mdx-deck";

const awesomeTheme = {
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
    monospace:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  colors: {
    text: "black",
    background: "white",
    primary: "black",
  },
  styles: {
    Slide: {
      fontFamily: "inherit",
      textAlign: "center",
    },
    code: {
      fontSize: "0.5em",
    },
    h1: {
      fontSize: "1.5em",
    },
    h2: {
      fontSize: "1.25em",
    },
    h3: {
      fontSize: "1em",
    },
    h4: {
      fontSize: "0.75em",
    },
    h5: {
      fontSize: "0.5em",
    },
    h6: {
      fontSize: "0.25em",
    },
  },
  ...themes.prism,
};

export default awesomeTheme;
