function sortStrings(strings) {
  strings.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
  return strings.join("\n");
}
