import React, { useEffect } from "react";

// useeffect for local storage when game ends
export default function LocalStorageScores({ username, score, gameEnded }) {
  const scoreBoard = {
    username: { username },
    score: { score },
  };

  useEffect(() => {
    console.log(`running LocalStorage`);
  }, []);
  // if (username !== "" || score !== -1)

  const addScoreBoard = (scoreBoard) => {
    console.log("Running scoreboard");

    //if username is not empty / score
    if (gameEnded === true) {
      const board = window.localStorage.getItem("scores");
      console.log(`scoreboard: ${scoreBoard}`);
      console.log(`board: ${board}`);

      if (board === null) {
        window.localStorage.setItem("scores", JSON.stringify([scoreBoard]));
        return (
          <ul>
            {username} {score}
          </ul>
        );
      } else {
        const getCurrentScores = window.localStorage.getItem("scores");
        const currentScores = JSON.parse(getCurrentScores);
        console.log(currentScores);
        currentScores.push(scoreBoard);
        window.localStorage.setItem("scores", JSON.stringify(currentScores));
        //currentScores.username /score
        return (
          <ul>
            {currentScores.username} {currentScores.scores}
          </ul>
        );
      }
    }
  };
  // let data = addScoreBoard(scoreBoard);

  return addScoreBoard(scoreBoard);
}
