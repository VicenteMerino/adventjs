function checkJump(heights: number[]) {
  const maxHeight = Math.max(...heights);
  const maxHIndex = heights.findIndex((e) => e === maxHeight);
  const borderI = maxHIndex === 0 || maxHIndex === heights.length - 1;
  const ascH = heights.slice(0, maxHIndex);
  const descH = heights.slice(maxHIndex, heights.length);
  const isAsc = ascH.every((x, i) => i === 0 || x >= ascH[i - 1]);
  const isDesc = descH.every((x, i) => i === 0 || x <= descH[i - 1]);
  return isAsc && isDesc && borderI;
}

console.log(checkJump([2, 2, 2]));
