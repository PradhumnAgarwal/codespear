"use client";

import CodeEditor from "./CodeEditor";
import Split from "react-split";
import { twoSum } from "@/utils/problems/two-sum";
import ProblemDescription from "./ProblemDescription";
import TestCases from "./TestCases";

const Workspace = () => {
  return (
    <div className="h-full w-full flex" style={{ maxHeight: "100vh" }}>
      <Split className="split h-full">
        <div>
          <ProblemDescription problem={twoSum} />
        </div>
        <Split className="h-full" direction="vertical">
          <CodeEditor />
          <TestCases problem={twoSum} />
        </Split>
      </Split>
    </div>
  );
};

export default Workspace;
