// task 1
const greet = (name) => {
  return `hello ${name}`;
};

console.log(greet("hassan"));

//task 2
const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(2, 4));

// task 3
const square = (number) => {
  return number ** 2;
};

console.log(square(3));

//challenge
// const squareArray = (array) => {
//   ret = [];

//   for (var i = 0, len = array.length; i < len; i++) {
//     array[i] = array[i] ** 2;
//     ret.push(array[i]);
//   }

//   return ret;
// };

// console.log(squareArray([1, 3, 5]));

//challenge using map
numbers = [1, 2, 3, 4, 5];

let squaredArray = numbers.map((number) => {
  return number * number;
});

console.log(squaredArray);
