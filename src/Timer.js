import React from "react";
import { useState, useEffect, useRef } from "react";

const Timer = ({ gameStarted, gameEnded, timer, score }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  const timerInt = useRef(null);

  useEffect(() => {
    if (gameStarted && !gameEnded) {
      setTimeLeft(35);
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
  }, [gameStarted, gameEnded]);

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
      {gameStarted && <p> {timeLeft} secs left </p>}
      {gameStarted && <p> {score} HITS </p>}
    </div>
  );
};

export default Timer;
