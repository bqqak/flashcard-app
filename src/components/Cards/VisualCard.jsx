import React from "react";
import "./css.css";
import Cards from "./Cards";
import { NavLink } from "react-router"; 


const VisualCard = ({ tasks, setTasks }) => {
  
  
  const handleTaskChange = (index, field, value) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index][field] = value;
      return newTasks;
    })
  }

  const handleDone = () => {
    console.log("Saved:", tasks);
    
    alert("Карточки сохранены!");
  }

  const addNewCard = () => {
      setTasks([...tasks, { term: "", definition: "" }]);
  }

  return (
    <div className="flex flex-col gap-20 pl-20 min-h-screen visual-card">
        <div className="mt-10">
          <NavLink to="/"><p className="header-text text-3xl">The Hook</p></NavLink>
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
      
          <button className="btn-add-more" onClick={addNewCard}>add more +</button>
          <button className='btn-add-more' onClick={handleDone}>Done!</button>
        </div>
      </div>
  );
};

export default VisualCard;