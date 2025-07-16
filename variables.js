// List all the primitive data types available in JavaScript. Give one example for each.

// 1. number

// let a = 23;
// console.log(a);

// let name = "Ajay";
// console.log(name);

// let isCorrect = true;
// console.log(isCorrect);

// let a;
// console.log(a);

// let data = null;
// console.log(data);

// userID = "AjayKumar";
// let id = Symbol(userID);
// console.log(id);

// let bigNumber = 9876543987634345n;
// console.log(bigNumber);

// var a = 10;          var     varibale is declared and assignes
// var a = 20;                  variable is redeclared and reassigned
// console.log(a); 

// let a = 30;          let   variable is declared and assigned
//  a = 50;                   variable cannot be redeclared but can be reassigned
// console.log(a);

// const a = 40;        const  variable is declared and assigned but cannot be redeclared and reassigned
// console.log(a);

// let a = 10;
// let b = "10";
// console.log(a==b);
// console.log(a===b);


//  1 . Literal Way



// let a = "ajay";
// console.log(typeof(a));

// let a = "10";
// console.log(typeof(a));

// let a;
// console.log(typeof(a));

// let a = null;
// console.log(typeof(a));

// let a = 234567654335665432n;
// console.log(typeof(a));

// let a = false;
// console.log(typeof(a));


// 2 . Constructor Way

// let a = new Number(10);
// console.log(a);                 [Number: 10]
// console.log(typeof a);          Object

// let name = new String("Ajay");
// console.log(typeof name);         Object

// let colors = ["red","green","blue"];
// console.log(colors[1]);

// let car = {
//     brand : "Neu",
//     company : "tata",
//     price : 1000000
// };
// console.log(car.company);
// console.log(car.price);

let student = {
    name : "Ajay",
    age : 21,
    passed : true
};
console.log(student);
