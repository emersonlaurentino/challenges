const runningSum1 = function (nums) {
  var arr = Array.from(nums);

  for (var a = 1; a < arr.length; a++) {
    arr[a] += arr[a - 1];
  }

  return arr;
};

module.exports = {
  runningSum1,
};
