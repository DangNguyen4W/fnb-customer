import { describe, expect, it } from "vitest";
import { findFirstUniqueCharacter } from "./findFirstUniqueCharacter";

describe("Test findFirstUniqueCharacter", () => {
  it.each([
    ["leetcode", "l"],
    ["loveleetcode", "v"],
    ["aabccde", "b"],
  ])(`Input: %i -> Output: %s`, (input, output) => {
    expect(findFirstUniqueCharacter(input)).toBe(output);
  });
  it("Empty string should return null", () => {
    expect(findFirstUniqueCharacter("")).toBeNull();
  });
  it("aabb string should return null", () => {
    expect(findFirstUniqueCharacter("aabb")).toBeNull();
  });
});
