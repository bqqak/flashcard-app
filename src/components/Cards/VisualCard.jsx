import React from "react";
import "./css.css";
import Cards from "./Cards";
import { useState } from "react";
import { NavLink } from "react-router";
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

  const handleTaskChange = (index, field, value) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index][field] = value;
      return newTasks;
    })
  }

  const handleDone = () => {
    tasks.map((task) => console.log(task))
  }

  return (
    <div className="flex flex-col gap-20 pl-20 min-h-screen visual-card">
        <div className="mt-10">
          <NavLink to="/"><p className="text-white text-3xl">The Hook</p></NavLink>
        </div>
        <div className="flex flex-col gap-20">
         {tasks.map((task, index) => (
          <Cards
            key={index}
            index={index}
            task={task} 
            handleChange={handleTaskChange} 
          />
        ))}
        </div>
        <div className="flex justify-between items-center ml-20 mr-20">
          <button className="btn-add-more" >add more +</button>
          <button className='btn-add-more' onClick={handleDone}>Done!</button>
        </div>
      </div>
    
  );
};

export default VisualCard;
