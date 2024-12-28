// Write a Function to start an array of nummbers in an ascending order
// You are not allowed to use sort function

const ascending = (arr) => {
    return arr.sort((a, b)=> a-b);
}

console.log(ascending([5,9,1,8,4,3,7]));