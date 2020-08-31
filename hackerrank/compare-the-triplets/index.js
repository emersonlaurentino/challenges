function compareTriplets(a, b) {
  // a
  let totalAlice = 0;
  // b
  let totalBob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      totalAlice++;
    } else if (a[i] < b[i]) {
      totalBob++;
    }
  }

  return [totalAlice, totalBob];
}

module.exports = {
  compareTriplets,
};
