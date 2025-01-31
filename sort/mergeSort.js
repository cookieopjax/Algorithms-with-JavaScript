// merge 2 sorted array
function merge(arr1, arr2) {
  let merged = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    } 
  }
  // array.slice(n) => 切第n個後的array出來，若沒有則為[]
  // array.concat(arr) => 合併兩個arr，若一個為空則就是另一個 
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j))
}

let arr1 = [2, 4, 6, 11, 14, 18]
let arr2 = [1, 3, 5, 9, 10]

console.log(merge(arr1, arr2))