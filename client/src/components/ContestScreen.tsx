"use client";
import React, { useEffect, useState } from "react";
import Workspace from "./fight_components/Workspace";
import { twoSum } from "@/utils/problems/twoSum";
import Interaction from "./fight_components/Interaction";

function ContestScreen() {
  const [problem, setProblem] = useState(twoSum);
  const [probLength, setProbLength] = useState(10);
  useEffect(() => {
    // console.log('Contest Screen');
    const getProblemID = async () => {
      const data = await fetch(`https://codespear-1qu9.onrender.com/questions`);
      const prob = await data.json();
      setProbLength(prob.length());
      console.log(prob.length());
      };
    getProblemID();
    const n = Math.floor(Math.random() * probLength);
    console.log(n);
    const createProblem = async () => {
      const data = await fetch(
        `https://codespear-1qu9.onrender.com/ques/${n}`
      );
      const prob = await data.json();
      setProblem(prob);
      console.log(prob);
    };
    createProblem();
  }, []);
  return (
    <div className="w-full flex">
      <div className="w-[80%]">
        <Workspace problem={problem} />
      </div>
      <div className="w-[20%] bg-gray-800 text-white">
        <Interaction />
      </div>
    </div>
  );
}

export default ContestScreen;
