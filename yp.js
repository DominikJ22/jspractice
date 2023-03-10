console.log('hello world')
console.log('Dominik')

let name = 'dom'

console.log(name)


let sentence = "whats up"

console.log(sentence)


fruit = prompt('whats is your favorite fruit')
console.log(fruit)


let food = Number(prompt("how much ws the food?"))
let tipPercentage = Number(prompt('tip%?') / 100)
tipAmount =  food * tipPercentage
total = food + tipAmount
console.log(tipAmount)
console.log(total)
alert(tipAmount)

let groceries = ['🍌', '🍎', '🍊', '🍐']
   console.log(groceries)

   //grab the second index
console.log(groceries[2])


//array methods
groceries.push('cookies')
console.log(groceries)

console.log(groceries.slice(0, 2))
console.log(groceries.slice(1, 4))


console.log(groceries.indexOf('cookies'))

//objects
const person = {
    name: "Leo",
    shirt: "white"
}


//access object: dot notation vs bracket notation
console.log(person.name)
console.log(person.shirt)


//bracket notation
console.log(person['name'])
console.log(person['shirt'])


//assign objetcs
person.phone = '12345678'
console.log(perosn.phone)

console.log(person)

const person2 = {
    name: 'Qazi',
    shirt: 'black'
}

console.log(person2.name)
console.log(person['name'])

console.log(person2.shirt)
console.log(person2['shirt'])

const introducer = (name, shirt) =>{
    const person3 = {
        name: name,
        shirt: shirt,
        assets: 10000,
        liability: 50000,
        netWorth: function(){
           return this.assets - this.liability
        }
    }

    let intro = `Hi, my name is ${person3.name} and the color of my shirt is ${person3.shirt} and  my networth is ${person3.netWorth()}.`

    return intro
}

console.log(introducer('leo', 'white'))

let fruits = ['🍌', '🍎', '🍊', '🍐']

for( let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}



