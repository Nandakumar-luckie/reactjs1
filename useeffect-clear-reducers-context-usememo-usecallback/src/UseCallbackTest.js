import React, { useCallback, useState } from "react";
import ListGenerator from "./ListGenerator";

let prevFn = null;
const UseCallbackTest = () => {
  let [selectedlist, setSelectedList] = useState(-1);
  let [depends] = useState(false);
  const clickHandler = useCallback((event) => {
    setSelectedList(event.currentTarget.innerText);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [depends]);

  // const clickHandler = (event) => {
  //   setSelectedList(event.currentTarget.innerText);
  // };
  if (prevFn === clickHandler) {
    console.log('inside callbacktest = ', 'same fn');
  }
  prevFn = clickHandler;
  return (
    <div>
      SELECTED LIST : {selectedlist}
      <ListGenerator clickHandler={clickHandler}/>
    </div>
  );
};

export default UseCallbackTest;