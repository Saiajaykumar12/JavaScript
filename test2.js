// 1. Write a program that takes a number as input and prints 
// "Even" if the number is even, otherwise prints "Odd".

// let a = 21;
// if(a / 2 == 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// 2. Given a student's marks (0-100), write a script that outputs the grade:
// Marks ≥90: "A"
// Marks ≥80: "B"
// Marks ≥70: "C"
// Marks ≥60: "D"
// Marks <60: "F"

// let marks = 75;

// if(marks >= 90){
//     console.log("A");
// }
// else if(marks >= 80){
//     console.log("B");
// }
// else if(marks >= 70){
//     console.log("C");
// }
// else if(marks >= 60){
//     console.log("D");
// }
// else if(marks < 60){
//     console.log("F");
// }
// else{
//     console.log("Enter the positive integer");
// }

// 3. Ask the user for a year. Print "Leap Year" if it is a leap year, otherwise print "Not a Leap Year".

// let year = 1997;
// if(year%4===0 && year%100!=0 || year%400===0){
//     console.log("Leap year");
// }
// else{
//     console.log("Not a leap year");
// }

// 4. Write code to input three numbers and print the largest using nested if-else.

// let c = 30;
// let d = 40;
// let e = 25;
// if(c > d && c > e){
//     console.log("c");
// }
// else if(d > c && d > e){
//     console.log("d");
// }
// else{
//     console.log("e");
// }

// 5. Implement a calculator using switch that takes 
// two numbers and an operator (+, -, *, /) as input and prints the result.

// let f = 30;
// let g = 7;
// let operator = "division";
// switch(operator){
//     case "addition": 
//     console.log(f + g);
//     break;
//     case "subtraction": 
//     console.log(f - g);
//     break;
//     case "multiplication":
//         console.log(f * g);
//         break;
//     case "division":
//         console.log(parseFloat(f / g));
//         break;
//     default : console.log("Enter the correct operator");
// }

// 6. Use a for loop to print the multiplication table of a given number up to 10.

// let h = 3;
// for(let i=1;i<=10;i++){
//     console.log(h+"X"+i+" ="+h*i);
// }

// 7. Input a word and count how many vowels and consonants it contains. Print both counts. 

// let word = "Education";
// word = word.toLowerCase();

// let vowels = "aeiou";
// let vowelcount = 0;
// let consonantscount = 0;

// for(let i=0;i<=word.length;i++){
//     let char = word[i];
//     if(char>='a' && char<='z'){
//         if(vowels.includes(char)){
//             vowelcount++;
//         }
//         else{
//             consonantscount++;
//         }
//     }
// }
// console.log("Vowels "+vowelcount);
// console.log("Consonants "+consonantscount);

// 8. Using a for loop from 1 to 50, print:
// "Fizz" for numbers divisible by 3,
// "Buzz" for numbers divisible by 5,
// "FizzBuzz" for numbers divisible by both 3 and 5,
// The number itself otherwise.



// for(let i=1;i<=50;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }


// 9. Input the month number (1-12) and print the number of days in the month using a switch statement.

// let month = 2;

// switch(month){
//     case 1:
//         console.log("30 days");
//         break;
//     case 2:
//         console.log("28/29 days");
//         break; 
//     case 3:
//         console.log("31 days");
//         break;
//     case 4:
//         console.log("30 days");
//         break;
//     case 5:
//         console.log("31 days");
//         break;
//     case 6:
//         console.log("30 days");
//         break;
//     case 7:
//         console.log("31 days");
//         break;
//     case 8:
//         console.log("31 days");
//         break;
//     case 9:
//         console.log("30 days");
//         break;
//     case 10:
//         console.log("31 days");
//         break;
//     case 11:
//         console.log("30 days");
//         break;
//     case 12:
//         console.log("31 days");
//         break;   
// }

// 10. Write a program that uses a for loop to find the sum 
// of all even numbers between 1 and 100 (inclusive) and print the result.

// let sum = 0;
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum = sum+i;
//     }
// }
// console.log(sum);
