"use client";

import CodeEditor from "./CodeEditor";
import Split from "react-split";
import { twoSum } from "@/utils/problems/twoSum";
import ProblemDescription from "./ProblemDescription";
import TestCases from "./TestCases";

const Workspace = () => {
  return (
    <div className="h-full w-full flex" style={{ maxHeight: "100vh" }}>
      <Split className="split w-full" minSize={300} sizes={[50, 50]}>
        <div>
          <ProblemDescription problem={twoSum} />
        </div>
        <div className="flex flex-col relative overflow-x-hidden">
          <Split
            className="h-[calc(100vh-50px)]"
            direction="vertical"
            sizes={[60, 40]}
            minSize={60}
          >
            <CodeEditor />
            <TestCases problem={twoSum} />
          </Split>
          <div className="h-[50px] mx-20 bg-gray-900 text-white flex items-center justify-center border-t space-x-4">
            <button className="font-medium items-center focus:outline-none inline-flex bg-dark-fill-3 relative rounded-[0.5rem] px-4 py-1 cursor-pointer whitespace-nowrap text-white">
              Run
            </button>
            <button className="font-medium items-center focus:outline-none inline-flex bg-green-700 relative rounded-[0.5rem] px-4 py-1 cursor-pointer whitespace-nowrap text-white">
              Submit
            </button>
          </div>
        </div>
      </Split>
    </div>
  );
};

export default Workspace;
