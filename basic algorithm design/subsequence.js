// Coding Practice - Subsequence Problem
// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the
// remaining characters.
// Write a function that checks if one string is a subsequence of the other string.
// Ex.
// isSubsequence("hello", "hello Dear"); true
// isSubsequence("book", "brooklyn"); true
// isSubsequence("abc", "bac"); false (order matters)

function isSubsequence(s, t) {
  let subPointer = 0;
  let strPointer = 0;

  if (s.length === 0) return true;

  while (strPointer < t.length) {
    if (s[subPointer] === t[strPointer]) {
      subPointer++;
      strPointer++;
    } else {
      strPointer++;
    }

    if (subPointer >= s.length) {
      return true;
    }
  }

  return false;
}

console.log(isSubsequence("hello", "hello Dear"));
console.log(isSubsequence("book", "brooklyn"));
console.log(isSubsequence("abc", "bac"));
