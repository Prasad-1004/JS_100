// Write a function that takes an array of numbers as input and return the maximum number in the array

const findMax = (arr) => {
    return Math.max(...arr);
}

console.log(findMax([1,5,9,6,8,7]));