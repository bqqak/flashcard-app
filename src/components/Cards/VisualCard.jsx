import React from "react";
import "./css.css";
import Cards from "./Cards";
import { useState } from "react";
const VisualCard = () => {
  
  const [tasks, setTasks] = useState([
    {
      term: "",
      definition: "",
    },
    {
      term: "",
      definition: "",
    }
  ])


  return (
    <div className="flex flex-col gap-20 pl-20 min-h-screen visual-card">
        <div className="mt-10">
          <p className="text-white text-3xl">The Hook</p>
        </div>
        <div className="flex flex-col gap-20">
          <Cards />
          <Cards />
        </div>
        <div className="flex justify-between items-center ml-20 mr-20">
          <button className="btn-add-more" >add more +</button>
          <button className='btn-add-more '>Done!</button>
        </div>
      </div>
    
  );
};

export default VisualCard;
