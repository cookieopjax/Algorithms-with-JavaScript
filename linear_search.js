let arr = [15, 56, 2, 16, 98, 56];
function linearSearch(arr, n){
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === n) {
      return i;
    }
  }
  return -1;
}