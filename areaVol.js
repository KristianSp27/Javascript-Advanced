function areaVol(areaFunc, volumeFunc, shapesJSON) {
  const shapes = JSON.parse(shapesJSON);
  const shape = shapes[0];
  const result = [];
  for (let shape of shapes) {
    const area = areaFunc.call(shape);
    const volume = volumeFunc.call(shape);
    const current = {
      area,
      volume,
    };
    result.push(current);
  }
  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
