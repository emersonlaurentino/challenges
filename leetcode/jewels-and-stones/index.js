/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let count = 0;

  for (j of J) {
    for (let i = 0; i < S.length; i++) {
      if (j === S[i]) {
        count++;
      }
    }
  }

  return count;
};

module.exports = {
  numJewelsInStones,
};
