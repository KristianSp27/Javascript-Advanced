function aggregateElements(input) {
  let sum = 0;
  for (let index = 0; index < input.length; index++) {
    sum += input[index];
  }
  console.log(`${sum}`);

  let inverseSum = 0;
  for (let i = 0; i < input.length; i++) {
    inverseSum += 1 / input[i];
  }
  console.log(`${inverseSum}`);

  let concatenation = "";
  for (let i = 0; i < input.length; i++) {
    concatenation += input[i].toString();
  }
  console.log(`${concatenation}`);
}
