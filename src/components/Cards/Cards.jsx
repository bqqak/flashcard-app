import React from "react";
import "./css.css";
function Cards({handleDefinitionChange, handleTermChange}) {
  return (
    <div className="flex justify-around">
      <input className="enter-term pl-10" placeholder="Enter term..." />
      <input className="enter-term " placeholder="Enter definition..." onChange={handleDefinitionChange}/>
    </div>
  );
}

export default Cards;
