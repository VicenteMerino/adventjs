function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
): number {
  const sortedGiftsCities = giftsCities.sort((giftA, giftB) => giftA - giftB);
  const cleanGiftsCities = sortedGiftsCities.filter((gift) => gift <= maxGifts);
  return cleanGiftsCities.reduce((acc, value, index) => {
    const currentCities = cleanGiftsCities.slice(index, index + maxCities);
    const citiesSum = currentCities.reduce((acc, value) => acc + value, 0);
    return citiesSum > acc ? Math.min(citiesSum, maxGifts) : acc;
  }
  , 0);
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3));
