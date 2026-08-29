/* eslint-disable no-console */
function longestSubarraySumK(nums: number[], target: number): number {
  const length = nums.length;
  for (let countFrom = 0; countFrom < length; countFrom++) {
    let sum = 0;
    for (let i = countFrom; i < length; i++) {
      sum += nums[i];
    }

    let totalMinus = 0;

    for (let matchIndex = length; matchIndex > countFrom; matchIndex--) {
      const currentNumber = nums[matchIndex] ?? 0;
      totalMinus += currentNumber;
      if (sum - totalMinus === target) return matchIndex - countFrom;
    }
  }

  return 0;
}

export const testLongestSubarraySumK = () => {
  console.log(longestSubarraySumK([1, -1, 5, -2, 3], 3)); // 4
  console.log(longestSubarraySumK([-2, -1, 2, 1], 1)); // 2
  console.log(longestSubarraySumK([1, 2, 3], 3)); // 2
  console.log(longestSubarraySumK([1, 2, 3], 100)); // 0
  console.log(longestSubarraySumK([], 0)); // 0
  console.log(longestSubarraySumK([0], 0)); // 1
  console.log(longestSubarraySumK([0, 0, 0], 0)); // 3
  console.log(longestSubarraySumK([1, -1, 1, -1, 1], 0)); // 4
  console.log(longestSubarraySumK([3], 3)); // 1
  console.log(longestSubarraySumK([-1, -1, -1, 1, 1], -1)); // 5
  console.log(longestSubarraySumK([1, 2, -2, 4, -4], 0)); // 4
};
