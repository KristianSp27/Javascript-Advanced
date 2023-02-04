function sortAlternating(numbers) {
  numbers.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < numbers.length / 2; i++) {
    result[i * 2] = numbers[i];
    result[i * 2 + 1] = numbers[numbers.length - i - 1];
  }

  if (numbers.length % 2 !== 0) {
    result.push(numbers[Math.floor(numbers.length / 2)]);
  }

  return result;
}
