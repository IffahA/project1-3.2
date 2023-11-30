import React from "react";
import { Balloon } from "react-single-balloon";
import CoverScreen from "./coverScreen";
// import MultipleBalloons from "./balloon";
import Timer from "./Timer";
import { useState, useEffect, useRef } from "react";

const App = () => {
  //states
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(-1);
  const [timer, setTimer] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("");

  //keeps track of time and score internally w/o rerender
  const tracksScore = useRef(0);
  const tracksTime = useRef(35);

  //Balloon Pop:function to play sound and increase score
  const addHits = () => {
    let audio = new Audio(
      "https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3"
    );
    audio.play();
    tracksScore.current = tracksScore.current + 1;
    console.log(`ref score ${tracksScore.current}`);
  };

  //Resets game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimer(35);
    setGameEnded(false);
    setGameStarted(true);
    setLevel("Level 1");
    tracksScore.current = 0;
    console.log(`refreshing game`);
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
        <form onSubmit={(event) => handleSubmit(event)}>
          <h3>Enter your name</h3>
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
      return <h3>{`You scored ${score} points!`}</h3>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startGame();
  };

  useEffect(() => {
    console.log(`real name ${username}`);
  }, [username]);

  //console log score
  useEffect(() => {
    console.log(`your score is ${score}`);
  }, [score]);

  //timer
  useEffect(() => {
    console.log(`timer ${timer}`);
  }, [timer]);

  //game states

  useEffect(() => {
    console.log(`game started ${gameStarted}`);
  }, [gameStarted]);

  useEffect(() => {
    console.log(`game ended ${gameEnded}`);
  }, [gameEnded]);

  //Timer to keep track of when game ends
  useEffect(() => {
    if (timer === 35) {
      const timeout = setTimeout(() => {
        console.log("60secs up");
        setGameStarted(false);
        setGameEnded(true);
        setTimer(0);
      }, 35000);

      return () => clearTimeout(timeout);
    }
  }, [timer]);

  //Timer to separate levels
  useEffect(() => {
    //Level 1 timer
    if (level === "Level 1") {
      const timeout = setTimeout(() => {
        console.log("5 secs LEVEL");
        tracksTime.current = tracksTime.current - 5;
        console.log(`useeffect time in BALLOON JS ${tracksTime.current}`);
        setLevel("Level 2");
        setScore(tracksScore.current);
      }, 5000);

      return () => clearTimeout(timeout);
    }

    //Level 2 timer
    if (level === "Level 2") {
      const timeout = setTimeout(() => {
        console.log("10 secs LEVEL");
        tracksTime.current = tracksTime.current - 10;
        console.log(`useeffect time in BALLOON JS ${tracksTime.current}`);
        setLevel("Level 3");
        setScore(tracksScore.current);
      }, 10000);
      return () => clearTimeout(timeout);
    }

    //Level 3 timer
    if (level === "Level 3") {
      const timeout = setTimeout(() => {
        setScore(tracksScore.current);
        setGameEnded(true);
        setGameStarted(false);
        setLevel("");
      }, 20000);

      return () => clearTimeout(timeout);
    }
  }, [level]);

  useEffect(() => {
    console.log(`ref score in BALLOON JS ${tracksScore.current}`);
  }, [tracksScore]);

  useEffect(() => {
    console.log(`ref time in BALLOON JS ${tracksTime.current}`);
  }, [tracksTime]);

  useEffect(() => {
    console.log(`level ${level}`);
  }, [level]);

  useEffect(() => {
    console.log(`POINTS ${score}`);
  }, [score]);

  return (
    <div>
      {(!gameStarted || gameEnded) && (
        <CoverScreen
          score={score}
          onStartGame={startGame}
          username={username}
          //change later
        />
      )}
      {mainText()}
      {buttonText()}
      <Timer
        // score={score}
        gameStarted={gameStarted}
        gameEnded={gameEnded}
        time={timer}
      />
      <div>
        <p> Score {tracksScore.current}</p>
        {/* <-- //LEVEL 1 BALLOONS -->  */}
        {level === "Level 1" && <h2>Level 1</h2>}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#FFC0CB" size={60}>
            One
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="blue"
            size={80}
            opacity={0.7}
          >
            Two
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#EA18B4" size={90}>
            <div>Three</div>
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} size={120} opacity={0.4}>
            Four
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Five
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Six
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Seven
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Eight
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Nine
          </Balloon>
        )}
        {level === "Level 1" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Ten
          </Balloon>
        )}
        {/* <-- //LEVEL 2 BALLOONS -->  */}
        {level === "Level 2" && <h2>Level 2</h2>}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#FFC0CB" size={60}>
            One
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="blue"
            size={80}
            opacity={0.7}
          >
            Two
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#EA18B4" size={90}>
            <div>Three</div>
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} size={120} opacity={0.4}>
            Four
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Five
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Six
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Seven
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Eight
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Nine
          </Balloon>
        )}
        {level === "Level 2" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Ten
          </Balloon>
        )}
        {/* <-- //LEVEL 3 BALLOONS -->  */}
        {level === "Level 3" && <h2>Level 3</h2>}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#FFC0CB" size={60}>
            One
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="blue"
            size={80}
            opacity={0.7}
          >
            Two
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#EA18B4" size={90}>
            <div>Three</div>
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} size={120} opacity={0.4}>
            Four
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Five
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Six
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Seven
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Eight
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Nine
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Ten
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#FFC0CB" size={60}>
            One
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon
            onPop={addHits}
            loop={true}
            color="blue"
            size={80}
            opacity={0.7}
          >
            Two
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#EA18B4" size={90}>
            <div>Three</div>
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} size={120} opacity={0.4}>
            Four
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Five
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Six
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Seven
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Eight
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Nine
          </Balloon>
        )}
        {level === "Level 3" && (
          <Balloon onPop={addHits} loop={true} color="#18EA1E" size={140}>
            Ten
          </Balloon>
        )}
      </div>
    </div>
  );
};

export default App;
