// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array 
// representing the following matrix:
// 3. Write a program to print numeric counting from 1 to 10.
// Arrays and loop | JAVASCRIPT
// Page 2 of 7
// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.
// Arrays and loop | JAVASCRIPT
// Page 3 of 7
// Arrays and loop | JAVASCRIPT
// Page 4 of 7
// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]
// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// Arrays and loop | JAVASCRIPT
// Page 5 of 7
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// Arrays and loop | JAVASCRIPT
// Page 6 of 7
// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].
// Arrays and loop | JAVAS

1.
// Declare and initialize an empty multidimensional array
// var multiArray = [[]];
// 2.
// // Declare and initialize a multidimensional array representing a matrix
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
3.
// Print numeric counting from 1 to 10
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  4.
//   // Take input from the user for the table number and length
// var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Print the multiplication table
// console.log("Multiplication Table of " + tableNumber + " up to length " + tableLength + ":");

// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   console.log(tableNumber + " x " + i + " = " + result);
// }
5.
// 

        // // Counting
        // var counting = "Counting: ";
        // for (var i = 1; i <= 15; i++) {
        //     counting += i;
        //     if (i !== 15) {
        //         counting += ", ";
        //     }
        // }

        // // Reverse Counting
        // var reverseCounting = "Reverse Counting: ";
        // for (var j = 10; j >= 1; j--) {
        //     reverseCounting += j;
            
        // }

        // // Even
        // var even = "Even: ";
        // for (var k = 0; k <= 20; k += 2) {
        //     even += k;
            
        // }

        // // Odd
        // var odd = "Odd: ";
        // for (var l = 1; l <= 19; l += 2) {
        //     odd += l;
            
        //     }
        

        // // Series
        // var series = "Series: ";
        // for (var m = 2; m <= 20; m += 2) {
        //     series += m + "k";
           
        // }

        // // Displaying the series in the browser
        // document.write(counting + "<br>");
        // document.write(reverseCounting + "<br>");
        // document.write(even + "<br>");
        // document.write(odd + "<br>");
        // document.write(series + "<br>");

5.

        // var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

        // for (let i = 0; i < fruits.length; i++) {
        //   document.write(fruits[i]+"<br>");
        //   // document.write("element at index 0 is"+fruits[0])
        // }
        // document.write("element at index 0 is"+fruits[0] + "<br>");
        // document.write("element at index 1 is"+fruits[1] +"<br>");
        // document.write("element at index 2 is"+fruits[2] +"<br>");
        // document.write("element at index 3is"+fruits[3] + "<br>");
        // document.write("element at index 4 is"+fruits[4]  +"<br>");
7.
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
//       var user = prompt("welcome to ABC backery what do you want to order sir /mam");
//       var index =[];

//       for (var i = 0 ;i<a.length; i++){
//         if(a[i] === user){
//           index = i;
//           console.log(user + " is available at index"+index);
//         }
//         else {
//           console.log("we are sorry "+user+"is not available in our bakery")
//         }
//       } 


     
      
9.
// var A = [24, 53, 78, 91, 12];
// document.write("array item <br>"+ A +"<br>");

// let largest = A[0];  // Assume the first element is the smallest

// for (let i = 0; i < A.length; i++) {
//   if (A[i] >largest) {
//     largest = A[i];
//   }
// }

// document.write("The largest number in the array is:", largest);

// 10.
// var A = [24, 53, 78, 91, 12];
// document.write("array item <br>"+ A +"<br>");

// let smallest = A[0];  // Assume the first element is the smallest

// for (let i = 0; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// document.write("The largest number in the array is:", smallest);


11.
// for (var i = 5;i <=100;i+=5){
//   document.write(i);
// }
