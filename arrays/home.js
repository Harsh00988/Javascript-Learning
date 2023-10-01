// Arrays in Javascript

let fruits = ["banana", "apple", "orange", "pineapples"];

fruits = new Array("banana", "apple", "orange", "pineapple");

console.log(fruits[1]); // access value at index 1

fruits[0] = "pear";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//  Array Common methods
console.log("to string", fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push("blackberries"), fruits); //appends item at the end
console.log(fruits[fruits.length]);
fruits[fruits.length] = "grapes"; //same thing as push
console.log(fruits);
console.log(fruits.shift(), fruits); // removes first element
console.log(fruits.unshift("kiwi"), fruits); // add first element to an array

let vegetables = ["arparagus", "tomato", "broccoli"];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(
  // sorting in ascending order
  someNumbers.sort(function (a, b) {
    return a - b;
  })
);
console.log(
  // sorting in descending order
  someNumbers.sort(function (a, b) {
    return b - a;
  })
);

let emptyArray = new Array();

for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);
