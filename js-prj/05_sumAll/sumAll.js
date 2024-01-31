const sumAll = function (a, b) {
  // if (typeof a !== Number || typeof b !== Number) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  if (a > b) {
    [a, b] = [b, a];
  }

  let c = 0;
  for (let i = a; i <= b; i++) {
    c += i;
  }
  return c;
};

// Do not edit below this line
module.exports = sumAll;
