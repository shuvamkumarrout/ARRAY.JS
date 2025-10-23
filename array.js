//Array(multiple values in single variables,it is resizable,)
const arr=[1,2,3,4,5,6]

//Array methods
arr.push(6)
arr.pop()
arr.unshift(9)
arr.shift()
// console.log(arr.includes(8));
// console.log(arr.indexOf(7));
const newArr=arr.join()
// console.log(arr);
// console.log(newArr);

// console.log(typeof(newArr));

// slice and Splice
const myArr=arr.slice(1,3)
console.log(myArr);

const myArr2=arr.splice(1,3)
console.log(myArr);
console.log(myArr2);







