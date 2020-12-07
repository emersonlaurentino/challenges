/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

const compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  const length = Math.max(v1.length, v2.length);

  for (let i = 0; i < length; i++) {
    const numV1 = i < v1.length ? parseInt(v1[i]) : 0;
    const numV2 = i < v2.length ? parseInt(v2[i]) : 0;

    if (numV1 !== numV2) return numV1 < numV2 ? -1 : 1;
  }

  return 0;
};

module.exports = {
  compareVersion,
};
