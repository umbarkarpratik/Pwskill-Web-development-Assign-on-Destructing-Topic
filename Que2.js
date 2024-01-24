// 02. Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

function UniqueElement(arr){
   return new Set(arr)
}

const arr=[1,2,3,2,2,1]
let resArr=UniqueElement(arr);
console.log(resArr)