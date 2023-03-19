/*

Q2: Problem-Solving (Using JavaScript)
Write a JavaScript function that takes an array of numbers as a parameter and returns the majority number as described below. 

Given array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Constraints:

n === nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Example 1
Given nums = [2,2,1,1,1,2,2]
Your function should return 2 because it appears more than n / 2 times in the array.

Example 2
Given nums = [3,2,3]
Your function should return 3 because it appears more than 3 / 2 times in the array. Where 3 is the number of elements in the array.

*/

// {
//     number: 1;
//     count: 12;
// }

function getMajority(nums) {
    let majorityCount = [];
    //add first number in nums array to majorityCount array
    majorityCount.push({ number: nums[0], count: 1 }); //nums.length is always > 1 so index 0 will be always exist
    for (let i = 1; i < nums.length; i++) {
        //start from index 1 because first number is already added.
        innerLoop: for (let j = 0; j < majorityCount.length; j++) {
            if (nums[i] === majorityCount[j].number) {
                majorityCount[j].count = majorityCount[j].count + 1;
                break innerLoop;
            }

            if (j === majorityCount.length - 1) {
                majorityCount.push({ number: nums[i], count: 0 });
            }
        }
    }

    for (let i = 0; i < majorityCount.length; i++) {
        if (majorityCount[i].count >= nums.length / 2) {
            return majorityCount[i].number;
        }
    }
    return -1;
}

let nums;

nums = [2, 2, 1, 1, 1, 2, 2];
console.log("Test1:", getMajority(nums));

console.log("*******************************************************");

nums = [3, 2, 3];
console.log("Test2", getMajority(nums));
