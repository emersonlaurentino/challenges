function diagonalDifference(arr) {
  let leftRight = 0;
  let rightLeft = 0;

  for (let a = 0; a < arr.length; a++) {
    leftRight += arr[a][a];
    rightLeft += arr[a][arr.length - a - 1];
  }

  return Math.abs(leftRight - rightLeft);
}

module.exports = {
  diagonalDifference,
};
