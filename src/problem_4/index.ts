interface box {
  l: number;
  w: number;
  h: number;
}

function fitsInOneBox(boxes: box[]): boolean {
  const sortedBoxes = boxes.sort((boxA, boxB) => {
    const boxAVolume = boxA.l * boxA.w * boxA.h;
    const boxBVolume = boxB.l * boxB.w * boxB.h;
    return boxAVolume - boxBVolume;
  });

  return sortedBoxes.every((box, index) => {
    const nextBox = sortedBoxes[index + 1];
    if (nextBox) {
      const hasLConflict = box.l >= nextBox.l;
      const hasWConflict = box.w >= nextBox.w;
      const hasHConflict = box.h >= nextBox.h;
      return !(hasLConflict || hasWConflict || hasHConflict);
    }
    return true;
  });
}

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
  ])
);
