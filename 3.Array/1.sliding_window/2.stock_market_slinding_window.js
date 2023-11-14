"use strict";

/*
    Question: Best Time to Buy and Sell Stock

    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different 
    day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


    Example 1:

    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

 */

const maxProfit = function (prices) {
  let left = 0, // here, left = buy (just assume)
    right = 1, // here, right = sell
    maxProfit = 0; // maximum profit

  while (right < prices.length) {
    // console.log(`Day ${right} Sell price: ${prices[right]}`);
    // console.log(`buy price: ${prices[left]}`);
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // profit = sell - buy
      // console.log("profit: ", profit);
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // left++;  // if we use this (left++), it gives maximum profit 5 which is not actual output (i.e. 7, so we need to fix this bug

      // fit the bug created by left++
      left = right; // re-assign the minimum value
    }
    right++;
  }
  return maxProfit;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [1, 2, 5, 3, 1, 6, 4, 7, 1, 8];
const maximumProfit = maxProfit(prices);

console.log(maximumProfit);
