function calories(array) {
  let sortedCalories = {};

  for (let i = 0; i < array.length; i += 2) {
    sortedCalories[array[i]] = Number(array[i + 1]);
  }
  console.log(sortedCalories);
}
calories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
