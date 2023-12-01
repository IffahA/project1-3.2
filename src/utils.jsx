// import React, { useState } from "react";

//   useeffect for local storage when game ends
//   const scoreBoard = {
//     username: { username },
//     score: { score },
//   };

//   const addScoreBoard = (scoreBoard) => {
//     const board = window.localStorage.getItem("scores");
//     if (board === null) {
//       window.localStorage.setItem("scores", JSON.stringify([scoreBoard]));
//     } else {
//       const getCurrentScores = window.localStorage.getItem("score");
//       const currentScores = JSON.parse(getCurrentScores);
//       console.log(currentScores);
//       currentScores.push(scoreBoard);
//       window.localStorage.setItem("scores", JSON.stringify(currentScores));
//     }
//   };

//   addScoreBoard(scoreBoard);
// create balloon styles in random

// // const balloonArr = () => {
// //   const newBalloonArr = [];

// //   const color = ["red", "green", "blue"];

// //   const size = [90, 80, 60];

// //   const generateStyles = (array) => {
// //     const index = Math.floor(Math.random() * 3);
// //     return array[index];
// //   };
// //   //create object

// //   for (let i = 0; i < 30; i++) {
// //     const balloon = {
// //       color: generateStyles(color),
// //       size: generateStyles(size),
// //     };
// //     newBalloonArr.push(balloon);
// //   }
// //   return newBalloonArr;
// // };

// export const makeBalloons = () => balloonArr();
