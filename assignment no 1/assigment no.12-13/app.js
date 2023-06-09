// IF…ELSE & ELSE IF STATEMENT, 
// TESTING SET OF CONDITIONS 
// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION | JAVASCRIPT
// Page 1 of 3
// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.
// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION | JAVASCRIPT
// Page 2 of 3
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


// var character = prompt("Enter a character:");

// var charCode = character.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//   console.log("The given input is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//   console.log("The given input is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//   console.log("The given input is a lowercase letter.");
// } else {
//   console.log("Invalid input. Please enter a valid character.");
// }

// var number1 = parseInt(prompt("Enter the first integer:"));
// var number2 = parseInt(prompt("Enter the second integer:"));

// if (number1 > number2) {
//   console.log("The larger number is: " + number1);
// } else if (number2 > number1) {
//   console.log("The larger number is: " + number2);
// } else {
//   console.log("Both numbers are equal.");
// }
// Prompt the user for a number


// var number = parseFloat(prompt("Enter a number:"));

// // Check if the number is positive, negative, or zero
// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }
 
// var user = prompt("enter a character");
// user = user.toLowerCase();
// if (user === "i" || user === "e"|| user ==="i" || user === "o"|| user === "u"){
//     document.write(user+"True");
// }
// else{
//     document.write(user +"false");
// }

// Step 1: Store the correct password in a variable
// var correctPassword = "1234";

// // Step 2: Ask the user to enter their password
// var userPassword = prompt("Enter your password:");

// // Step 3: Validate the passwords
// if (userPassword === "") {
//   console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password.");
// } else {
//   console.log("Incorrect password");
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }




// var user = parseInt(prompt("ENTER THE TIMES"));
// var time = 1900;
// if(user>=0000 && user<1200){
//     alert("good morning");
// }
// // else if(time>= 1200 && time < 1700){
// //     alert("good afternoon");
// // } else if(time>=1700 && time < 2100){
// //     alert("good evening");

// // }else if(time>=2100 && time <= 2359){
// //     alert("good night");

// // }










