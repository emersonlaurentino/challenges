const kidsWithCandies = function (nums, n) {
  var arr = [];
  const max = nums.reduce((a, b) => Math.max(a, b));

  for (let a = 0; a < nums.length; a++) {
    if (max <= nums[a] + n) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }

  return arr;
};

module.exports = {
  kidsWithCandies,
};
