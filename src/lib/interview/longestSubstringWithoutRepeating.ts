/* eslint-disable no-console */
function longestSubstringWithoutRepeating(theString: string): number {
  const length = theString.length;

  let maxSubstringLength = 0;

  let left = 0;

  const seen = new Set<string>();

  for (let right = 0; right < length; right++) {
    while (seen.has(theString[right])) {
      seen.delete(theString[left]);
      left++;
    }
    seen.add(theString[right]);
    maxSubstringLength = Math.max(right - left + 1, maxSubstringLength);
  }

  return maxSubstringLength;
}

export const testLongestSubstringWithoutRepeating = () => {
  console.log("abcabcbb", longestSubstringWithoutRepeating("abcabcbb")); // true
  console.log("bbbbb", longestSubstringWithoutRepeating("bbbbb")); // true
  console.log("pwwkew", longestSubstringWithoutRepeating("pwwkew")); // true
  console.log("[Empty string]", longestSubstringWithoutRepeating("")); // true
  console.log("abba", longestSubstringWithoutRepeating("abba")); // true
  console.log("a", longestSubstringWithoutRepeating("a")); // true
  console.log("hello", longestSubstringWithoutRepeating("hello")); // false
  console.log("racecar", longestSubstringWithoutRepeating("racecar")); // true
};
