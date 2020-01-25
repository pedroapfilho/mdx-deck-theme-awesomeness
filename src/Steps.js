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
        bottom: 10,
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
      }}
    >
      {fillArrayWithNumbers(position).map(
        i =>
          i === 0 && (
            <div
              key={`passed-${i}`}
              style={{
                height: 15,
                width: 15,
                margin: 2,
                backgroundColor: "#000",
                borderRadius: "50%",
                position: "relative",
                border: "none"
              }}
            >
              {!!(position % 2) && (
                <div
                  style={{
                    background: "white",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    clipPath: "polygon(120% 75%, 50% 50%, 120% 20%)",
                    border: "white"
                  }}
                />
              )}
            </div>
          )
      )}
      {fillArrayWithNumbers(length - position).map(i => (
        <div
          key={`toPass-${i}`}
          style={{
            height: 5,
            width: 5,
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
