const convertToCelsius = function (f) {
  const c = (f - 32) * (5 / 9);
  return parseFloat(c.toFixed(1));
};

const convertToFahrenheit = function (c) {
  const f = c * (9 / 5) + 32;
  return parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
