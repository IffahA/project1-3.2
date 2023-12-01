import React from "react";
import { useState, useEffect, useRef } from "react";

const Timer = ({ gameStarted, gameEnded, level }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  const timerInt = useRef(null);

  useEffect(() => {
    //countdown for level 1
    if (gameStarted && !gameEnded && level === "Level 1") {
      setTimeLeft(5);
      timerInt.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            clearInterval(timerInt.current);
            return 0;
          }
        });
      }, 1000);
    }

    //countdown for level 2
    if (gameStarted && !gameEnded && level === "Level 2") {
      setTimeLeft(10);
      timerInt.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            clearInterval(timerInt.current);
            return 0;
          }
        });
      }, 1000);
    }

    //countdown for level 3
    if (gameStarted && !gameEnded && level === "Level 3") {
      setTimeLeft(20);
      timerInt.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            clearInterval(timerInt.current);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInt.current);
    };
  }, [gameStarted, gameEnded, level]);

  // useEffect(() => {
  //   const timerInterval = setInterval(
  //     () => setTimeLeft((timeLeft) => timeLeft - 1),
  //     1000
  //   );
  //   return () => clearInterval(timerInterval);
  // }, [gameStarted, gameEnded]);

  // useEffect(() => {
  //   console.log(timeLeft);
  // }, [timeLeft]);

  return (
    <div>
      {level === "Level 1" && <p> {timeLeft} secs left </p>}
      {level === "Level 2" && <p> {timeLeft} secs left </p>}
      {level === "Level 3" && <p> {timeLeft} secs left </p>}
    </div>
  );
};

export default Timer;
