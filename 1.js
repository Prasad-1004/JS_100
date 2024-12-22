//Write a function findLongestWord that takes a string as input and returns the longest word in the string.If there are multiple longest words, return the first one encountered.

const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

strArr = str.split(" ");
strArr = strArr.sort((a, b) => a.length-b.length);

return strArr.at(-1);
}




console.log(findLongestWord("watch Javascript Tutorial on Youtube"));