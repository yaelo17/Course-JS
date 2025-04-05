// Methods that modify the original array (Mutability)

// splice()
const vegetables = ['Cucumber', 'Carrot', 'Brocoli', 'Spinach']
const removeVegetables = vegetables.splice(2, 1, 'Tomato', 'Onion')

console.log(vegetables)
console.log(removeVegetables)

// reverse()
const numbers = [1, 2, 3, 4, 5]
const reverseNumbers = numbers.reverse()

console.log(numbers)
console.log(reverseNumbers)

// sort()
const  fruits = ['Apple', 'Orange', 'Grapes', 'Granate']
const sortFruits = fruits.sort()

console.log(fruits)
console.log(sortFruits)

const  unsortedNumbers = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers.sort((a,b) => a - b)

console.log(fruits)
console.log(sortFruits)

// sort() with strings

const cities = ['New York', 'Paris', 'Tokyo', 'London']
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill()

const age = [21, 45, 35, 50]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15, 1))