interface Sleigh {
  name: string;
  consumption: number;
}

function selectSleigh(distance: number, sleighs: Sleigh[]): string | null {
  const d = distance;
  const s = sleighs.map((_) => ({ name: _.name, u: d * _.consumption }));
  const fSleighs = s.filter((sleigh) => sleigh.u <= 20);
  const rv = fSleighs.length > 0 ? fSleighs[fSleighs.length - 1].name : null;
  return rv
}
