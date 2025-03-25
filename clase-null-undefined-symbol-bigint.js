// Null
const snoopy = null;
console.log(snoopy); // null
console.log(typeof snoopy); // object

// Undefined
let name
console.log(name); // undefined

// Symbol
const uniqueId = Symbol('Id');
const Symbol1 = Symbol(1);
const Symbol2 = Symbol(1);
console.log(uniqueId); // Symbol('Id')
console.log(Symbol1 === Symbol2); // false

const ID = Symbol('ID');
let user = {}
user[ID] = '1234';
console.log(user); // 1234


// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n

const numberOfPArticlesInTHeUniverse = 10n ** 70n;
console.log(numberOfPArticlesInTHeUniverse); // 100