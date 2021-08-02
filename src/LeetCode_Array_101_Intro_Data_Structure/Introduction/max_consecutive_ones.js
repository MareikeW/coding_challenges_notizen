/* Leetcode - Array 101: Max Consecutive Ones */

// Given a binary array nums, return the maximum number of 1's in the array.

/*
    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
*/

const findMaxConsecutiveOnes = function(nums) {
    let currentWindowCount = 0;
    let maxConsecutiveOnes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentWindowCount += 1;;
            if (currentWindowCount > maxConsecutiveOnes) {
                maxConsecutiveOnes += 1;
            }
        } else if (nums[i] === 0) {
            currentWindowCount = 0;
        }
    }

    return maxConsecutiveOnes; // 3
};

findMaxConsecutiveOnes([1,1,0,1,1,1]);