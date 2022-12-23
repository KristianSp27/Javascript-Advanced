function stringLength(string1, string2, string3) {
  const stringLength1 = string1.length;
  const stringLength2 = string2.length;
  const stringLength3 = string3.length;

  const sum = stringLength1 + stringLength2 + stringLength3;
  let average = sum / 3;
  console.log(sum);
  console.log(Math.floor(average));
}
