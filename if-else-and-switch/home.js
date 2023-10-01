// Conditionals, Control flows (if else)
// 18-35 is my target demographic
// && AND
// || OR

// let age = prompt("How old are you?");

let age = 45;

if (age >= 18 && age <= 35) {
  console.log("target demo");
} else {
  console.log("not my target audience");
}

//Switch statements
// differentiate between weekday and weekend

switch (6) {
  case 0:
    text = "weekend";
    break;
  case 5:
    text = "weekend";
    break;
  case 6:
    text = "weekend";
    break;
  default:
    text = "weekday";
}

console.log(text);
