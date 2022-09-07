import React, { useMemo, useState } from "react";

const LetterCount = () => {
  const words = ["Java", "ReactJs", "Javascript"];
  let [wordIdx, setWordIdx] = useState(0);
  let [counter, setCounter] = useState(0);
  const word = words[wordIdx];
  const changeIdx = () => {
    setWordIdx((wordIdx) => {
     return (wordIdx+1) % words.length;
    })
  };
  const letterCount = useMemo(() => {
    console.log("inside Memo" + word);
    for (let i = 0 ; i < 10000; i++) {

    }
    return word.length;
  },[word]);
  // const letterCount = (() => { // immediately innoved function
  //   console.log("inside Memo" + word);
  //   for (let i = 0 ; i < 10000; i++) {

  //   }
  //   return word.length;
  // })();
  const changeCounter = () => {
    setCounter(++counter);
  }
  return (
    <div>
      <div>{word} has {letterCount} letters.</div>
      <button onClick={changeIdx}>Change Word</button>
      <button onClick={changeCounter}>Change Counter {counter}</button>
    </div>
  );
};

export default LetterCount;