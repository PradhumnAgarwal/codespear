import { ProblemType } from "@/utils/types/problem";

const ProblemDescription = ({ problem }: { problem: ProblemType }) => {
  return (
    <div className="">
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <div className="bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer">
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-50px)] overflow-y-auto">
        <div className="px-5">
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                {problem?.title}
              </div>
            </div>

            <div className="flex items-center mt-3">
              <div
                className={`inline-block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize ${
                  problem.difficulty == "Easy"
                    ? "bg-green-700"
                    : problem.difficulty == "Medium"
                    ? "bg-yellow-600"
                    : "bg-red-800"
                }`}
              >
                {problem.difficulty}
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Input Format */}
            <div className="my-8">
              <div className="text-white text-sm font-medium">
                Input Format:
              </div>
              <ul className="text-white ml-5 mt-3 list-disc text-sm">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.inputFormat }}
                />
              </ul>
            </div>

            {/* Output Format */}
            <div className="my-8">
              <div className="text-white text-sm font-medium">
                Output Format:
              </div>
              <ul className="text-white ml-5 mt-3 list-disc text-sm">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.outputFormat }}
                />
              </ul>
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problem.testCases
                .filter((example) => !example.isHidden)
                .map((example, index) => (
                  <div key={example.id}>
                    <p className="font-medium text-white">
                      Example {index + 1}:{" "}
                    </p>
                    {example.img && (
                      <img src={example.img} alt="" className="mt-3" />
                    )}
                    <div className="example-card">
                      <pre>
                        <strong className="text-white">Input: </strong>
                        {"\n"}
                        {example.input}
                        <br />
                        <br />
                        <strong>Output:</strong>
                        {"\n"}
                        {example.output}
                        <br />
                        <br />
                        {example.explanation && (
                          <>
                            <strong>Explanation:</strong> {example.explanation}
                          </>
                        )}
                      </pre>
                    </div>
                  </div>
                ))}
            </div>

            {/* Constraints */}
            <div className="my-8 pb-4">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc ">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.constraints }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
