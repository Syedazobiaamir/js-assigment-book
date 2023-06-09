// ARRAYS 
// Arrays | JAVASCRIPT
// Page 1 of 6
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:
// Arrays | JAVASCRIPT
// Page 2 of 6
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// Arrays | JAVASCRIPT
// Page 4 of 6
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
// Arrays | JAVASCRIPT
// Page 5 of 6
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
// Arrays | JAVASCRIPT
// Page 6 of 6
// 15. Write a program to store phone manufacturers (App


// 1 
// var empty =[];
// 2.
// var empty = new Array ();
// 3
// var string =[ "hello","morning","yeah"]
// 4.
// var number =[23,56,34,67,89];
// 5.
// var boolean =["true","false"];
// 6.
// var mixed = ["hello",34,"true",56];
// 7.
// var education = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"  ];
// document.write("Qualification"+"<br>");
// document.write("1) SSC"+"<br>");
// document.write("2) HSC"+"<br>");
// document.write("3) BCS"+"<br>");
// document.write("4) BS"+"<br>");
// document.write("5) BCOM"+"<br>");
// document.write("6) MS"+"<br>");
// document.write("7) M.PHIL"+"<br>");
// document.write("8) PHD"+"<br>");


// var std = ["micheal","jhon","tony"];
// var score = ["320","230","480"];
// var percentage = [
//  (score[0]/500*100),
//  (score[1]/500*100),
//  (score[2]/500*100),

// ];

// document.write("score of "+std[0] +"is" +score[0]+ "percentage:"+percentage[0]+"%"+"<br>");
// document.write("score of "+std[1] +"is" +score[1]+ "percentage:"+percentage[1]+"%"+"<br>");
// document.write("score of "+std[2] +"is" +score[2]+ "percentage:"+percentage[2]+"%"+"<br>");



9.
// var color =["red","blue","purple","black","grey"];
// document.write(color +"<br>");
// var user = prompt("which colour you want to put");
// color.unshift(user);
// document.write(color +"<br>");
// var user = prompt("which colour you want to add in the last of array");
// color.push(user);
// document.write(color + "<br>"+"<br>");
// color.unshift("yellow","skyblue");


// document.write(color + "<br>"+"<br>");
// color.shift([0]);
// document.write(color + "<br>"+"<br>");
// color.pop([]);
// document.write(color + "<br>"+"<br>");
// var user = parseInt(prompt("which index he/she wants to add a color a color"));
// var addColor = prompt("enter the color to add")
// color.splice(user,0,addColor);
// document.write(color + "<br>"+"<br>");

// var user = prompt("Enter the index from which you want to delete color(s):");
// var deleteCount = prompt("Enter the number of colors you want to delete:");
// colors.splice(user, deleteCount);
// document.write(color + "<br>"+"<br>");

10.
// var scores = [320,230,480,120];
// document.write("score of student"+ scores + "<br>");
// scores.sort();
// document.write("ordered scores of student"+scores +"<br>" );

11.
// var cities =["karachi","lahore","islamabad","quetta","peshawer"];
// var selected =[];
// document.write("cities list"+"<br> <br>"+cities +"<br>");
//  selected= cities.slice(2,4);
// document.write("selected cities"+"<br> <br>"+selected +"<br>");
12.
// var arr = ["This","is","my","cat"];
// document.write("Array"+"<br>" + arr+"<br>");
// var string =arr.join(" ");
// document.write("string"+"<br>" + string+"<br>");

13.
// Create a new array
// 14.
// Store phone manufacturers in an array
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Display dropdown/select menu using document.write()
// document.write('<select>');
// document.write('<option value="' + manufacturers[0] + '">' + manufacturers[0] + '</option>');
// document.write('<option value="' + manufacturers[1] + '">' + manufacturers[1] + '</option>');
// document.write('<option value="' + manufacturers[2] + '">' + manufacturers[2] + '</option>');
// document.write('<option value="' + manufacturers[3] + '">' + manufacturers[3] + '</option>');
// document.write('<option value="' + manufacturers[4] + '">' + manufacturers[4] + '</option>');
// document.write('<option value="' + manufacturers[5] + '">' + manufacturers[5] + '</option>');
// document.write('</select>');
