function maxProfit(prices) {
  let maxProfit = 0; // Initialize maximum profit to 0

  for (let i = 1; i < prices.length; i++) {
    // Calculate the profit for the current day
    const profit = prices[i] - prices[i - 1];

    // If the profit is positive, add it to the maxProfit
    if (profit > 0) {
      maxProfit += profit;
    }
  }

  return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
const result1 = maxProfit(prices1);
console.log("Maximum profit for example 1: " + result1); // Output: Maximum profit for example 1: 7

const prices2 = [1, 2, 3, 4, 5];
const result2 = maxProfit(prices2);
console.log("Maximum profit for example 2: " + result2); // Output: Maximum profit for example 2: 4

const prices3 = [7, 6, 4, 3, 1];
const result3 = maxProfit(prices3);
console.log("Maximum profit for example 3: " + result3); // Output: Maximum profit for example 3: 0
