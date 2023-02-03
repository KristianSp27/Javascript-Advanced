function rotateArray(arr, rotationCount) {
  const rotatedArray = [...arr];
  for (let i = 0; i < rotationCount; i++) {
    rotatedArray.unshift(rotatedArray.pop());
  }
  return rotatedArray.join(" ");
}
