import React from "react";
import { useDeck } from "mdx-deck";

const Provider = props => {
  const state = useDeck();

  return (
    <div
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
      }}
    >
      {props.children}
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          margin: 16
        }}
      >
        {state.index + 1} - {state.length}
      </div>
    </div>
  );
};

export default Provider;
