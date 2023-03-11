// console.log('hello world')
// console.log('Rafeh Qazi')

 // variables (var, const, let)
// let name = 'Peter Pan'
// console.log(name)

// let sentence = 'how are you doing today, nice to see you, hope you have a great day!'

// operators
// fruit = prompt('what is your favorite fruit?')

// console.log(fruit)

// * / ** + -

// food = Number(prompt('how much was the food?'))
// tipPercentage = Number(prompt('tip %?')) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log('tip amount', tipAmount)
// console.log('total', total)
// alert(tipAmount)

// user input

/* data types (strings, numbers)
numbers 👉 1, 5, 10, 100, 2.5
strings 👉 'hello', "what is up"
arrays 👉 []
objects 👉 {}
boolean 👉 true / false (banks)
*/

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1
*/

// Baby weather app (conditionals)
// if rain 👉 'Grab your umbrella ☔'
// else 👉 'Wear your sunglasses 😎'
// let weather = prompt('How is the weather?')

// if (weather == 'rainy') {
//   console.log('Grab your umbrella ☔')
// } else {
//   console.log('Wear your sunglasses 😎')
// }

// conditional operators
// ==, ===, >, <, <=, >=, !=, !==

// Functions
// this is a function called 'sayMyName'
// and it has 0 arguments
// does: it logs out your name to the console
function sayMyName() {
    console.log('Qazi')
  }
  
  // sayMyName()
  
  // this is a function called "sayMyName2"
  // it has 1 argument called `name`
  // does: it logs out your name to console
  function sayMyName2(name) {
    console.log(name)
  }
  
  // sayMyName2('Kevin')
  
  function greeting(name) {
    // greet = 'hi ' + name + ', Nice to meet you!'
    // template literals ``
    greet = `hi ${name}, Nice to meet you!`
    console.log(greet)
  }
  
  // greeting('Johnny Depp')
  
  function sum(a, b) {
    // return
    return a + b
  }
  
  // num1 = sum(1, 2)
  // console.log(num1)
  
  function calculateFoodTotal(food, tip) {
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    return total
  }
  
  // console.log(calculateFoodTotal(300, 20))
  
  // ES6
  // Arrow Functions =>
  // arrow function with explicit return
  //const sumArrow = (a, b) => {
  // return a + b
  //}
  
  // arrow function with implicit return
  // IMPORTANT: For implicit return, remove curly braces
  //const sumArrow2 = (a, b) => a + b
  
  // console.log(sumArrow2(10, 50))
  
  // Arrays
   const groceries = ['🍌', '🍎', '🍊', '🍐']
   console.log(groceries)
  
   // grab the 2nd index
  // console.log(groceries[2])

  //ARRAY Methods

  // push Adds things at the end of an array
  // groceries.push('cookies')
  // console.log(groceries)

  //pop removes things from the end
  // groceries.pop()
  // console.log(groceries)

  //unshift adds things to the front of an array
  // groceries.unshift('water')
  // console.log(groceries)

  //shift removes things from the front
  // groceries.shift()
  // console.log(groceries)

  //Array Slice
  // returns a part of the array you want in a new one
  //starts from 0 indec and includes anthing until the end of the second peremater (RANGE of actual items)
  // groceries.slice(0, 2)
  // console.log(groceries)

  // groceries.slice(3, 6)
  // console.log(groceries)

  // groceries.slice(1, 4)
  // console.log(groceries)

  // Tells you the index number of an item in the array
  //console.log(groceries.indexOf(''))




//OBJECTS {}
//objects are key/property: value pairs
//   const person = {
//     name: 'Leo',
//     shirt: 'white'
//   }

//dot notation
//   console.log(person.name)
//   console.log(person.shirt)

//bracket notation
//   console.log(person['name'])
//   console.log(person['shirt'])

//   //assign objects
//   person.phone = '12345'
//   console.log(person.phone)

//   person['address'] = '12 Street'
//   console.log(person.phone)

// console.log(person)


// const person2 = {
//   name: 'Qazi',
//   shirt: 'black'
// }

// console.log(person2.name)
// console.log(person2['shirt'])

// console.log(person2)

//method is a property containing a function definition
// .this refers to items within the object
// const introducer3 = (name, shirt) =>{
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities: 50000,
//     netWorth: function() {
//       return this.assets - this.liabilities
//     }
//   } '
  
//   const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()}`

//   return intro
// }
// console.log(introducer3('bob', 'blue' ))


// const introduc = (person, shirt) => {
//   man ={
//     person: person,
//     shirt: shirt
//   }
//   let hello = `Hi my name is ${man.person} and I am wearing the color ${man.shirt}.`

//   return hello
// }
// console.log(introduc('Jimbo', 'red'))


// let fruit = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])
// console.log(fruit[3])


// for( let i=0; i < fruit.length; i++){
//   console.log(i, fruit[i])
// }

// for ( const frui of fruit){
//   console.log(frui)
// }

//const numbers = [1, 2, 3, 4, 5, 6]

// for(let i = 0; i < numbers.length; i++ ){
//   console.log(numbers[i])
// }

// const double = (numbers) =>{
//   let result = []
//   for(const nums of numbers){
//     result.push(nums * 2)
//   }
//   return result
// }


// console.log(double([1, 2, 3, 4, 5, 6]))


// const triple = (digits) => {
//   let ans = []
//   for (const digit of digits ){
//     ans.push(digit * 3)
//   }
//   return ans
// }

// console.log(triple([1, 2, 3, 4]))


//OF gives objects and IN gives index
// const howManyLetters = (phrase) =>{
//counter
//   let result = 0

//   for( const index of phrase){
//     result = Number(index) + 1
//   }

//{} makes it an object key and creates an object
//   return {result}
// }

// const phrase = 'hey, can you go to grocery store with me?'

// console.log(howManyLetters(phrase))


//sum up all numbers in array


// const digits = [1, 2, 3, 4] //10

// const sumArray = (numbers) =>{
//   let result = 0;
//   //for loop

//   for( let num of numbers){
//     result += num
//   }
//   return {result}
// }

// console.log(sumArray(digits))




// const sumArray = (numbers) =>{
//   let result = 0
//   for( const nums of numbers){
//     result += nums
//   }
//   return result

// }


// let digits = [ 2, 4, 6]

// console.log(sumArray(digits))


// const max = (numbers) =>{
//   let result = numbers[0];

//   // loops
//   for ( const number of numbers){
//     if (number > result){
//       result = number
//     }
//   }

//   return result
// }
// console.log(max([1, 2, 3, 4]))


// const letterFrequency = (phrase) =>{
//   //letterFrequency('haha') to {'h': 2, 'a': 2}
//   //make a 'freqency' object {}
//   let frequency = {}

//   for(let letter of phrase){
//     //check if letter exist in frequency
//       //increment the value by +1
//     //otherwise, set the value to 1
//     if(letter in frequency){
//       frequency[letter] += 1
//      }else{
//       frequency[letter] = 1
//     }

//   }
//   return frequency

// }


// // console.log(letterFrequency('haha'))

// //wordFrequency('lol what lol') to {'lol': 2, 'what': 1}
// const wordFrequency = (phrase) =>{
//   let freqency = {}
//  let words = phrase.split(' ')
//  for (const word of words){

//   if(word in freqency){
//     frequency[word] += 1
//   } else {
//     frequency[word] = 1
//   }
//  }

//   return freqency
// }

// console.log(wordFrequency('lol what lol'))



// //incremntal operators
// //++ += -= --


//higher order functions


// map - loops and returns an array
//filter = loops and return array with matching condtions
//reduce - combine all of the sum


//MAP
const doubleMap = (numbers) => {
  return numbers.map(numbers => numbers * 2)
}
console.log(doubleMap([1, 2, 3, 4]))


//FILTER
const filter = (numbers) =>{

  return numbers.filter( numbers => numbers > 3)
}
console.log(filter([1, 2, 3, 4, 5]))


const actors = [
  {name: 'johnny', netWorth: 200000},
  {name: 'amber', netWorth: 10},
  {name: 'leo', netWorth: 100000}
]

let result = (actors.filter(actor => actor.netWorth > 10))
let names = result.map(actor => actor.name).join(', ')

//playgorund.innerHtml = `<h1>${names}</h1>`

//REDUCE
//SUM think Reduce
//takes in a function
//loops and gives back accumulator
function sum(a, b){
  return a + b
}

function multiply(a, b){
  return a * b
}


const nums = [1, 2, 3]
//common sum practice pattern 
const ans = nums.reduce((a, b) => a + b, 0)

console.log(ans)