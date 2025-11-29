import React from "react";
import "./css.css";
function Cards({index, task, handleChange, inputRefs}) {
  return (
    <div className="flex justify-around">
      <input 
        ref={(el) => inputRefs.current[`term-${index}`] = el}
        className="enter-term pl-10" 
        placeholder="Enter term..." 
        onChange={(e) => handleChange(index, "term", e.target.value)} 
      />
      <input 
        ref={(el) => inputRefs.current[`definition-${index}`] = el}
        className="enter-term " 
        placeholder="Enter definition..." 
        onChange={(e) => handleChange(index, "definition", e.target.value)}
      />
    </div>
  );
}

export default Cards;
