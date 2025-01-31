import validateSort from './validateSort.js'

// [ 1, 2, 3, 4]
function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        swapping = true
      }
    }
    // 如果每一項都比過了，後面都比前面大
    // 代表排好了，可以提前結束加速
    if (!swapping) break
  }
  return arr
}

validateSort(bubbleSort)
