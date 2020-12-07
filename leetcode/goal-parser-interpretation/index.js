/**
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
  const text = [];

  for (let i = 0; i < command.length; i++) {
    const char = command[i];

    if (char === "G") {
      text.push(char);
    }

    if (char === "(") {
      if (command[i + 1] === ")") {
        text.push("o");
      }

      if (
        command[i + 1] === "a" &&
        command[i + 2] === "l" &&
        command[i + 3] === ")"
      ) {
        text.push("al");
      }
    }
  }

  return text.join("");
};

module.exports = {
  interpret,
};
