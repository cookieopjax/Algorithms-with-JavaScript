let arr =  [1, 7, 5, 2]
let key = 2
let j = 2

while (j >= 0 && arr[j] > key) {
  arr[j + 1] = arr[j]
  j--
  console.log(arr)
}
arr[j + 1] = key

console.log('final', arr)