"use client";

import CodeEditor from "./CodeEditor";
import Split from "react-split";

const Workspace = () => {
  return (
    <Split className="split h-full">
      <div>Problem Description</div>
      <Split direction="vertical">
        <CodeEditor />
        <div>Output</div>
      </Split>
    </Split>
  );
};

export default Workspace;
