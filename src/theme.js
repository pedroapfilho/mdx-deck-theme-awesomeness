import React from "react";
import RawProvider from "./Provider";

const theme = ({ name, twitter }) => {
  const Provider = ({ children }) => {
    return (
      <RawProvider name={name} twitter={twitter}>
        {children}
      </RawProvider>
    );
  };

  return {
    styles: {
      Slide: {
        fontFamily: "inherit",
        textAlign: "center"
      },
      code: {
        fontSize: "0.5em"
      },
      h1: {
        fontSize: "1.5em"
      },
      h2: {
        fontSize: "1.25em"
      },
      h3: {
        fontSize: "1em"
      },
      h4: {
        fontSize: "0.75em"
      },
      h5: {
        fontSize: "0.5em"
      },
      h6: {
        fontSize: "0.25em"
      }
    },
    Provider
  };
};

export default theme;
