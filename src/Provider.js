import React, { useState, useEffect } from "react";
import { useDeck } from "mdx-deck";

import Steps from "./Steps";

const Provider = props => {
  const { length, index, mode } = useDeck();

  const presenterMode = mode === "PRESENTER";

  return (
    <>
      <main
        style={{
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
        }}
      >
        {props.children}
      </main>
      {!presenterMode && <Steps length={length} position={index + 1} />}
    </>
  );
};

export default Provider;
