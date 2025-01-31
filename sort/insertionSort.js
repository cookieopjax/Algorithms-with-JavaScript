import validateSort from './validateSort.js'

// key = 2
// j = 2, [4, 7, 5, 2]
// j = 1, [4, 7, 5, 5]
// j = 0, [4, 5, 7, 5]
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
      console.log(i, arr)
    }
    arr[j + 1] = key
  }
  return arr
}


console.log(insertionSort([4, 7, 5, 2]))
// validateSort(insertionSort)