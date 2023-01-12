function sameNumbers(input) {
  const numToString = String(input);
  const splittedNum = numToString.split("");
  let isTrue = false;
  let finalResult = 0;

  for (let index = 0; index < splittedNum.length; index++) {
    finalResult += Number(splittedNum[index]);
    if (splittedNum[index] == splittedNum[0]) {
      isTrue = true;
    } else {
      isTrue = false;
    }
  }
  console.log(isTrue);
  console.log(finalResult);
}
sameNumbers(2222222);
