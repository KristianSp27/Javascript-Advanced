function towns(array) {
  const towns = [];

  for (let index = 1; index < array.length; index++) {
    const tokens = array[index].split(/\s*\|\s*/g);
    const town = tokens[1];
    const latitude = Number(tokens[2]).toFixed(2);
    const longtitude = Number(tokens[3]).toFixed(2);
    const currentObject = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longtitude),
    };
    towns.push(currentObject);
  }
  console.log(JSON.stringify(towns));
}
