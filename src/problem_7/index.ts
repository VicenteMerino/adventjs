function getGiftsToRefill(a1: string[], a2: string[], a3: string[]): string[] {
  const a1Distinct = [...new Set(a1)];
  const a2Distinct = [...new Set(a2)];
  const a3Distinct = [...new Set(a3)];
  const concatArray = a1Distinct.concat(a2Distinct, a3Distinct);
  const gifts = concatArray.filter((gift) => {
    const count = concatArray.filter((g) => g === gift).length;
    return count === 1;
  });
  return [...new Set(gifts)];
}
