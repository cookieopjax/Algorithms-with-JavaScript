// Coding Practice - Palindrome
// Write a function that checks if the input string is a palindrome. Palindrome is a
// word that can be read forwards and backwards.
// Ex.
// is Palindrome ('awesome') false
// is Palindrome (foobar') false
// is Palindrome (tacocat') true
// is Palindrome (amanaplanacanalpanama') true

function Palindrome(str) {
  let arr = str.split("");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(Palindrome("awesome"));
console.log(Palindrome("foobar"));
console.log(Palindrome("tacocat"));
console.log(Palindrome("amanaplanacanalpanama"));
