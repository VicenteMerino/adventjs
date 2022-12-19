function sortToys(toys: string[], positions: number[]) {
  const minPosition = Math.min(...positions);
  const mappedPositions = positions.map((p) => p - minPosition);
  const sortedToys = new Array(toys.length);
  for (let i = 0; i < toys.length; i++) {
    sortedToys[mappedPositions[i]] = toys[i];
  }
  return sortedToys;
}