
// // Arrays

// let arr = [1,2,3,4,5];
// console.log(arr);

// // push       pushes the element into the last index

// arr.push(6);
// console.log(arr);

// // pop       deletes the element from the last index

// arr.pop();
// console.log(arr);

// // shift()     removes the element in the first index

// arr.shift();
// console.log(arr);

// // unshift()    adds the element in the first index

// arr.unshift(1);
// console.log(arr);

// // splice      add element at any index
// // splice(Index, No.of values you want to delete, Value)

// arr.splice(3,0,6);
// console.log(arr);

// // splice    remove element at any index
// // splice(index, No of values you want to delete from that index)


// arr.splice(1,2);
// console.log(arr);


// // slice()    Extract a portion of an array
// // slice(index, No of values you want to slice)


// let fruits = ["apple","banana","orange","pineapple","grapes"];
// let c = fruits.slice(1,2);
// console.log(c);

// // concat()

// let arr2 = [5,6,7];
// let arr3 = [8,9,10];
// console.log(arr2.concat(arr3));

// // includes()

// console.log(fruits.includes("banana"));     // true
// console.log(fruits.includes("Papaya"));     // flase

// // indexOf

// console.log(fruits.indexOf("banana"));

// // forEach()
// syntax forEach(referance variable,index)

let fruits = ["apple","banana","orange","pineapple","grapes"];
fruits.forEach(function(fruit,i){
    console.log(i,fruit);
});

// map()     It won't change the old array
// syntax   variable_name.(ref_var => #logic)

let num1 = [1,2,3,4,5,6,7];
let doubled = console.log(num1.map(n => n*2));

// filter()
// Don't need of creating new array
// syntax    var_name.filter(ref_var => #logic);

console.log(num1.filter(n => n%2 ===0));


// reduce()     
// creating new array 
// syntax    variable_name.reduce(result_varible,ref_variable)

let sum = num1.reduce((t,n) => t+n ,0);
console.log(sum);

// find()    finds the first matching element
let found = num1.find(n => n>4);
console.log(found);