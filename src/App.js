import React from "react";
import { Balloon } from "react-single-balloon";
import CoverScreen from "./coverScreen";
import Interval from "./Interval";
import Timer from "./Timer";
import LocalStorageScores from "./LocalStorage";
import { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  //states
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(-1);
  const [gameEnded, setGameEnded] = useState(false);
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("");

  //keeps track of time and score internally w/o rerender
  const tracksScore = useRef(0);
  const tracksTime = useRef(41);

  //Balloon Pop:function to play sound and increase score
  const addHits = () => {
    let audio = new Audio(
      "https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3"
    );
    audio.play();
    tracksScore.current = tracksScore.current + 1;
  };

  //Resets game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setGameEnded(false);
    setGameStarted(true);
    setLevel("Pre-Level 1");
    tracksScore.current = 0;
  };

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
        <form onSubmit={(event) => handleSubmit(event)}>
          <h3>Enter your username</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <button type="submit">Submit name</button>
        </form>
      );
    } else if (score > -1 && gameEnded === true) {
      return <h3>{`${username} scored ${score} points!`}</h3>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      alert("Please enter a username.");
    } else {
      startGame();
    }
  };

  //Timer to separate levels
  useEffect(() => {
    //Pre-Level 1 timer
    if (level === "Pre-Level 1") {
      setTimeout(() => {
        tracksTime.current = tracksTime.current - 2;
        setLevel("Level 1");
      }, 2000);
    }

    //Level 1 timer
    if (level === "Level 1") {
      setTimeout(() => {
        tracksTime.current = tracksTime.current - 5;
        setLevel("Pre-Level 2");
        setScore(tracksScore.current);
      }, 5000);
    }

    //Pre-Level 2 timer
    if (level === "Pre-Level 2") {
      setTimeout(() => {
        tracksTime.current = tracksTime.current - 2;
        setLevel("Level 2");
      }, 2000);
    }
    //Level 2 timer
    if (level === "Level 2") {
      setTimeout(() => {
        tracksTime.current = tracksTime.current - 10;
        setLevel("Pre-Level 3");
        setScore(tracksScore.current);
      }, 10000);
    }

    //Pre-Level 2 timer
    if (level === "Pre-Level 3") {
      setTimeout(() => {
        tracksTime.current = tracksTime.current - 2;
        setLevel("Level 3");
      }, 2000);
    }
  }, [level]);

  useEffect(() => {
    if (level === "Level 3") {
      setTimeout(() => {
        addScoreBoard(username, tracksScore.current);
        setScore(tracksScore.current);
        setGameEnded(true);
        setGameStarted(false);
        setLevel("");
      }, 20000);
    }

    const addScoreBoard = (username, score) => {
      const scoreBoard = { username, score };

      // Retrieve current scores from local storage
      const currentScoresJSON = window.localStorage.getItem("scores");
      const currentScores = currentScoresJSON
        ? JSON.parse(currentScoresJSON)
        : [];

      // Add the new score to the current scores
      const newCurrentScores = [scoreBoard, ...currentScores];

      // Store the updated scores back in local storage
      window.localStorage.setItem("scores", JSON.stringify(newCurrentScores));
    };
  }, [level, username]);

  return (
    <div>
      <div className="coverScreen">
        {level && <Interval score={score} level={level} />}
        {(!gameStarted || gameEnded) && (
          <CoverScreen
            score={score}
            gameEnded={gameEnded}
            username={username}
          />
        )}
        {mainText()}
        {buttonText()}
      </div>

      <div>
        {/* <-- //LEVEL 1 BALLOONS -->  */}
        {level === "Level 1" && <h2 className="GameLevel">Level 1</h2>}
        {level === "Level 1" && (
          <Timer
            gameStarted={gameStarted}
            gameEnded={gameEnded}
            level={level}
          />
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FF8AAE"
            size={60}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={80}
            opacity={0.7}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={90}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            size={120}
            opacity={0.4}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {/* <-- //LEVEL 2 BALLOONS -->  */}
        {level === "Level 2" && <h2 className="GameLevel">Level 2</h2>}
        {level === "Level 2" && (
          <Timer
            gameStarted={gameStarted}
            gameEnded={gameEnded}
            level={level}
          />
        )}

        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FF8AAE"
            size={60}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={80}
            opacity={0.7}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#FFB2A6" size={90}>
            <div> </div>
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            size={120}
            opacity={0.4}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {/* <-- //LEVEL 3 BALLOONS -->  */}
        {level === "Level 3" && <h2 className="GameLevel">Level 3</h2>}
        {level === "Level 3" && (
          <Timer
            gameStarted={gameStarted}
            gameEnded={gameEnded}
            level={level}
          />
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FF8AAE"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={80}
            opacity={0.7}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={90}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            size={120}
            opacity={0.4}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FF8AAE"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={80}
            opacity={0.7}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#FFB2A6" size={90}>
            <div> </div>
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            size={120}
            opacity={0.4}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFF89A"
            size={60}
          ></Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="#FFB2A6"
            size={60}
          ></Balloon>
        )}
      </div>

      {gameEnded && <LocalStorageScores />}
    </div>
  );
};

export default App;
