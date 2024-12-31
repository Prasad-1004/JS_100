//Write a function to determine whether a given string is a palindrome or not!! A palindrome is a word, phrase , a number or other sequence of characters that reads the same forward and backward,ignoring spaces,punctuation and capitilization.

const palindrome = (str) => {
   str = str.toLowerCase().replace(/\W/g, "");
   let r_str = str.split("").reverse().join("");
   console.log(r_str);
   return str === r_str ? true : false;
}


console.log(palindrome("A man, a plan, a canal, Panama"));
console.log(palindrome("racecar"));
console.log(palindrome("192"));