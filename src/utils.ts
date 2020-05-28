export function getAllPossibleCombinations(length: number) {
  const ret: [number, number][] = [];
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length; ++j) {
      ret.push([i, j]);
    }
  }
  return ret;
}
