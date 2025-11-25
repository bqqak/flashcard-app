import React from "react";
import "./css.css";
function Cards() {
  return (
    <div className="flex justify-around">
      <input className="enter-term pl-10" placeholder="Enter term..." onChange={(e) => console.log(e.target.value)} />
      <input className="enter-term " placeholder="Enter definition..." onChange={(e) => console.log(e.target.value)}/>
    </div>
  );
}

export default Cards;
