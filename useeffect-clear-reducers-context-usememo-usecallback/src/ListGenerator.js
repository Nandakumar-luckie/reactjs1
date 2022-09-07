import React from "react";

const ListGenerator = ({clickHandler}) => {
  console.log("inside list genertor")
  const list = [1,2,3,4,5,6,7];
  return (
    <ul>
      {list.map((val) => <li key={val} onClick={clickHandler}>{val}</li>)}
    </ul>
  );
};

export default React.memo(ListGenerator);