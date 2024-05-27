"use client";

import CodeEditor from "./CodeEditor";
import Split from "react-split";
import { twoSum } from "@/utils/problems/two-sum";
import ProblemDescription from "./ProblemDescription";

const Workspace = () => {
  return (
    <Split className="split h-full">
      <div>
        <ProblemDescription problem={twoSum} />
      </div>
      <Split direction="vertical">
        <CodeEditor />
        <div>Output</div>
      </Split>
    </Split>
  );
};

export default Workspace;
