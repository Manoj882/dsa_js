/*
Question :
  Find maximum length of subarray such that sum of the subarray is even
 */

// Given array:

const nums = [1, 2, 3, 2, 1, 4];

const findMaxSumSubArray = function (nums) {
  let left = 0,
    currSum = 0,
    ans = 0;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];

    while (currSum % 2 !== 0) {
      currSum -= nums[left];
      ans = Math.max(ans, right - left + 1);
    }
  }
  return ans;
};

const output = findMaxSumSubArray(nums);
console.log(output);

// Ouput: 5
