import { createRoot } from "react-dom/client";
import { useState } from "react"; 
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import VisualCard from "./components/Cards/VisualCard.jsx";
import MyCards from "./components/MyCards/MyCards.jsx";


const MainApp = () => {

  const [tasks, setTasks] = useState([
    {
      term: "",
      definition: "",
    },
    {
      term: "",
      definition: "",
    }
  ]);

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