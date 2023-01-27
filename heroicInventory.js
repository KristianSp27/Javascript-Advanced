function heroicInventory(array) {
  let result = [];

  for (const iterator of array) {
    let [name, level, items] = iterator.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : []; // if items = items.split(", ") else items = []
    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result)); //JSON.stringify(Object.fromEntries(map.entries()))
}
heroicInventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);
