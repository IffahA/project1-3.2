import React from "react";
import { Balloon } from "react-single-balloon";
import { useRef, useEffect, useState } from "react";
import Timer from "./Timer";

const MultipleBalloons = ({}) => {
  const [level, setLevel] = useState("Level 1");
  const [score, setScore] = useState(0);

  const tracksScore = useRef(0);
  const tracksTime = useRef(35);

  const addHits = () => {
    let audio = new Audio(
      "https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3"
    );
    audio.play();
    tracksScore.current = tracksScore.current + 1;
    props++;
    // updateScore(tracksScore.current);

    console.log(`ref score ${tracksScore.current}`);
  };

  // const updateTime = () => {
  //   tracksTime.current = tracksTime.current - 10;
  //   console.log(`ref time in BALLOON JS ${tracksTime.current}`);
  // };

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

    //Level 2 timer
    if (level === "Level 3") {
      const timeout = setTimeout(() => {
        setScore(tracksScore.current);
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

  //Test balloon

  // const BalloonGame = () => {
  //   const balloonsData = [
  //     { id: 1, color: "red" },
  //     { id: 2, color: "blue" },
  //   ];

  //   return (
  //     <div>
  //       {balloonsData.map(
  //         balloonsData.map((balloon) => (
  //           <Balloon key={balloon.id} color={balloon.color} />
  //         ))
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div>
      <Timer score={props} />
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
  );
};

export default MultipleBalloons;
