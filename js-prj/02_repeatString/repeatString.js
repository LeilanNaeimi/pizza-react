const repeatString = function (str, repeat) {
  if (repeat < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < repeat; i++) {
    string += str;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
