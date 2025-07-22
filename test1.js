
// 1. Declare a variable called userName and assign it a string value. 
// Use the typeof operator to display the type of the variable in the console.

// let userName = "Ajay";
// console.log(typeof userName);      //string

// 2. What will typeof undefined and typeof null return?
//  Assign variables and log their types to the console. Briefly explain the result.

// let a = undefined;
// let b = null;

// console.log(typeof a);                //undefined
// console.log(typeof b);                //object

// 3. Declare a variable x and assign the value 42. 
// Use an if statement to print "x is a number" only if x is of type number.

// let x = 42;
// // let y = typeof x;
// if(typeof x == "number"){
//     console.log("x is a number");
// }
// else{
//     console.log("x is Not a number");
// }

// 4. Let age = "18" (string) and minAge = 18 (number). 
// Compare these variables with both == and ===. Print the result of each comparison.

// let age = "18";
// let minAge = 18;
// console.log(age == minAge);            // true loosely coupled
// console.log(age === minAge);           // false tightly coupled

// 5. Declare variables a = 10 and b = 20. Use an if-else statement to print the greater number.

// let a = 10;
// let b = 20;
// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }


// 6. Given score = 45, use an if-else-if ladder to print:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Below Average" otherwise.

// let score = 45;
// if(score >= 90){
//     console.log("Excellent");
// }
// else if(score >= 75){
//     console.log("Good");
// }
// else if(score >= 50){
//     console.log("Average");
// }
// else{
//     console.log("Below Average");
// }

// 7. Assign let value = "". Use an if statement to check if the value 
// is an empty string and print "Value is empty".

// let value = "";
// if(value === ""){
//     console.log("Value is empty");
// }

// 9. Let n = 17. Use an if-else statement to print whether n is odd or even.

// let n = 17;
// if(n%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// 10. Given let temp;, use if-else to print "Undefined" if it is undefined, otherwise print "Defined".

// let temp;
// if(temp === undefined){
//     console.log("Undefined");
// }
// else{
//     console.log("Defined");
// }

// 11. Given let x = null;, use an if-else statement to print "Null Value" if x is null, "Defined" otherwise.

// let x = null;
// if(x === null){
//     console.log("Null Value");
// }
// else{
//     console.log("Defined");
// }


// 12. Let num = -42. Use if-else to print "Positive", "Negative", or "Zero" based on the value of num.

// let num = -42;
// if(num > 0){
//     console.log("Positive");
// }
// else if(num === 0){
//     console.log("Zero");
// }
// else{
//     console.log("Negative");
// }


// 13. Assign let month = "May". Check using if-else if the month is "March", "April", or "May".
//  Print a season name for each ("Spring", "Spring", "Spring"), otherwise print "Not Spring".

// let month = "May";

// if (month === "March") {
//   console.log("Spring");
// } else if (month === "April") {
//   console.log("Spring");
// } else if (month === "May") {
//   console.log("Spring");
// } else {
//   console.log("Not Spring");
// }

// 14. Use logical operators to check if let temp = 25; is between 20 and 30 (inclusive). 
// Print "Comfortable" if true, "Uncomfortable" otherwise.

// let temp = 25;
// if(temp > 20 && temp < 30){
//     console.log("Comfortable");
// }
// else{
//     console.log("Uncomfortable");
// }


// 15. Given let year = 2020;, check if the year is divisible by 4 and not by 100, 
// or divisible by 400, and print whether it is a leap year or not.

// let year = 2020;
// if(year%4==0 && year%100!==0 || year%400==0){
//     console.log("Leap Year");
// }
// else{
//     console.log("Not");
// }

// 16. Explain the output:

// let val;
// console.log(typeof val);         // undefined
// val = 5;
// console.log(typeof val);         // number
// val = "hello";                 
// console.log(typeof val);         // string

// 17. Assign let data = 0;. Use a ternary operator to print
//  "Falsy" if the value is falsy, "Truthy" otherwise.

// let data = 0;
// console.log(data ? "Truthy":"Falsy");          // 0 is a falsy value


// 18. Given let person = { name: "Asha" };, use typeof and print the result.

// let person = {name:"Asha"};
// console.log(typeof person);                // object


// 19. Assign let price = NaN;. Use if-else to print 
// "Not a Number" if price is NaN, else print "Valid Number".

// let price = NaN;
// if(isNaN(price)){
//     console.log("Not A Number");
// }
// else{
//     console.log("Valid Number");
// }


// 20. Let x = 15;. Use if-else-if to print:
// "Divisible by 3 and 5" if true
// "Divisible by 3" if true
// "Divisible by 5" if true
// "Not divisible by 3 or 5" otherwise

// let x = 21;
// if(x%3==0 && x%5==0){
//     console.log("Divisible by 3 & 5");
// }
// else if(x%3==0){
//     console.log("Divisible by 3");
// }
// else if(x%5==0){
//     console.log("Divisible by 5");
// }
// else{
//     console.log("Not Divisible by 3 and 5");
// }


// 21. Given let marks = 85;, use a nested if to:
// Print "Distinction" if marks >= 75,
// Inside the first if, check if marks >= 90 and print "Outstanding" as well.

// let marks = 85;
// if(marks >= 75){
//     console.log("Distinction");
//     if(marks >= 90){
//         console.log("Outstanding");
//     }
// }










