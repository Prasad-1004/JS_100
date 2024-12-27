// Write a function that takes three parameters representing the lengths of the sides of the triangle. The function should return a string indicating the type of triangle : Equilateral , Isosceles , Scalene

const Check = (a,b,c) => {
    if(a===b && b===c) return "Equilateral";
    if(a===b || b===c || c===a) return "Isosceles"; 
    else return "Scalene";
}

console.log(Check(3,3,3)); // Equilateral 
console.log(Check(3,4,3)); // Isosceles 
console.log(Check(3,4,5)); // Scalene