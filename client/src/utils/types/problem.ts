export type TestCaseType = {
  tc_id: number;
  tc_input: string;
  tc_output: string;
  tc_explanation?: string;
  isHidden?: boolean;
  image?: string;
};

export type ProblemType = {
  prob_id: number;
  prob_title: string;
  difficulty: string;
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  testcases: TestCaseType[];
  constraints: string;
};
