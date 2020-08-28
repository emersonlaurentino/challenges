var isNumber = function (s) {
  const numberSerialized = Number(s);

  if (
    numberSerialized.toString() === "NaN" ||
    numberSerialized === "NaN" ||
    s.toString().trim() === ""
  ) {
    return false;
  }

  return (
    typeof numberSerialized === "number" ||
    numberSerialized.toString() === s.trim()
  );
};

module.exports = {
  isNumber,
};
