import React from "react";

const Steps = ({ length, position }) => {
  const fillArrayWithNumbers = n => {
    const arr = Array.apply(null, Array(n));
    return arr.map(function(x, i) {
      return i;
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        margin: "10px 0",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        zIndex: 1
      }}
    >
      {fillArrayWithNumbers(position).map(i => (
        <span
          key={`toPass-${i}`}
          style={{
            height: 8,
            width: 8,
            margin: 2,
            backgroundColor: "#000",
            borderRadius: "50%",
            display: "inline-block"
          }}
        />
      ))}
      {fillArrayWithNumbers(length - position).map(i => (
        <span
          key={`passed-${i}`}
          style={{
            height: 8,
            width: 8,
            margin: 2,
            backgroundColor: "#bbb",
            borderRadius: "50%",
            display: "inline-block"
          }}
        />
      ))}
    </div>
  );
};

export default Steps;
