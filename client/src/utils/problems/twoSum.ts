export const twoSum = {
  prob_id: 1,
  prob_title: "Twoadfskjk Sum",
  difficulty: "Easy",
  problemStatement: `<p class='mt-3'>
  Given an array of integers <code>nums</code> and an integer <code>target</code>, return
  <em>indices of the two numbers such that they add up to</em> <code>target</code>.
</p>
<p class='mt-3'>
  You may assume that each input would have <strong>exactly one solution</strong>, and you
  may not use thesame element twice.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
  inputFormat: `<li>The first line of input contain two integers N as size of the array nums and target.</li>
  <li>The second line of input contain N space separated integers, representing the array nums.</li>`,
  outputFormat: `<li>Return two space separated integers in a non-decreasing manner, representing the indices of the two numbers such that they add up to target.</li>`,
  testcases: [
    {
      tc_id: 1,
      tc_input: `4 9\n2 7 11 15`,
      tc_output: "0 1",
      tc_explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      isHidden: false,
    },
    {
      tc_id: 2,
      tc_input: `3 6\n3 2 4`,
      tc_output: "1 2",
      tc_explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      isHidden: false,
    },
    {
      tc_id: 3,
      tc_input: `2 6\n3 3`,
      tc_output: "0 1",
      isHidden: true,
    },
  ],
  constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
};
