function addRemoveElements(arr) {
  let number = 1;
  const numbers = [];
  for (const command of arr) {
    if (command === "add") {
      numbers.push(number);
    } else if (command === "remove") {
      numbers.pop();
    }
    number++;
  }

  if (numbers.length === 0) {
    console.log("Empty");
  } else {
    numbers.forEach((num) => console.log(num));
  }
}
