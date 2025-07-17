import React from "react";
import { nameContext } from "./App";
import { useContext } from "react";

const Grant = () => {
  const { name, fav } = useContext(nameContext);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{fav}</h1>
    </div>
  );
};

export default Grant;
