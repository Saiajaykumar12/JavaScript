
// // 1.  Write code to create a student object with properties: name, age, and grade.

// let student = {
//     name : "Ajay",
//     age : 21,
//     grade : "A"
// };

// console.log(student);

// // 2. Given the student object, print the value of the name property using dot notation.

// console.log(student.name);


// // 3. Add a new property email to the student object and give it any value

// student.email = "dgfg@gmail.com";
// console.log(student);

// // 4. Update the grade property of the student object to "A+".

// student.grade = "A+";
// console.log(student);

// // 5.  Remove the age property from the student object. 

// delete student.age;
// console.log(student);

// // 6. Add a method greet to the student object that prints "Hello, my name is [name]".

// function greet(){
//     console.log(`Hello, my name is ${student.name}`);
// }
// greet();

// // 7. Modify the greet method to use this.name instead of directly using the property 
// // name. 

// let student = {
//      name : "Ajay",
//      age : 21,
//      grade : "A",
//      greet : function(){
//         console.log(`Hello, my name is ${this.name}`);
//      }
// }
// student.greet();

// 8. Loop Through Object Properties 
// o Write a for...in loop that prints all keys and values in the student object. 

// for(let key in student){
//     if(typeof student[key] !== "function"){
//         console.log(`${key} : ${student[key]}`);
//     }
// }

// 9. Use the hasOwnProperty method to check if the object has a property named grade.

// if(student.hasOwnProperty("grad")){
//     console.log(`yes`);
// }
// else{
//     console.log(`no`);
// }

// 10. Create an array called students containing three different student objects. Print the 
// name of each student using a loop.

// let students = [
//     {name : "Ajay",age : 21,grade : "A"},
//     {name : "Kumar",age : 21,grade : "A"},
//     {name : "Sai",age : 21,grade : "A"}
// ];
// for(let i in students){
//     console.log(`${students[i].name}`)
// }
// console.log(students);
// for(let key in students){
//     console.log(Object.keys(students[key]));
// }

let employee = {
    eid : 1,
    esal : 60000,
    ename : "AJay"
};
// console.log(employee);

// for(let i in employee){
//     console.log(employee[i]);
// }

console.log(Object.keys(employee));
console.log(Object.values(employee))
console.log(Object.entries(employee))



