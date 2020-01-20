import React from "react";
import { useDeck } from "mdx-deck";

import Steps from "./Steps";

const Provider = props => {
  const state = useDeck();

  return (
    <div
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "946px"
        }}
      >
        {props.children}
      </div>
      <Steps length={state.length} position={state.index + 1} />
    </div>
  );
};

export default Provider;
