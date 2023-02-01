function extractElementsWithStep(arr, step) {
  let result = [];
  for (let i = 0; i < arr.length; i = i + step) {
    result.push(arr[i]);
  }
  return result;
}
