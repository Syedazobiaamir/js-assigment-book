// STRING METHODS 
// String Methods | JAVASCRIPT
// Page 1 of 9
// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.
// String Methods | JAVASCRIPT
// Page 2 of 9
// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
// 6. Repeat Q1 using string concat() method.
// String Methods | JAVASCRIPT
// Page 3 of 9
// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.
// String Methods | JAVASCRIPT
// Page 4 of 9
// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.
// 11. Write a program that takes user input. Convert and 
// show the input in title case.
// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// String Methods | JAVASCRIPT
// Page 5 of 9
// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:
// String Methods | JAVASCRIPT
// Page 6 of 9
// String Methods | JAVASCRIPT
// Page 7 of 9
// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// String Methods | JAVASCRIPT
// Page 8 of 9
// 17. Write a program to display the last character of a user 
// input.
// String Methods | JAVASCRIPT
// Pag18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.




1.
// var first = prompt("enter first name");
// var last = prompt("enter last name ");
// var fullName = first + last;
// alert("Hello good morning "+fullName);

2
// var  userInput = prompt("Enter your favorite mobile phone model:");
// document.write("my favourite phone is"+userInput + "<br>"+"<br>");
// var inputLength = userInput.length;

// document.write("Length of user input: " + inputLength);

3.
// var word = "Pakistani";
// document.write(word);
// var searchLetter = "n";
// var index = word.indexOf(searchLetter);

// document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);

// 4.
// var word = "Hello World";
// document.write(word);
// var searchLetter = "l";
// var index = word.lastIndexOf(searchLetter);

// document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);

5.
//  var word = "pakistani";
// document.write(word);
// var index = "3";
// var character = word.charAt(index);

// document.write("character at index 3 is : " + character);
6.
// var first = prompt("enter first name");
// var last = prompt("enter last name ");
// var fullName=first.concat(last);
// alert("Hello good morning "+fullName);
7.
// var word = "Hyderabad";
// var searchStr = "Hyder";
// var replacementStr = "Islam";
// var modifiedWord = word.replace(searchStr, replacementStr);

// document.write("Modified word: " + modifiedWord);
8.
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var replace = message.replace(/and/g ,"$");
// document.write(replace);
9.
// var stringNumber = "472";
// document.write("value:"+"<br>"+stringNumber+"<br>"+typeof(stringNumber)+ "<br>");

//     var number = Number(stringNumber);

//     document.write("value:"+"<br>"+number+"<br>"+typeof(number)+ "<br>");
10.
// var userInput = prompt("enter any string");
// document.write(userInput +"<br>");
// var upperCase = userInput.toUpperCase();
// document.write(upperCase + "<br>");
11.
// Taking user input
// var userInput = prompt("Enter a string:");

// // Converting the input to title case
// var titleCaseInput = convertToTitleCase(userInput);

// // Displaying the title case input
// document.write("<h3>Title Case Conversion</h3>");
// document.write("<p>Input: " + userInput + "</p>");
// document.write("<p>Title Case Input: " + titleCaseInput + "</p>");
// // Function to convert string to title case
// function convertToTitleCase(str) {
//     return str.toLowerCase().replace(/^(.)|\s+(.)/g, function($1) {
//       return $1.toUpperCase();
//     });
//   }


12.
// Variable num

// var  num = 35.36;

// // Convert num to string and remove the dot
// var numString = num.toString().replace(".", "");

// // Display the result
// document.write("<h3>Dot Removal</h3>");
// document.write("<p>Original Number: " + num + "</p>");
// document.write("<p>Converted String: " + numString + "</p>");

13.


    // // Taking user input
    // var username = prompt("Enter a username:");

    // // Checking for special symbols
    // var containsSpecialSymbol = false;
    // for (var i = 0; i < username.length; i++) {
    //   var charCode = username.charCodeAt(i);
    //   if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    //     containsSpecialSymbol = true;
    //     break;
    //   }
    // }

    // // Validating the username
    // if (containsSpecialSymbol) {
    //   alert("Please enter a valid username without special symbols [@ . , !]");
    // } else {
    //   alert("Username: " + username);
    // }
14.
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(item) {
//   for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === item.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }

// const userInput = prompt("Enter an item to search for:");
// if (searchItem(userInput)) {
//   console.log("The item is found in the list.");
// } else {
//   console.log("The item is not found in the list.");
// }
15.
// function validatePassword(password) {
//     if (password.length < 6) {
//       return false;
//     }
//     if (!isNaN(password[0])) {
//       return false;
//     }
//     let containsAlpha = false;
//     let containsDigit = false;
//     for (let i = 0; i < password.length; i++) {
//       const charCode = password.charCodeAt(i);
//       if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         containsAlpha = true;
//       } else if (charCode >= 48 && charCode <= 57) {
//         containsDigit = true;
//       }
//     }
//     if (!(containsAlpha && containsDigit)) {
//       return false;
//     }
//     return true;
//   }
  
//   while (true) {
//     const userPassword = prompt("Enter a password:");
//     if (validatePassword(userPassword)) {
//       console.log("Valid password.");
//       break;
//     } else {
//       console.log("Invalid password. Please enter a valid password.");
//     }
//   }
  17.
//   var university = "University of Karachi";
// var array = university.split(" ");

// for (var i = 0; i < array.length; i++) {
//   document.write("Element " + i + ": " + array[i] + "<br>");
// }

18.
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// alert("The last character is: " + lastCharacter);


19.
// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToSearch = "the";

// // Convert the sentence to lowercase for case-insensitive search
// var lowercaseSentence = sentence.toLowerCase();

// // Split the sentence into an array of words
// var words = lowercaseSentence.split(" ");

// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === wordToSearch) {
//     count++;
//   }
// }

// console.log("Number of occurrences of '" + wordToSearch + "': " + count);





    