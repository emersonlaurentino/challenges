// var addDigits = function (num) {
//   const numbers = String(num)
//     .split("")
//     .map(Number)
//     .filter((item) => item > 0);

//   const number = numbers.reduce((total, item) => {
//     total = total + item;
//     return total;
//   }, 0);

//   if (number > 9) {
//     return addDigits(number);
//   }

//   return number;
// };

var addDigits = function (num) {
  return !num ? 0 : num % 9 || 9;
};

module.exports = {
  addDigits,
};
