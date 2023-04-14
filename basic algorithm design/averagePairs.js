// Coding Practice - Average Pair
// Write a function that given a sorted array of integers and a number. Find if there's
// any pair in the array that has average of the given number. Find all of them. There
// might be multiple pairs fit the condition.
// Ex.
// average Pair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)
// The number pair is -11 and 14, 0 and 3, 1 and 2

//pointer !!
function averagePair(nums, avg) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  while (left < right) {
    let tempAvg = (nums[left] + nums[right]) / 2;
    if (tempAvg > avg) {
      right--;
    } else if (tempAvg < avg) {
      left++;
    } else if (tempAvg === avg) {
      result.push([nums[left], nums[right]]);
      left++;
      right++;
    }
  }
  return result;
}

console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));
