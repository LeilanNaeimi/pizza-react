const fibonacci = function (n) {
  if (n <= 0) {
    return "Error";
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n - 1];
  }
};
// Do not edit below this line
module.exports = fibonacci;
