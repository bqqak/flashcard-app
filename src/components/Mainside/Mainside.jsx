import React from "react";
import './css.css'
import { HiAcademicCap } from "react-icons/hi";
function Mainside() {
  return (
    <div>
      <div className="ml-40">
        <p className="slide-up-text text-white text-3xl">
          <span className="text-blue-300">Hook</span> makes remembering things
          simple.
        </p>
        <p className="slide-up-text text-white w-150 mt-5 text-xl">
          It is a flashcard app that concentrates your study time on tougher
          concepts, so you spend less effort reviewing what you already remember
          well.
        </p>
      </div>
      <div className="text-center mt-20">
        <p className="slide-up-text text-3xl leading-15">Advantages</p>
        <p className="slide-up-text my-custom-sub-text text-xl">
          Why people enjoy using Hook
        </p>
      </div>
      <div className="grid grid-cols-3 ml-40 mt-15">
        <div className="flex flex-col gap-3">
          <HiAcademicCap color="rgba(14, 142, 216, 1" size="40px" />
          <p className="slide-up-text my-custom-sub-text w-50">
            <span className="text-blue-300">Hook</span> helps users quickly lock
            new words into memory with smart, focused review in just one
            sentence.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <HiAcademicCap color="rgba(14, 142, 216, 1" size="40px" />
          <p className="slide-up-text my-custom-sub-text w-50">
            <span className="text-blue-300">Hook</span> helps users quickly lock
            new words into memory with smart, focused review in just one
            sentence.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <HiAcademicCap color="rgba(14, 142, 216, 1" size="40px" />
          <p className="slide-up-text my-custom-sub-text w-50">
            <span className="text-blue-300">Hook</span> helps users quickly lock
            new words into memory with smart, focused review in just one
            sentence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mainside;
