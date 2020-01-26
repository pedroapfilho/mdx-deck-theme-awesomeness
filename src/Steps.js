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

const PacmanContainer = styled.div`
  margin: 2px;
`;

const PacmanUp = styled.div`
  height: 10px;
  width: 20px;
  background-color: #ffcc33;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: rotate(-25deg);
`;

const PacmanDown = styled.div`
  height: 10px;
  width: 20px;
  background-color: #ffcc33;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transform: rotate(25deg);
`;

const PacmanClosed = styled.div`
  height: 20px;
  width: 20px;
  background-color: #ffcc33;
  border-radius: 20px;
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
      <PacmanContainer>
        {!!(position % 2) ? (
          <>
            <PacmanUp />
            <PacmanDown />
          </>
        ) : (
          <PacmanClosed />
        )}
      </PacmanContainer>

      {fillArrayWithNumbers(length - position).map(i => (
        <PacmanFood key={`food-${i}`} />
      ))}
    </Container>
  );
};

export default Steps;
