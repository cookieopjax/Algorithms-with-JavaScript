// Coding Practice - Frequency Problem
// Write a function that takes two strings and check if they have the same letters.
// Order doesn't matter.
// Ex.
// sameFrequency("abbc", "aabc") false
// sameFrequency("abba”, “abab") true
// sameFrequency("aasdebasdf","adfeebed") false

function sameFrequency(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  arr1 = arr1.split("");
  arr2 = arr2.split("");
  let counter1 = {};
  let counter2 = {};
  arr1.forEach((el) => {
    if (counter1[el]) {
      counter1[el]++;
    } else {
      counter1[el] = 1;
    }
  });

  arr2.forEach((el) => {
    if (counter2[el]) {
      counter2[el]++;
    } else {
      counter2[el] = 1;
    }
  });

  for (prop in counter1) {
    if (!counter2[prop]) return false;

    if (counter1[prop] !== counter2[prop]) return false;
  }

  return true;
}

console.log(sameFrequency("abbc", "aabc"));
console.log(sameFrequency("abba", "abab"));
console.log(sameFrequency("aasdebasdf", "adfeebed"));
