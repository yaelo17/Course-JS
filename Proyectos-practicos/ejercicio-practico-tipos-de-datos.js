// Social Media Profile

// 1.- User Information
const username = 'Yaelo17'
const fullName = 'Yael Solis'
const age = 20
const isStudent = true

// 2.- Address
const address = {
    Street: '1234 Main St',
    City: 'San Francisco',
    state: 'CA',
    ZipCode: '94123'
}

// 3.- Hobbies
const hobbies = ['Coding', 'Soccer', 'Gaming']

// 4.- Generating Personal Bio
const personalBio = 
`Hi, I'm ${fullName}
 Hi, I'm ${age} years old
 I live in ${address.City}, ${address.state}
 My hobbies are ${hobbies.join(', ')}
 Follow me for codign content!`


//  5.- Print the Personal Bio
console.log(personalBio)