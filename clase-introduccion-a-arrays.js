// How to create an Array

// 1.- New arrays() or array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const number = Array(1, 2, 3, 4)
console.log(number)

// 2.- Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
    ingredient: 'milk', quantity: '1 cup'
    },
    false
]

console.log(recipeIngredients)

// Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

// leght property 

const numberOfFruits = fruits.length
console.log(numberOfFruits)


// Mutability & Inmutability

// Mutability

fruits.push('watermelon')
console.log(fruits)

// iImutability

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(fruits)
console.log(newFruits)

// Checking Arrays with Array.isArray

const  isArray = Array.isArray(fruits)
console.log(isArray)



// Practical Exercise: Sum all elements of an array.

const numberArrays = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numberArrays.length; i++) {
    sum += numberArrays[i]
}

console.log(sum)