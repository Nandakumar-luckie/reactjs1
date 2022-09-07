import React from "react";
const ListHandler = () => {
  const nums = [1,2,3,4,5];
  return (
    <ul>
      {nums.map((num) => <li key={num}>{num}</li>)}
    </ul>
  )
};
export default ListHandler;