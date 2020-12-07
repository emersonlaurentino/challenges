/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  var wealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    var sumMoney = 0;

    for (let j = 0; j < account.length; j++) {
      const money = account[j];
      sumMoney += money;
    }

    if (sumMoney > wealth) {
      wealth = sumMoney;
    }
  }

  return wealth;
};

module.exports = {
  maximumWealth,
};
