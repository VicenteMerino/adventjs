function countHours(year: number, holidays: string[]): number {
  return holidays.reduce((acc, holiday) => {
    const date = new Date(`${year}-${holiday}`);
    const day = date.getDay();
    const isWeekend = day === 0 || day === 6;
    return isWeekend ? acc : acc + 2;
  }
  , 0);
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
console.log(countHours(year, holidays));
