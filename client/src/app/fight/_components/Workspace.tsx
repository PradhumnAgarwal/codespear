"use client";

import Split from "react-split";

const Workspace = () => {
  return (
    <Split className="split h-full">
      <div>Problem Description</div>
      <Split direction="vertical">
        <div>Code</div>
        <div>Output</div>
      </Split>
    </Split>
  );
};

export default Workspace;
