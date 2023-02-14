function sortingNumbers(array) {
  const sortedArray = array.sort((a, b) => b - a);

  const result = [];

  while (sortedArray.length > 0) {
    result.push(sortedArray.pop());

    if (sortedArray.length > 0) {
      result.push(sortedArray.shift());
    }
  }

  return result;
}
