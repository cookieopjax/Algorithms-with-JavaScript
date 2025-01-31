import validateSort from './validateSort.js'

// [ 4, 2, 5, 1]
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex)
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

validateSort(selectionSort)
