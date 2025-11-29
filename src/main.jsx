import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react"; 
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import VisualCard from "./components/Cards/VisualCard.jsx";
import MyCards from "./components/MyCards/MyCards.jsx";


const MainApp = () => {
  
  const loadTasksFromStorage = () => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
      
        return parsedTasks.length > 0 ? parsedTasks : [
          {
            term: "",
            definition: "",
          },
          {
            term: "",
            definition: "",
          }
        ];
      }
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
    }
 
    return [
      {
        term: "",
        definition: "",
      },
      {
        term: "",
        definition: "",
      }
    ];
  };

  const [tasks, setTasks] = useState(loadTasksFromStorage);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }, [tasks]);
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} /> 
   
            <Route 
              path="/createCards" 
              element={<VisualCard tasks={tasks} setTasks={setTasks} />} 
            />
        
            <Route 
              path="/myCards" 
              element={<MyCards tasks={tasks} />} 
            />
        </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<MainApp />);