import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import "./css.css";


const MyCards = ({ tasks }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isSwap, setSwap] = useState(true);

  const card = tasks[currentCard] || null;

  const ShowTerm = () => {
    if (!card) return <p>No cards yet.</p>;
    return (
      <div>
        <p className="text-white">Term</p>
        <p>{card.term || "-"}</p>
      </div>
    );
  };

  const ShowDefinition = () => {
    if (!card) return <p>No cards yet.</p>; 
    return (
      <div onClick={toggleSide}>
        <p>Definition</p>
        <p>{card.definition || "-"}</p>
      </div>
    );
  };
  const showPrev = () => {
    if (!tasks.length) return;
    setCurrentCard((prev) => (prev - 1 + tasks.length) % tasks.length);
    setSwap(true);
  };
  const showNext = () => {
    if (!tasks.length) return;
    setCurrentCard((prev) => (prev + 1) % tasks.length);
    setSwap(true);
  };
  const toggleSide = () => setSwap((prev) => !prev);
  return (
      <div className='full-body pl-20'>
        <p className='hook-text text-3xl font-[Montserrat] text-center'><Link to='/'>The Hook</Link></p>
      <div className="main-container">
      <div className='solo-card' onClick={toggleSide}  >
        {isSwap ? <ShowTerm /> : <ShowDefinition />}
        </div>
        <div className="flex gap-20 mt-4 justify-between">
          <button className="btn-add-more" onClick={showPrev}>
            Prev
          </button>
          <button className="btn-add-more" onClick={showNext}>
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default MyCards;
