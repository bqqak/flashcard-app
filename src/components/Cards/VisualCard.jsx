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
  
  const handleTermChange = (index, value) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = { ...updatedTasks[index], term: value};
      return updatedTasks;
    })
  }
  const handleDefinitionChange = (index, value) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {...updatedTasks[index], definition: value};
      return updatedTasks;
    })
  }
  return (
    <div className="flex flex-col gap-20 pl-20 min-h-screen visual-card">
        <div className="mt-10">
          <p className="text-white text-3xl">The Hook</p>
        </div>
        <div className="flex flex-col gap-20">
          <Cards 
            handleDefinitionChange={handleDefinitionChange}
            handleTermChange={handleTermChange}
          />
          <Cards 
          handleDefinitionChange={handleDefinitionChange}
          handleTermChange={handleTermChange}/>
        </div>
        <div className="">
          <button className="btn-add-more" >add more +</button>
        </div>
      </div>
    
  );
};

export default VisualCard;
