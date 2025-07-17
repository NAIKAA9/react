import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCounter] = useState(0);
  console.log(count);
  const incrementEvent = () => {
    setCounter(count + 1);
    console.log(count);
  };
  const decrementEvent = () => {
    setCounter(count - 1);
    console.log(count);
  };

  return (
    <React.Fragment>
      <button onClick={incrementEvent}>+</button>
      <div id="root">{count}</div>
      <button onClick={decrementEvent}>-</button>
    </React.Fragment>
  );
};

export default Counter;
