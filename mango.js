import React from "react";
import "./mango.css";

const Mango = ({ mangoList }) => {
  return (
    <div className="mango-grid">
      {mangoList.map((mango, index) => (
        <div className="mango-card" key={index}>
          <img src={mango.image} alt={mango.name} />
          <h3>{mango.name}</h3>
          <p>{mango.intro}</p>
          <p>₹{mango.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Mango;
