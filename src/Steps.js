import React from "react";
import styled from "styled-components";

const fillArrayWithNumbers = n => {
  const arr = Array.apply(null, Array(n));
  return arr.map((_, i) => {
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
  height: 20px;
  width: 20px;
  margin: 2px;
  background-color: #ffcc33;
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
  background-color: #d49b7f;
  border-radius: 1px;
  display: inline-block;
`;

const Steps = ({ length, position }) => {
  return (
    <Container>
      <PacmanBody>{!!(position % 2) && <PacmanMouth />}</PacmanBody>

      {fillArrayWithNumbers(length - position).map(i => (
        <PacmanFood key={`food-${i}`} />
      ))}
    </Container>
  );
};

export default Steps;
