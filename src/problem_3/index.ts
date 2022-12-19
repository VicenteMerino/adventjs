function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  const giftsWeight = packOfGifts.reduce((acc, gift) => {
    const currentGiftWeight = gift.length;
    return acc + currentGiftWeight;
  }, 0);

  const reindeersCapacity = reindeers.reduce((acc, reindeer) => {
    const currentReindeerCapacity = reindeer.length * 2;
    return acc + currentReindeerCapacity;
  }, 0);
  return Math.floor(reindeersCapacity / giftsWeight);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
console.log(distributeGifts(packOfGifts, reindeers));