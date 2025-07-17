import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  const incrementEvent = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementEvent = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button onClick={incrementEvent}>+</button>
      <div id="root">{count}</div>
      <button onClick={decrementEvent}>-</button>
    </>
  );
};

export default Count;
