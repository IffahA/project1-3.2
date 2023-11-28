import React from "react";
import { Balloon } from "react-single-balloon";
import CoverScreen from "./coverScreen";
import MultipleBalloons from "./balloon";
import { useState, useEffect } from "react";

const App = () => {
  //states
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(-1);
  const [time, setTime] = useState(10);
  const [gameEnded, setGameEnded] = useState(false);
  const [username, setUsername] = useState("");

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTime(10);
    setGameEnded(false);
  };

  useEffect(() => {
    console.log(`game state ${gameStarted}`);
  }, [gameStarted]);

  let buttonText = () => {
    if (!gameStarted && score > -1) {
      return (
        <button type="button" onClick={startGame}>
          Reset
        </button>
      );
    }
  };

  let mainText = () => {
    if (score === -1 && !gameStarted) {
      return (
        <form>
          <h3>Enter your name</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button type="submit" onSubmit={handleSubmit}>
            Submit name
          </button>
        </form>
      );
    } else if (score > -1 && gameEnded === true) {
      return <h3>{`You scored ${score} points!`}</h3>;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    startGame();
  };

  useEffect(() => {
    console.log(`real name ${username}`);
  }, [username]);

  const handleOnPop = () => {
    let audio = new Audio(
      "https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3"
    );
    audio.play();
  };

  return (
    <div>
      {(!gameStarted || gameEnded) && (
        <CoverScreen
          score={score}
          onStartGame={startGame}
          username={username}
          //change later
          time={10}
        />
      )}
      {mainText()}
      {buttonText()}
      <div>
        {gameStarted === true && <MultipleBalloons onPop={handleOnPop} />}
      </div>
    </div>
  );
};

export default App;
