import { describe, it, expect } from "vitest";
import { longestSubarraySumK } from "./longestSubarraySumK";

describe("Test longestSubarraySumK", () => {
  it.each([
    [[1, -1, 5, -2, 3], 3, 4],
    [[-2, -1, 2, 1], 1, 2],
    [[1, 2, 3], 3, 2],
    [[1, 2, 3], 100, 0],
    [[], 0, 0],
    [[0], 0, 1],
    [[0, 0, 0], 0, 3],
    [[1, -1, 1, -1, 1], 0, 4],
    [[3], 3, 1],
    [[-1, -1, -1, 1, 1], -1, 5],
    [[1, 2, -2, 4, -4], 0, 4],
  ])("Array: %j, k: %i -> output: %i", (array, k, output) => {
    expect(longestSubarraySumK(array, k)).toBe(output);
  });
});
