function squareOfStars(input) {
  if (input == null) {
    input = 5;
  }
  for (let index = 1; index <= input; index++) {
    console.log("* ".repeat(input));
  }
}
