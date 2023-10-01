/* Functions in js
1. Create a function 
2. Call the function 
*/

//Create
function fun() {
  console.log("this is my function");
}

//Call
fun();

/* Let's create a function that takes in a name and 
says hello followed by your name

Ex:
Name : "Harsh"
Return : "Hello Harsh"
*/

function greet(yourName) {
  var result = "Hello" + " " + yourName; // String concatenation
  console.log(result);
}

var name = prompt("What is your name?");
greet(name);

// How do arguments work in functions?
// How do we add 2 numbers in a function

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

sumNumbers("10", "20");
