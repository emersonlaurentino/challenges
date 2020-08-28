const shuffle1 = function (nums, n) {
  var arr = [];

  for (var a = 0; a < n; a++) {
    arr.push(nums[a])
    arr.push(nums[a + n])
  }

  return arr;
};

module.exports = {
  shuffle1,
};
