/* eslint-disable no-console */
function isPalindrome(theString: string): boolean {
  const length = theString.length;

  for (let i = 0; i < length; i++) {
    if (theString[i] !== theString[length - 1 - i]) return false;
  }

  return true;
}

export const testPalindrome = () => {
  console.log("madam", isPalindrome("madam")); // true
  console.log("hello", isPalindrome("hello")); // false
  console.log("a", isPalindrome("a")); // true
  console.log("", isPalindrome("")); // true
  console.log("racecar", isPalindrome("racecar")); // true
};
