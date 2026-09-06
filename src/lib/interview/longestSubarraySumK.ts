export function longestSubarraySumK(nums: number[], target: number): number {
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
