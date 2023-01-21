function townsAsStrings(input) {
  const result = {};

  for (let line of input) {
    const tokens = line.split(" <-> ");
    const name = tokens[0];
    const population = Number(tokens[1]);

    if (name in result) {
      result[name] += population;
    } else {
      result[name] = population;
    }
  }
  for (let name in result) {
    console.log(`${name} : ${result[name]}`);
  }
}
