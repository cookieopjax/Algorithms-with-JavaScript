// get two array intersections
// don't just use two for loop !
function intersection(arr1, arr2) {
  //calculate every number
  let result = [];
  let counter = {};
  let arr3 = arr1.concat(arr2);

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (prop in counter) {
    if (counter[prop] > 1) result.push(prop);
  }

  return result;
}

console.log(intersection([1, 2, 3, 7], [2, 3, 5]));
