"use client";

import CodeEditor from "./CodeEditor";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import TestCases from "./TestCases";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "./constants";
import { useContext, useEffect, useState } from "react";
import { ProblemType } from "@/utils/types/problem";
import { SocketContext } from "@/SocketContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LanguageSelector from "./LanguageSelector";

const Workspace = ({
  problem,
  setMyResults,
}: {
  problem: ProblemType;
  setMyResults: (arg0: number) => void;
}) => {
  const { codeShare, oppResults, resultsFunc } = useContext(SocketContext);
  const [code, setCode] = useState<string>(CODE_SNIPPETS["cpp"]);
  const [language, setLanguage] = useState<string>("cpp");
  const [executing, setExecuting] = useState<boolean>(false);
  const [results, setResults] = useState<
    { id: number; status: string; verdict: boolean }[]
  >([]);

  useEffect(() => {
    codeShare(code);
  }, [code]);

  useEffect(() => {
    setCode(CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]);
  }, [language]);

  const checkOutput = (output: string, expectedOutput: string) => {
    output.replace(/\n/g, " ");
    expectedOutput.replace(/\n/g, " ");
    return output.trim() === expectedOutput.trim();
  };

  const execution = async ({
    CODE,
    input,
    output,
  }: {
    CODE: string;
    input: string;
    output: string;
  }) => {
    try {
      const response = await axios.post("/api/execute", {
        language: language,
        version: LANGUAGE_VERSIONS[language as keyof typeof LANGUAGE_VERSIONS],
        code: CODE,
        input: input,
      });
      // console.log(response.data);

      // // compilation error
      // if (response.data.compile.stderr) {
      //   return {
      //     status: "compilation error",
      //     verdict: false,
      //   };
      // }

      // runtime error
      if (response.data.run.stderr) {
        return {
          status: "runtime error",
          verdict: false,
        };
      }

      // limit exceeded
      if (response.data.run.signal === "SIGKILL") {
        return {
          status: "limit exceeded",
          verdict: false,
        };
      }

      if (checkOutput(response.data.run.stdout, output)) {
        return {
          status: "correct",
          verdict: true,
        };
      }

      return {
        status: "wrong answer",
        verdict: false,
      };
    } catch (err) {
      toast.error("unknown error");
      return {
        status: "unknown error",
        verdict: false,
      };
    }
  };

  const onRun = async () => {
    setExecuting(true);
    setResults([]);
    const newResults: { id: number; status: string; verdict: boolean }[] = [];
    const CODE = code;

    for (const testcase of problem.testcases.filter(
      (testcase) => !testcase.isHidden
    )) {
      const result = await execution({
        CODE: CODE,
        input: testcase.tc_input,
        output: testcase.tc_output,
      });

      setResults((results) => [...results, { id: testcase.tc_id, ...result }]);
      // newResults.push({ id: testcase.tc_id, ...result });
    }

    // setResults(newResults);
    setExecuting(false);
  };

  const onSubmit = async () => {
    setExecuting(true);

    const newSubmitResults: { id: number; status: string; verdict: boolean }[] =
      [];
    let status = "";
    const CODE = code;

    for (const testcase of problem.testcases) {
      const result = await execution({
        CODE: CODE,
        input: testcase.tc_input,
        output: testcase.tc_output,
      });

      if (result.verdict === false) {
        status = result.status;
        break;
      }
      newSubmitResults.push({ id: testcase.tc_id, ...result });
    }

    resultsFunc(newSubmitResults);
    setMyResults(
      newSubmitResults.filter((result) => result.verdict === true).length
    );
    setExecuting(false);
    // console.log(newSubmitResults);

    const verdict =
      newSubmitResults.every((result) => result.verdict === true) &&
      newSubmitResults.length === problem.testcases.length;

    if (verdict) {
      toast.success("All test cases passed!", { position: "top-center" });
    } else {
      if (status.length)
        toast.error(status + " on testcase " + (newSubmitResults.length + 1), {
          position: "top-center",
        });
      else toast.error("Some testcases failed", { position: "top-center" });
    }
  };

  return (
    <div className="h-full w-full flex" style={{ maxHeight: "100vh" }}>
      <Split className="split w-full" minSize={300} sizes={[50, 50]}>
        <div>
          <ProblemDescription problem={problem} />
        </div>
        <div className="flex flex-col relative overflow-x-hidden">
          <div className="h-10">
            <LanguageSelector language={language} onSelect={setLanguage} />
          </div>
          <Split
            className="h-[calc(100vh-50px-2.5rem)]"
            direction="vertical"
            sizes={[60, 40]}
            minSize={100}
          >
            <CodeEditor code={code} setCode={setCode} language={language} />
            <TestCases problem={problem} results={results} />
          </Split>
          <div className="h-[50px] mx-20 bg-gray-900 text-white flex items-center justify-center border-t space-x-4">
            <button
              className={`font-medium items-center focus:outline-none inline-flex relative rounded-[0.5rem] px-4 py-1 whitespace-nowrap ${
                executing
                  ? "text-gray-400 cursor-not-allowed bg-gray-800"
                  : "bg-dark-fill-3 hover:bg-gray-800"
              }`}
              onClick={onRun}
              disabled={executing}
            >
              Run
            </button>
            <button
              className={`font-medium items-center focus:outline-none inline-flex relative rounded-[0.5rem] px-4 py-1 whitespace-nowrap ${
                executing
                  ? "text-gray-400 cursor-not-allowed bg-green-900"
                  : "bg-green-700 hover:bg-green-800"
              }`}
              onClick={onSubmit}
              disabled={executing}
            >
              Submit
            </button>
          </div>
        </div>
      </Split>
      <ToastContainer />
    </div>
  );
};

export default Workspace;
