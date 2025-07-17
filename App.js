import React, { createContext } from "react";
import Parent from "./parent";
import Child from "./Child";

export const nameContext = createContext();

const App = () => {
  const name = "kittu";
  const fav = "chocolate"; // define fav here

  return (
    <nameContext.Provider value={{ name, fav }}>
      <div>
        <Parent />
        <Child />
      </div>
    </nameContext.Provider>
  );
};

export default App;
