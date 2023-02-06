function argumentInfo() {
  let typeCounts = {};
  for (let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    let value = arguments[i];
    console.log(`${type}: ${value}`);
    if (!typeCounts[type]) {
      typeCounts[type] = 1;
    } else {
      typeCounts[type]++;
    }
  }
  let types = Object.keys(typeCounts);
  types.sort((a, b) => {
    return typeCounts[b] - typeCounts[a];
  });
  for (let i = 0; i < types.length; i++) {
    console.log(`${types[i]} = ${typeCounts[types[i]]}`);
  }
}
