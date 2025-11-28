// spread function takes every index of individiual and append it on new set of data 
const nums = [13,5,6,7,8,9,123,9,2,104,231415,9435,23]
console.log(Math.max(nums)) // its NaN bcs it does not accept an array
console.log(Math.max(...nums)) // due this it accepts an array
console.log(...'hello')