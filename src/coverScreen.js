import React from "react";

const CoverScreen = ({ score, username }) => {
  console.log(`score ${score}`);
  return (
    <div>
      <h1>{score > -1 ? "Time's up" : "Balloon Burst "}</h1>
    </div>
  );
};

export default CoverScreen;
