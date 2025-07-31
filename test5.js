
// 1. Write a program to reverse a given string. Example: Input: "hello" Output: "olleh"

// let str = "hello";
// let revstr = "";
// for(let i=str.length-1;i>=0;i--){
//     revstr += str[i];
// }
// console.log(revstr);


// 2. Count the number of vowels (a, e, i, o, u) in a given string.

// let vowels = "aeiou";
// let word = "Education";
// word = word.toLowerCase();
// let count = 0;
// for(let i=0;i<=word.length-1;i++){
//     if(vowels.includes(word[i])){
//         count++;
//     }
// }
// console.log(count);


// 3. Write a function to check if a string is a palindrome (reads the same backward as forward). 

// let word = "Madam";
// word = word.toLowerCase();
// let start = 0;
// let end = word.length-1;
// let isPalindrome = true;

// while(start<end){
//     if(word[start !== word[end]]){
//         isPalindrome = false;
//         break;
//     }
//     start++;
//     end--;
// }
// if(isPalindrome){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not palindrome");
// }


// 4.  Find the Maximum Element in an Array: 
// Given an array of numbers, find and print the largest value.

// let arr = [34,45,76,92,22];
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);

// console.log(Math.max(...arr));

// 5. Write a program to calculate the sum of all numbers in an array.

// let arr1 = [23,76,54,12,13];
// let sum = 0;
// for(let i=0;i<arr1.length;i++){
//     sum += arr1[i];
// }
// console.log(sum);

// 6. Remove Duplicates from an Array: 
// Given an array, remove duplicate elements and print the new array. 

// let arr2 = [1,2,1,3,4,2,3,1];
// let newarr = [];
// for(let i=0;i<arr2.length;i++){
//     if(!newarr.includes(arr2[i])){
//         newarr.push(arr2[i]);
//     }
//  }
// console.log(newarr);

// 7. Concatenate Two Arrays: 
// Write code to concatenate two arrays and show the combined result. 

// let arr3 = [1,2,3,4];
// let arr4 = [5,6,7,8];
// let res_arr = arr3.concat(arr4);
// console.log(res_arr);


// 8. Find Index of an Element in Array: 
// Given an array and an element, print the index position of the element if it exists, otherwise print -1. 

// function findIndex(myarr , element){
//     let index = myarr.indexOf(element);
//     if(index !== -1){
//         console.log(index);
//     }
//     else{
//         console.log("-1");
//     }
// }
// let myarr = [1,2,3,4,5];
// findIndex(myarr , 1);
// findIndex(myarr , 8);


// 9. Sort an Array in Ascending Order: 
// Write a function to sort a given array of numbers in ascending order. 

// let arr5 = [5,2,1,3,6,5,7];
// console.log(arr5.sort());

// let arr5 = [1,4,7,2,4,5,8,3];
// let n = arr5.length;
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr5[j]>arr5[j+1]){
//             let temp = arr5[j];
//             arr5[j] = arr5[j+1];
//             arr5[j+1] = temp;
//         }
//     }
//     console.log(arr5);
// }

// 10. Replace Character in a String: 
// Write a program to replace all occurrences of a specified character with another character in a string.

// let word = "Hello";
// word = word.replaceAll("l","*");
// console.log(word);