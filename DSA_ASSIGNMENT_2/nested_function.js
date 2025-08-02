
// 1. Write a function that contains another function inside it. The inner function should return 
// the square of a number. 

// function number(num){
//     function square(){
//         return num*num;
//     }
//     return square();
// }
// console.log(number(4));


// 2. Create a function which takes a number, and uses a nested function to check if the 
// number is positive, negative, or zero. 

// function number(num){
//     function check(){
//         if(num > 0){
//             console.log("Positive");
//         }
//         else if(num < 0){
//             console.log("Negative");
//         }
//         else{
//             console.log("Zero");
//         }
//     }
//     return check();
// }
// number(14);


// 3.  Write a function with a nested function to reverse a string. 

// function string_1(str){
//     empty_str = "";
//     function rev_str(){
//         for(let i=str.length-1;i>=0;i--){
//             empty_str += str[i];
//         }
//         console.log(empty_str);
//     }
//     return rev_str();
// }
// string_1("Hello");


// 4. Define a function that takes two numbers, adds them using an inner function, and returns 
// the result. 


// function add(a,b){
//     function inner(){
//         return a+b;
//     }
//     return inner();
// }
// console.log(add(5,6));


// 5. Write a function that returns another function which multiplies its input by 10. 

// function input(n){
//     function mul(){
//         return n*10;
//     }
//     return mul();
// }
// console.log(input(7));