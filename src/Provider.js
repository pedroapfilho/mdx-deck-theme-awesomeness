import React from "react";
import { useDeck } from "mdx-deck";

import Steps from "./Steps";

import Profile from "./Profile";
import styled from "styled-components";

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Fade = styled.div`
  animation: fadein 2s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Provider = ({ children, name, twitter }) => {
  const { length, index, mode } = useDeck();

  const normalMode = mode === "normal";

  return (
    <Container>
      <Fade>{children}</Fade>

      {normalMode && (
        <>
          {name && twitter && <Profile name={name} twitter={twitter} />}
          <Steps length={length} position={index + 1} />
        </>
      )}
    </Container>
  );
};

export default Provider;
