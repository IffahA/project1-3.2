import React, { useState } from "react";

//create balloon styles in random

const balloonArr = () => {
  const newBalloonArr = [];

  const color = ["red", "green", "blue"];

  const size = [90, 80, 60];

  const generateStyles = (array) => {
    const index = Math.floor(Math.random() * 3);
    return array[index];
  };
  //create object

  for (let i = 0; i < 30; i++) {
    const balloon = {
      color: generateStyles(color),
      size: generateStyles(size),
    };
    newBalloonArr.push(balloon);
  }
  return newBalloonArr;
};

export const makeBalloons = () => balloonArr();
