function gcd(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  if (num2 > num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  while (true) {
    if (num2 == 0) return num1;
    num1 %= num2;
    if (num1 == 0) return num2;
    num2 %= num1;
  }
}
