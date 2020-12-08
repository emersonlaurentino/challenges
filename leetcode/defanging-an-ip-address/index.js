/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
  const text = [];

  for (let i = 0; i < address.length; i++) {
    const char = address[i];

    if (char === ".") {
      text.push("[.]");
    } else {
      text.push(char);
    }
  }

  return text.join("");
};

module.exports = {
  defangIPaddr,
};
