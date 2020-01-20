import React from "react";
import { useDeck } from "mdx-deck";

import Steps from "./Steps";

const Provider = props => {
  const state = useDeck();

  return (
    <>
      <main
        style={{
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
        }}
      >
        {props.children}
      </main>
      <Steps length={state.length} position={state.index + 1} />
    </>
  );
};

export default Provider;
