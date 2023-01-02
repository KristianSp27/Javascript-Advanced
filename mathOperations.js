function mathOperations(num1, num2, operation) {
  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      console.log(result);
      break;
    case "-":
      result = num1 - num2;
      console.log(result);
      break;
    case "*":
      result = num1 * num2;
      console.log(result);
      break;
    case "/":
      result = num1 / num2;
      console.log(result);
      break;
    case "%":
      result = num1 % num2;
      console.log(result);
      break;
    case "**":
      result = num1 ** num2;
      console.log(result);
      break;
    default:
      break;
  }
}
