import React, { useRef, useState } from "react";

const InputText = () => {
  const inputRef = useRef(null);
  let [value, setValue] = useState("");
  const inputHandler = () => {
    setValue(inputRef.current.value);
  };
  console.log('input', value);
  return (
    <div>
      <div>
        Enter Text: <input type="text" ref={inputRef} onInput={inputHandler}/>
      </div>
      <div>{value}
      </div>
    </div>
  );
};

export default InputText;