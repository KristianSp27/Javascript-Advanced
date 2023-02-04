function extractDecreasingSubset(arr) {
  const nonDecreasingSubset = [];
  let currentMax = -Infinity;
  for (const num of arr) {
    if (num >= currentMax) {
      nonDecreasingSubset.push(num);
      currentMax = num;
    }
  }
  return nonDecreasingSubset;
}
