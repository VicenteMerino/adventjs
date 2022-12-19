function wrapping(gifts: string[]): string[] {
  return gifts.map(
    (gift) => {
      const star = "*".repeat(gift.length + 2);
      return `${star}\n*${gift}*\n${star}`;
    }
  );
}

console.log(wrapping(["cat", "game", "socks"]));
// output: ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******']
