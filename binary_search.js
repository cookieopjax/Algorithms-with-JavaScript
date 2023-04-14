function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (target > nums[middle]) {
      start = middle + 1;
    } else if (target < nums[middle]) {
      end = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([], 2)); // -1
console.log(binarySearch([1], 2)); // -1
console.log(binarySearch([2], 2)); // 0
console.log(binarySearch([1, 3], 2)); // -1
console.log(binarySearch([1, 2, 3], 2)); // 1
console.log(binarySearch([1, 2, 3], 4)); // -1
console.log(binarySearch([1, 2, 3, 5, 6], 4)); // -1
console.log(binarySearch([1, 2, 3, 5, 6, 9, 23], 23)); // 6
console.log(binarySearch([1, 2, 3, 5, 6, 9, 23], 1)); // 0
console.log(binarySearch([1, 2, 3, 5, 6, 9, 23], 6)); // 4
console.log(binarySearch([1, 2, 3, 5, 6, 9, 23], 9)); // 5
console.log(binarySearch([1, 2, 3, 5, 6, 9, 23], 25)); // -1
