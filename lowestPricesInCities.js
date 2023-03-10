function lowestPrices(array) {
  let obj = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const [town, product, price] = element.split(" | ");

    if (!obj[product]) obj[product] = {};
    obj[product][town] = Number(price);
  }
  let finalResult = [];
  for (const key in obj) {
    let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
    let [town, price] = sorted[0];
    finalResult.push(`${key} -> ${price} (${town})`);
  }
  return finalResult.join(`\n`);
}
