export const findFirstUniqueCharacter = (
  sampleString: string,
): string | null => {
  const existTimesCount = new Map<string, number>();
  const length = sampleString.length;
  for (let i = 0; i < length; i++) {
    const char = sampleString[i];
    if (existTimesCount.has(char)) {
      existTimesCount.set(char, existTimesCount.get(char)! + 1);
      continue;
    }
    existTimesCount.set(char, 1);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [...existTimesCount.entries()].find(([_, value]) => value === 1)?.[0] ??
    null
  );
};
