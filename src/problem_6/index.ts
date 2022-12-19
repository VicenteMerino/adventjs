function createCube(size: number): string {
  let upperSide = "";
  let bottomSide = "";
  for (let index = 0; index < size; index++) {
    upperSide += " ".repeat(size - index - 1);
    upperSide += "/\\".repeat(index + 1);
    upperSide += "_\\".repeat(size);
    upperSide += "\n";
    bottomSide += " ".repeat(index);
    bottomSide += "\\";
    bottomSide += "/\\".repeat(size - index - 1);
    bottomSide += "/_".repeat(size);
    bottomSide += "/";
    bottomSide += "\n";
  }
  return (upperSide + bottomSide).slice(0, -1);
}

console.log(createCube(3));
