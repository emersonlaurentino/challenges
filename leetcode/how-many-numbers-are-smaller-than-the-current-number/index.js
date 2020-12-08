/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const numbers = [];

  for (let i = 0; i < nums.length; i++) {
    var count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== nums[i] && nums[j] < nums[i]) {
        count++;
      }
    }

    numbers.push(count);
  }

  return numbers;
};

module.exports = {
  smallerNumbersThanCurrent,
};
