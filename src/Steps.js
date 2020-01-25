import React from "react";
import styled from "styled-components";

const fillArrayWithNumbers = n => {
  const arr = Array.apply(null, Array(n));
  return arr.map(function(x, i) {
    return i;
  });
};

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PacmanBody = styled.div`
  height: 15px;
  width: 15px;
  margin: 2px;
  background-color: #000;
  border-radius: 50%;
  position: relative;
  border: none;
`;

const PacmanMouth = styled.div`
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(120% 75%, 50% 50%, 120% 20%);
  border: #fff;
`;

const PacmanFood = styled.div`
  height: 5px;
  width: 5px;
  margin: 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const Steps = ({ length, position }) => {
  return (
    <Container>
      {fillArrayWithNumbers(position).map(
        i =>
          i === 0 && (
            <PacmanBody key={`passed-${i}`}>
              {!!(position % 2) && <PacmanMouth />}
            </PacmanBody>
          )
      )}
      {fillArrayWithNumbers(length - position).map(i => (
        <PacmanFood key={`toPass-${i}`} />
      ))}
    </Container>
  );
};

export default Steps;
