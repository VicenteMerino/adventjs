function checkPart(part: string) {
  let start = 0;
  let end = part.length - 1;

  while (start < end) {
    if (part[start] !== part[end]) {
      if (part[start + 1] === part[end]) {
        start++;
      } else if (part[start] === part[end - 1]) {
        end--;
      } else {
        return false;
      }
    } else {
      start++;
      end--;
    }
  }

  return true;
}
