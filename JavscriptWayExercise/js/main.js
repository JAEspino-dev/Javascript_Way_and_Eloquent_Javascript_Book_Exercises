// let age // this is declaring a variable
// age = 27 // this is an expression
// console.log(age)
// let num1 = 5 // this is an expression
// let num2 = 6 // this is an expression

// document.querySelector('h1').addEventListener('click', add)
// function add(){
//     let total = num1 + num2
//     console.log(total)
// }

// const name = prompt("Enter your first name:");
// alert(`Hello, ${name}`);
// const price = prompt("How much did you pay?")
// let updatedPrice = Number(price) * .206 + Number(price)
// console.log(updatedPrice)
// symbols = [1, 2, 3, 4, 5]
// let balance = 1000
// const bet = Number(prompt("What would you like to bet?"))
// switch(bet) {
//     case ((bet > 0) && (bet < balance)):
//         let reel = symbols[Math.floor(Math.random()*symbols.length)]
//         console.log(reel)
// }

// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

// let dayInputted = prompt("What day would you like to know the following day for?")

// let number = 1;
// while (number <= 5) {
//   console.log(number);
//   // The number variable is never updated: the loop condition stays true forever
// }

// // While loop
// while (condition) {
//   // Code to run while the condition is true
// }

// // For loop
// for (initialization; condition; final expression) {
//   // code to run while the condition is true
// }

// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.


// for loop
// document.querySelector('h1').addEventListener('click',carousel)

// let turn;
// function carousel(){
// for (turn=0; turn <= 10; turn++){
//     console.log("turn" + turn)
// }
// }
// document.querySelector('h1').addEventListener('click',carousel)
// let turn = Number(prompt('How Many Turns Do you Want to do?'))
// function carousel(){
// while (turn <= 100){
//     console.log("turn" + turn)
//     turn++
// }
// }

// function evenChecker(){
//     for (let number = 1; number <= 10; number++) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     }
//     }
// }

// function oddChecker(){
//     for (let number = 1; number <= 10; number++) {
//     if (number % 2 === 1) {
//         console.log(`${number} is odd`);
//     }
//     }
// }
// let number = 1
// function oddChecker(){
//     while(number <= 10){
//         if (number % 2 === 1) {
//             console.log(`${number} is odd`)};
//         number++
//     }
// }


// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

// let number = Number(prompt('enter a number less than 100 or equal to 100'))
// while (number > 100 || number < 50){
//     document.querySelector('h1').textContent = "Try Again!"
//     number = Number(prompt('Choose another number'))
//     console.log(number)
// }

// document.querySelector('#numSubmit').addEventListener('click', numFunction)
// function numFunction(){
//     const numInput = document.querySelector('#numInput').value
//     console.log(numInput)
//     let i = 0
//     while(i < 100){
//         multiplcationTableValue = numInput * i
//         console.log(multiplcationTableValue)
//         i++
//     }
// }

// function numFunction(){
//     const numInput = document.querySelector('#numInput').value
//     console.log(numInput)
//     for(i = 0; i < 100; i++) {
//         multiplcationTableValue = numInput * i
//         console.log(multiplcationTableValue)
//     }
// }

// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// function textEvaluate(){
//     let userInputtedText = document.querySelector('#userInput').value
//     while(userInputtedText !== 'yes' && userInputtedText !== 'no'){
//         document.querySelector('h1').innerText = 'Not yes or now, try again'
//         let newChoice = prompt('what is your new choice?')
//         userInputtedText = newChoice
//     }
// }

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.


// let number
// function numEvaluate(){
//     for(number = 0; number <= 100; number++){
//         if(number % 3 === 0 && number % 5 === 0){
//             console.log('FizzBuzz')
//         } else if (number % 3 === 0){
//             console.log('Fizz')
//         } else if(number % 5 === 0){
//             console.log('Buzz')
//         } else{
//             console.log(number)
//         }
//     }
// }
// Say hello to the user
// let firstName = ''
// let lastName = ''
// function getNames(){
//     firstName = document.querySelector('#userInputFirstName').value
//     lastName = document.querySelector('#userInputLastName').value
//     sayHello(firstName, lastName)
// }

// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   console.log(message)
//   displayMessage(message)
//   return message;
// }

// function displayMessage(message){
//     document.querySelector('h1').innerText = message
// }


// TODO: ask user for first and last name
// TODO: call sayHello() and show its result


// Square the given number x


// function square1(x) {
//   let square = x * x 
//   return square
// }

// // Square the given number x
// const square2 = x => {
//     let square = x * x
//     return square
// }
// for(x = 0; x <= 10; x++){
//     console.log(square2(x))
// }
// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25
//When it's done, update the program so that it shows the square of every number between 0 and 10.

// const pen = {
//   type: "ballpoint",
//   color: "blue",
//   brand: "Bic"
// };

// console.log(pen.type);  // "ballpoint"
// console.log(pen.color); // "blue"
// console.log(pen.brand); // "Bic"

// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,

//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points and ${this
//       .strength} as strength`;
//   }
// };

// console.log(aurora.describe());

// The describe() method doesn’t take any parameters. It uses this to access the properties of the object on which it is called.


// // TODO: create the character object here
// let aurora = {
//     health: 100,
//     strength: 0,
//     xp:0,
//     describe(){
//         return `aurora's health is ${this.health} `
//     }
// }
// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

// dog = {
//     type: 'chocoloate labrador',
//     color: 'brown',
//     weight:'80 lbs',
//     describe(){
//         return `Riggins is a ${this.type} and is a shade of ${this.color}`
//     }
// }
// console.log(dog.describe())

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// musketeers = ["Athos", "Porthos", "Aramis"]
// for(let musketeer of musketeers) {
//     console.log(musketeer)
// }
// for(let musketeer = 0; musketeer < musketeers.length; musketeer++) {
//     console.log(musketeers[musketeer])
// }

// Word info
// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
// const wordFromUser = prompt('What is your word?')
// console.log(wordFromUser.length)
// console.log(wordFromUser.toUpperCase())
// console.log(wordFromUser.toLowerCase())

// Vowel count
// Improve the previous program so that it also shows the number of vowels inside the word.
// for (const letter of wordFromUser) {
//     if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
//         console.log(letter + ' is a vowel')
//     } else {
//         console.log(letter + ' is not a vowel')
//     }
// }
// Backwards word
// Improve the previous program so that it shows the word written backwards.
// for (let i = wordFromUser.length - 1; i >= 0; i--) {
//     console.log(wordFromUser[i])
// }
// Palindrome
// Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// For example, "radar" should be detected as a palindrome, "Radar" too.




// const anObject = {
//   myProp: 2
// };

// // Create anotherObject using anObject as a prototype
// const anotherObject = Object.create(anObject);

// console.log(anotherObject.myProp); // 2


// Dogs
// Complete the following program to add the definition of the Dog class.

// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here
// class Dog {
//     constructor(name, species, size) {
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }
//     describe() {
//         return `${name} is a ${species} and at ${size} inches and would totally love to eat you`
//     }
//     bark() {
//         if(this.size > 60){
//             return "Woof Woof"
//         } else {
//             return 'Meow, Meow'
//         }
//     }
// }




// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// const groceries = ["apples", "bread", "milk"];

// groceries.forEach(groceryItem => {
//   console.log(groceryItem);
// });

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// const thingToPrint = '#'
// for (let counter = 0; counter < 7; counter++){
//   let pyramid = thingToPrint.repeat(counter)
//   console.log(pyramid)
// }

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

// let numberToPrint
// for (numberToPrint = 1; numberToPrint <= 100; numberToPrint++){
//   if(numberToPrint % 3 === 0 && numberToPrint % 5 === 0){
//     console.log('FizzBuzz')
//   } else if (numberToPrint % 3 === 0){
//     console.log('Fizz')
//   } else if (numberToPrint % 5 === 0) {
//     console.log('Buzz')
//   } else {
//     console.log(numberToPrint)
//   }
// }

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// document.querySelector("#inputSubmit").addEventListener('click', getHeightAndWidth)
// let width = 0
// let height = 0
// function getHeightAndWidth() {
//   width = Number(document.querySelector('#userInputWidth').value)
//   height = Number(document.querySelector('#userInputHeight').value)
//   console.log(width, height)
//   displayGrid(width, height)
// }
// function displayGrid(width, height) {
//   let board = ''
//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       if ((x + y) % 2 === 0) {
//         board += " ";
//       } else {
//         board += "#";
//       }
//     }
//     board += "\n";
//   }
//   console.log(board)
// }

// let safeMode = true;

// let launchMissiles = function() {
//   console.log("MISSILES LAUNCHED!");
// };

// if (safeMode) {
//   launchMissiles = function() {
//     // do nothing
//   };
// }

// launchMissiles();

// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first.");
// // // → ??
// function firstThing(){
//   return "First Thing"
// }
// function secondThing(){
//   return firstThing() + "Second Thing"
// }

// secondThing()


// function outerFunction('outside'){
//   const outer2 = 'Hi'
//   return function innerFunction(innerVariable) {
//     console.log('Outer Variable: ' + outerVariable)
//     console.log('Outer Variable: ' + outerVariable)
//     console.log(outer2)
//   }
// }
// const newFunction = outerFunction('outside')
// newFunction('inner')

// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   console.log(fib(n - 1) + fib(n - 2))
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10))

// function zeroPad(number, width) {
//   let string = String(number);
//   while (string.length < width) {
//     string = "0" + string;
//   }
//   return string;
// }
// console.log(zeroPad(10, 2))


// We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// function isEven(N){
//   if(N === 0){
//     return true
//   } else if (N === 1){
//     return false
//   } else {
//     return isEven(N-2)
//   }
// }
// isEven(-1)

// 
// let animal = "cat";
// // you cannot change 1 character in the string: 
// animal[0] = "r";
// console.log(animal)

class ShoppingCart{
    constructor(user){
        this.user = user
        this.items = []
    }
    addItems(name, price){
        this.items.push({ // [].push({'name', price})
            name: name,
            price: price
        })
        return `${name} got added to the cart`
    }
    removeItem(name){
        this.items = this.items.filter(item => item.name !== name)
    }
    getTotal(){
        return this.items.reduce((accumulator, item) => accumulator + item.price, 0)
    }
}
const JorgeCart = new ShoppingCart('Jorge')
console.log(JorgeCart)
JorgeCart.addItems('Noodles', 5)
JorgeCart.addItems('Chicken', 7)
JorgeCart.addItems('Tri-Tip', 34)
console.log(JorgeCart)
JorgeCart.removeItem('Chicken')
console.log(JorgeCart)
console.log(JorgeCart.getTotal())

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2150 },
    { name: "Company Three", category: "Auto", start: 1979, end: 2054 },
    { name: "Company Four", category: "Finance", start: 1981, end: 1981 },
    { name: "Company Five", category: "Retail", start: 1945, end: 1947 },
    { name: "Company Six", category: "Auto", start: 1981, end: 2142 },
    { name: "Company Seven", category: "Technology", start: 1944, end: 1982 },
    { name: "Company Eight", category: "Technology", start: 1972, end: 1980 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1982 }
]

const ages = [33, 12, 20, 5, 6, 12, 26]

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}
// forEach 
companies.forEach(company =>
    console.log(company)
)
// filter
let canBuyAlcohol = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canBuyAlcohol.push(ages[i])
    }
}
let canDrink = ages.filter(age => age >= 21)

// const retailStores = companies.filter(function (isCompanyARetailStore) {
//     if (isCompanyARetailStore.category === "Retail") {
//         return true
//     }
// }
// )
const retailStores = companies.filter(company => company.category === 'Retail')
console.log(retailStores)
// we want to filter companies of the category finance:
const financeStores = companies.filter(company => company.category === 'Finance')
console.log(financeStores)
// we want to filter companies that were started before 1990 and ended before 2005
const startedBefore1990 = companies.filter(company => (company.start < 1990 && company.end < 2005))
console.log(startedBefore1990)
// we want to filter companies that lasted more than 10 years into a new array
const companiesThatLasted10YearsOrMore = companies.filter(company => company.end - company.start >= 10)
console.log(companiesThatLasted10YearsOrMore)

// creates a simple array with just the names from the objects above
const companyNames = companies.map(company => company.name)
console.log(companyNames)

//return an array with start and end year of each company
const companyStartandEndArray = companies.map(company => {
    return `${company.name} was started in ${company.start} and closed in ${company.end}`
})
console.log(companyStartandEndArray)

const agesDoubled = ages.map(age => age * 2)
console.log(agesDoubled)

const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)

const ageMap = ages 
    .map(age => Math.sqrt(age))
    .map(age => age * 2)
console.log(ageMap)

const sortedCompanies = companies.sort(function(a,b){
    if(a.start > b.start){
        return 1
    } else {
        return -1
    }
})
console.log(sortedCompanies)
const sortedCompanies2 = companies.sort((a,b) =>(a.start > b.start ? 1 : -1))
console.log(sortedCompanies2)

const sortedAgesAscendingOrder = ages.sort((a,b) => a > b ? 1 : -1)
console.log(sortedAgesAscendingOrder)

const sortedAgesDescendingOrder = ages.sort((a,b) => a > b ? -1 : 1)
console.log(sortedAgesDescendingOrder)

// reduce method, add up all the ages in ages array
let ageSum = 0
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i]
}
console.log(ageSum)

const agesSum = ages.reduce(function(total,age){
    return total + age
}, 0)
console.log(agesSum)
// how can this be rewritten using arrow functions? 
const agesSums = ages.reduce((total, age) => total + age, 0)
console.log(agesSums)

// const ages = [33, 12, 20, 5, 6, 12, 26]
// const combinedAgesArray = ages
//     .map(age => age * 2) // creates a new array that has doubled each element
//     .filter(age => age >= 40) // filters out each age element less than 40
//     .sort((a,b) => a - b) // returns a new array in ascending order
//     .reduce((a,b) => a + b, 0) // accumulates all the values in the sorted array

// const ages = [33, 12, 20, 5, 6, 12, 26]
const combinedAgesArray = ages
    .map(age => age * 2)
    // creates a NEW array where each age is doubled

    .filter(age => age >= 40)
    // creates a NEW array containing only values >= 40

    .sort((a,b) => a - b)
    // sorts the array in ascending order
    // IMPORTANT: sort() MUTATES the array it is operating on

    .reduce((a,b) => a + b, 0)
    // accumulates/sums all the values, starting with 0
console.log(combinedAgesArray)
