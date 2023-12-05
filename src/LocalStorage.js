import React from "react";

// useeffect for local storage when game ends
export default function LocalStorageScores() {
  const currentScores = JSON.parse(window.localStorage.getItem("scores"));

  // Sort the scores based on the score value in descending order
  const sortedScores = currentScores.sort((a, b) => b.score - a.score);

  // Limit the scores to the desired length (e.g., 3)
  const limitedScores = sortedScores.slice(0, 3);

  return (
    <div className="ScoreTable">
      <h3 className="ScoreTitle">Highest Scores</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {limitedScores.map((score, index) => (
            <tr key={index}>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
