"use client";

import CodeEditor from "./CodeEditor";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import TestCases from "./TestCases";
import { CODE_SNIPPETS } from "./constants";
import { useState } from "react";
import { ProblemType } from "@/utils/types/problem";

const Workspace = ({ problem }: { problem: ProblemType }) => {
  const [code, setCode] = useState<string>(CODE_SNIPPETS["javascript"]);
  const [language, setLanguage] = useState("javascript");

  const onSubmit = () => {};

  return (
    <div className="h-full w-full flex" style={{ maxHeight: "100vh" }}>
      <Split className="split w-full" minSize={300} sizes={[50, 50]}>
        <div>
          <ProblemDescription problem={problem} />
        </div>
        <div className="flex flex-col relative overflow-x-hidden">
          <Split
            className="h-[calc(100vh-50px)]"
            direction="vertical"
            sizes={[60, 40]}
            minSize={60}
          >
            <CodeEditor
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={setLanguage}
            />
            <TestCases problem={problem} />
          </Split>
          <div className="h-[50px] mx-20 bg-gray-900 text-white flex items-center justify-center border-t space-x-4">
            <button className="font-medium items-center focus:outline-none inline-flex bg-dark-fill-3 relative rounded-[0.5rem] px-4 py-1 cursor-pointer whitespace-nowrap text-white">
              Run
            </button>
            <button
              className="font-medium items-center focus:outline-none inline-flex bg-green-700 relative rounded-[0.5rem] px-4 py-1 cursor-pointer whitespace-nowrap text-white"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </Split>
    </div>
  );
};

export default Workspace;
