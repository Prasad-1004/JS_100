// Write a function called CountChar that takes two parameters : a string and a charecter to count. The function should return the number of times the specifed charecter appears in the string.

const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    Count = word.split('').reduce((accum, currChar)=> {
        if(currChar===char){
            accum++;
        }
        return accum;
    }, 0);

    return Count;
}

console.log(countChar("Prasad","A"));