import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import VisualCard from "./components/Cards/VisualCard.jsx";
import MyCards from "./components/MyCards/MyCards.jsx";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} /> 
            <Route path="/createCards" element={<VisualCard />} />
            <Route path="/myCards" element={<MyCards />} />
        </Routes>
    </BrowserRouter>
);
