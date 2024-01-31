"use district";

//https://github.com/ani03sha/RedQuarkTutorials/blob/master/LeetCode/JavaScript/src/remove_duplicates_from_sorted_array.js

// leetcode  Arrays

// Remove Duplicates from Sorted Array
/************************** */
//****** ver 1*/
/************************** */
var removeDuplicates = function (nums) {
  return [...new Set(nums)];
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/************************** */
/**** ver 2 */
/************************** */
// let a = [0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 9];

// let b = arr.filter((e, i, a) => e !== a[i - 1]);

// console.log(b); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

/************************** */
//*******************ver 3 */
/************************** */
// var out = [];
// for (var i = 0, len = arr.length - 1; i < len; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     out.push(arr[i]);
//   }
// }
// out.push(arr[i]);
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/************************** */
//******************* ver 4*/
/************************** */
// var removeDuplicates = function (nums) {
//   // Length of the updated array
//   let count = 0;
//   // Loop for all the elements in the array
//   for (let i = 0; i < nums.length; i++) {
//     // If the current element is equal to the next element, we skip
//     if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
//       continue;
//     }
//     // We will update the array in place
//     nums[count] = nums[i];
//     count++;
//   }
//   return count;
// };

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/************************** */
/* other Sulotions*/
// Using filter() Method
// Using set() Method
// Using reduce() Method
// Using indexOf() Method
// Using forEach() Method
// Using Underscore.js _.uniq() Function
