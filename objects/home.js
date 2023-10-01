// Objects in javascript
let student = {
  first: "Harsh",
  last: "Goyal",
  age: 21,
  height: 183,
  studentInfo: function () {
    return (
      this.first +
      " " +
      this.last +
      " is " +
      this.age +
      " years old and is " +
      this.height +
      " cm tall."
    );
  },
};
// console.log(student.first);
// console.log(student.last);
// console.log(student.age);
// console.log(student.height);
// student.first = "notHarsh"; //change value
// console.log(student.first);
// student.age++;
// console.log(student.age);
console.log(student.studentInfo());
