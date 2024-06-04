export type TestCaseType = {
  id: number;
  input: string;
  output: string;
  explanation?: string;
  isHidden?: boolean;
  img?: string;
};

export type ProblemType = {
  id: number;
  title: string;
  difficulty: string;
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  testCases: TestCaseType[];
  constraints: string;
};
