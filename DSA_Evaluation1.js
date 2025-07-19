// 1. Declare a variable age and assign your age to it as a number. Print its data type using the typeof operator.

let age = 21;
console.log(typeof age);     // number

// 2. Create a variable called price with the value "150" (string type). Convert price to a number 
// and store it in a variable numPrice. Print the value and data type of numPrice.

let price = "150";
let numPrice = Number(price);

console.log(numPrice);             // 150
console.log(typeof numPrice);     // number

// 3. Initialize two variables, num1 with value 10 and num2 with value 5. 
//    Calculate and print their sum, difference, product, and quotient.

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(sum);                 // 15
console.log(difference);          // 5
console.log(product);            // 50
console.log(quotient);          // 2

// 4. Declare a variable city and assign the value "Hyderabad". 
//    Print the first three characters using string indexing 
//   (not using any in-built functions other than bracket notation).

let city = "Hyderabad";
console.log(city[0]);         // H
console.log(city[1]);         // y
console.log(city[2]);        // d

// 5. Create three variables: a = 20, b = "5", and c = 2. 
//    Convert b to a number, add all three variables, and print the result.

let a = 20;
let b = "5";
let c = 2;

b = Number(b);
let result = a + b + c;
console.log(result);            // 27

// 6. Use let to declare a variable called score without assigning a value. Print its value and data type.
//    Now assign the value 50 and print the value and type again.

let score;
console.log(score);              // undefined
console.log(typeof score);       // undefined

score = 50;
console.log(score);            //  50
console.log(typeof score);     //  number

// 7. Write a code snippet to show the difference between using var,
//    let, and const for declaring variables using examples, and explain 
//    what happens if you try to reassign their values (write any errors as comments).

let x = 20;
// let x = 30;    // SyntaxError We cannot redeclare the same variable using let keyword
x = 30;           // We can reassign the value 
console.log(x);   // 30

var y = 30;
var y = 40;        // We can redeclare and reassign the sane value using var keyword
console.log(y);    // 40

const z = 60;
// const z = 70;     We cannot redeclare and reassign the value using const keyword
console.log(z);      60

// 8. Initialize two variables—base with 10 and height with "5". 
//    Convert height to a number and calculate the area of a triangle
//    (area = 0.5 * base * height). Print the result.

let base = 10;
let height = "5";

height = Number(height);
let area = 0.5 * base * height;
console.log(area);                    // 25

// 9. Assign a variable marks with the numeric string "85". 
//   Convert it to a number, add 15, and print the total.

let marks = "85";
marks = Number(marks);
let total = marks + 15;
console.log(total);               // 100

// 10. Declare a variable message with value "Hello, World!". 
//     Reassign it to 42 and print the result and its data type after reassignment.

let message = "Hello, World!";
message = 42;
console.log(message);                  // 42
console.log(typeof message);           // number

// 11. Initialize a variable text with value "123abc".
//     Attempt to convert it to a number and print the result and its type.

let text = "123abc"
let res = Number(text);
console.log(res);                    // NaN Not a Number
console.log(typeof res);                // undefined




