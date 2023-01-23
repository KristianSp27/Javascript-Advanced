function subtract() {
  const firstInput = document.getElementById("firstNumber").value;
  const secondInput = document.getElementById("secondNumber").value;

  const resultDiv = document.getElementById("result");
  const finalResult = Number(firstInput) - Number(secondInput);
  resultDiv.textContent = finalResult;
}
