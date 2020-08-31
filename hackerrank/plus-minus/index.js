function plusMinus(arr) {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;

  const decimals = 6;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const element = arr[i];

    if (element < 0) {
      negativeNumbers++;
    } else if (element > 0) {
      positiveNumbers++;
    } else {
      zeros++;
    }
  }

  const proportionPostive = parseFloat((positiveNumbers / n).toFixed(decimals));
  const proportionNegative = parseFloat(
    (negativeNumbers / n).toFixed(decimals)
  );
  const proportionZeros = parseFloat((zeros / n).toFixed(decimals));

  return [proportionPostive, proportionNegative, proportionZeros];

  /**
   * this is the solution to work within the hackerrank
   * no use parseFloat and use console
   */

  // const proportionPostive = (positiveNumbers / n).toFixed(decimals);
  // const proportionNegative = (negativeNumbers / n).toFixed(decimals);
  // const proportionZeros = (zeros / n).toFixed(decimals);

  // console.log(proportionPostive);
  // console.log(proportionNegative);
  // console.log(proportionZeros);
}

module.exports = {
  plusMinus,
};
