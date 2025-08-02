
// 1.  Write a function that takes a string and returns the number of vowels in it. 


// function vow(str){
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//         count++;
//     }
//     }
//     return count;
// }
// console.log(vow("aeioutre"));


// 2. Create a function that converts a string to uppercase.

// function to_upper(word){
//     word = word.toUpperCase();
//     return word;
// }
// console.log(to_upper("ajay"));


// 3. Write a function that checks if a string is a palindrome (reads the same forwards and 
// backwards). 

// function isPalindrome(str){
//     let start = 0;
//     let end = str.length-1;
//     str = str.toUpperCase();
//     while(start < end){
//         if(str[start] !== str[end]){
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }
// console.log(isPalindrome("mada"));


// 4. Define a function that joins two strings with a space and returns the new string. 

// function joinStrings(str1, str2){
//     return str1.concat(" ",str2);
// }
// console.log(joinStrings("Ajay","Kumar"));


// 5.  Write a function that counts the number of words in a given sentence.

// function countWords(sentence){
//     let words = sentence.trim().split(/\s+/);
//     return words.length;
// }
// console.log(countWords("My name is Sai Ajay kumar"));