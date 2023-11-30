import React from "react";

const CoverScreen = ({ score, onStartGame, time, username }) => {
  return (
    <div>
      <h1>{score > -1 ? "Time's up" : "Pop-a-balloon! "}</h1>
      <p>{username}</p>
    </div>
  );
};

export default CoverScreen;
