// Sliding Window
// This is a well-known algorithm.
// - Generally speaking, a sliding window is a sub-list that runs over an underlying
// collection. For example, if you have an array like:
// [a, b, c, d, e, f, g, h]
// Then, a sliding window of size 3 would run over it like
// [a, b, c]
//    [b, c, d]
//        [c, d, e]
//           [d, e, f]
//              [e, f, gl

// Coding Practice - Max and Min Sum
// Write two functions that calculate the max and min sum of n consecutive numbers
// in an array.
// Ex. 8, 6
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
// minSum ([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(nums, n) {
  let max = -Infinity;
  for (let i = 0; i < nums.length - n + 1; i++) {
    let thisSum = 0;
    for (let j = i; j < i + n; j++) {
      thisSum += nums[j];
    }

    if (thisSum > max) max = thisSum;
  }
  return max;
}

function minSum(nums, n) {
  let min = Infinity;
  for (let i = 0; i < nums.length - n + 1; i++) {
    let thisSum = 0;
    for (let j = i; j < i + n; j++) {
      thisSum += nums[j];
    }

    if (thisSum < min) min = thisSum;
  }
  return min;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
