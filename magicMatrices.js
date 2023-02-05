function isMagicalMatrix(matrix) {
  let targetSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    targetSum += matrix[i][0];
  }

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j];
    }
    if (rowSum !== targetSum) {
      return false;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }
    if (colSum !== targetSum) {
      return false;
    }
  }

  return true;
}
