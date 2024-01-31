const rotate = function (nums, k) {
  let x;
  let newnums = [];

  for (const i = nums.length - 1; i >= 0; i--) {
    while (k > 0) {
      if (nums[i] > 0) {
        // console.log(nums[i]);
        x = nums.splice();
        newnums = nums.unshift(x);
      }

      // console.log(nums.splice(-1));
      console.log(newnums, x);
      // console.log(nums);
      k--;
    }
  }
  console.log(nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
/*

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/
