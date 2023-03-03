/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a, b){
  return a + b
}
console.log(add(2, 2))

const addSec = (a, b) => {
  return a + b
}
console.log(addSec(2, 2))




function sub( a, b){
   return a - b//Subtract function here
}
console.log(sub(4, 3))

const subSec = (a, b) => {
 return a - b
}
console.log(subSec(4, 3))



function div(a, b){
  return a / b//Divide function here
}
console.log(div(4, 2))

const divSec = (a, b) =>{
 return a /b
}
console.log(divSec(4, 2))



function mul(a, b){
  return a * b //Multiply function here
}

console.log(mul(8, 8))

const  mulSec = (a, b) =>{
  return a * b
}
console.log(mulSec(8, 8))

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/