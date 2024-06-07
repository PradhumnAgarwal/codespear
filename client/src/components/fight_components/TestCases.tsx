import { ProblemType } from "@/utils/types/problem";
import { useState } from "react";

const TestCases = ({ problem }: { problem: ProblemType }) => {
  // Remaining: testcases passed or failed, console output

  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);

  return (
    <div className="w-full px-5 overflow-auto h-full">
      <div className="flex h-10 items-center space-x-6">
        <div className="relative flex h-full flex-col justify-center cursor-pointer">
          <div className="text-sm font-medium leading-5 text-white">
            Testcases
          </div>
          <hr className="absolute bottom-1 h-0.5 w-full rounded-full border-none bg-white" />
        </div>
      </div>

      <div className="flex">
        {problem.testcases
          .filter((example) => !example.isHidden)
          .map((example, index) => (
            <div
              className="mr-3 items-start mt-2 "
              key={example.id}
              onClick={() => setActiveTestCaseId(index)}
            >
              <div className="flex flex-wrap items-center">
                <div
                  className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-[0.5rem] px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
									`}
                >
                  Case {index + 1}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="font-semibold my-4">
        <p className="text-sm font-medium mt-4 text-white">Input:</p>
        <div className="w-full cursor-text rounded-[0.4rem] border px-3 py-2 bg-dark-fill-3 border-transparent text-white mt-2">
          <pre>{problem.testcases[activeTestCaseId].input}</pre>
        </div>
        <p className="text-sm font-medium mt-4 text-white">Expected Output:</p>
        <div className="w-full cursor-text rounded-[0.4rem] border px-3 py-2 bg-dark-fill-3 border-transparent text-white mt-2">
          <pre>{problem.testcases[activeTestCaseId].output}</pre>
        </div>
      </div>
    </div>
  );
};

export default TestCases;
