// var a = 10;
// document.write("result "+"<br>");
// document.write("the value of a is :"+a+"<br>"+"<br>");
// ++a;
// document.write("the value of ++a is :"+a+"<br>");
// document.write(" now the value of a is :"+a+"<br>"+"<br>");

// document.write("the value of a++ is :"+a+"<br>");
// a++;
// document.write(" now the value of a is :"+a+"<br>"+"<br>");
// --a;
// document.write("the value of --a is :"+a+"<br>");
// document.write(" now the value of a is :"+a+"<br>"+"<br>");

// document.write("the value of a-- is :"+a+"<br>");
// a--;
// document.write(" now the value of a is :"+a+"<br>"+"<br>");


// 


// Get user input
// var userInput =prompt("Enter a number:");
// var number = parseInt(userInput);
// if (isNaN(number)){
//     number=5;
// }
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i=1;i<=10;i++){
//     document.write(number +"X"+i+"="+number*i+"<br>");
// }

// Prompt the user to enter their name
// var name = prompt("Please enter your name:");

// // Greet the user
// alert("Hello, " + name + "! Welcome!");

// Prompt the user to enter the names of three subjects
// var subject1 = prompt("Enter the name of Subject 1:");
// var subject2 = prompt("Enter the name of Subject 2:");
// var subject3 = prompt("Enter the name of Subject 3:");

// // Total marks for each subject
// var totalMarks = 100;

// // Prompt the user to enter the obtained marks for each subject
// var obtainedMarks1 = parseFloat(prompt("Enter the obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseFloat(prompt("Enter the obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter the obtained marks for " + subject3 + ":"));

// // Calculate the total marks
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// // Calculate the percentage
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Display the result in a table format
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");

// // Prompt the user to enter a city name
// var cityName = prompt("Enter a city name:");

// // Check if the city name is "Karachi"
// if (cityName.toLowerCase() === "karachi") {
//   // Display the welcome message for Karachi
//   document.write("Welcome to the city of lights");
// }

// var gender = prompt("ENTER YOUR GENDER");
// if (gender.toLowerCase()=== "male"){
//     document.write("GOOD MORNING SIR");
// }
// else (gender.toLowerCase()=== "female"); {
//     document.write("GOOD MORNING mam");
// }

// var trafficSignal=prompt("enter traffic signal color");
// if (trafficSignal.toLowerCase()==="red"){
//     document.write("MUST STOP");
// }
// else if(trafficSignal.toLowerCase()==="yellow"){
//     document.write("ready to move");
// }
// else if(trafficSignal.toLowerCase()==="green"){
//     document.write("move now");
// }

// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (remainingFuel < 0.25) {
//   document.write("Please refill the fuel in your car");
// }


//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //this condition will not display
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");

// }
// ////this condition will not display
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// //this condition will not display
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }



// // Prompt the user to enter marks obtained in three subjects and total marks
// var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));
// document.write("total marks:"+totalMarks+"<br>");

// // Calculate the total marks obtained
// var totalObtainedMarks = subject1 + subject2 + subject3;
// document.write("total mark obtained:"+totalObtainedMarks+"<br>"+"<br>");

// // Calculate the percentage
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// // Determine the grade based on the percentage
// if (percentage >= 90) {
//    document.write("grade:"+"A+"+"<br>"+"remarks:"+"excellant"+"<br>"); 
// } else if (percentage >= 80) {
//     document.write("grade:"+"A"+"<br>"+"remarks:"+"good"+"<br>");
// } else if (percentage >= 70) {
//     document.write("grade:"+"B"+"<br>"+"remarks:"+"you need to improve"+"<br>");
// }
//    else {
//     document.write("grade:"+"Fail"+"<br>"+"remarks:"+"sorry"+"<br>");

// }








// // // Generate a random secret number between 1 and 10
// // var secretNumber = Math.floor(Math.random() * 10) + 1;

// // // Prompt the user to enter their guess
// // var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // if (guess === secretNumber) {
// //   document.write("Bingo! Correct answer.");
// // } else if (guess === secretNumber + 1) {
// //   document.write("Close enough to the correct answer.");
// // } 

// Prompt the user to enter a number
// var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
// if (number % 3 === 0) {
//   document.write(number + " is divisible by 3.");
// } else {
//   document.write(number + " is not divisible by 3.");
// }
// var userInput = parseInt(prompt("ENTER A NUMBER"));
// if (userInput % 2 ===0){
//     document.write(userInput+"is an even no.");

// }else{
//     document.write(userInput+"is an odd no.");
// }


// var temperature =parseInt(prompt("Enter temperature"))
//     if (temperature > 40) {
//       console.log("It is too hot outside.");
//     } else if (temperature > 30) {
//       console.log("The Weather today is Normal.");
//     } else if (temperature > 20) {
//       console.log("Today’s Weather is cool.");
//     } else if (temperature > 10) {
//       console.log("OMG! Today’s weather is so Cool.");
//     } 
      
// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;

// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     result = firstNumber / secondNumber;
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
// } else {
//     result = "Invalid operation";
// }

// alert("Result: " + result);


  
  
  









