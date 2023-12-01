import React from "react";

const Interval = ({ score, level }) => {
  let mainText = () => {
    if (level === "Pre-Level 1") {
      return (
        <div>
          <h2>Level 1</h2>
          <h3> Pop as many balloons in 5 seconds! </h3>
        </div>
      );
    } else if (level === "Pre-Level 2") {
      return (
        <div>
          <h2>Level 2</h2>
          <h3>{`You popped ${score} balloons!`}</h3>
        </div>
      );
    } else if (level === "Pre-Level 3") {
      return (
        <div>
          <h2>Level 3</h2>
          <h3>{`You popped ${score} balloons!`}</h3>
        </div>
      );
    }
  };
  return <div>{mainText()}</div>;
};

export default Interval;
