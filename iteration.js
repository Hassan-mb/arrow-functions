//task 1 Q1
const numbers = [10, 13, 20, 25, 38, 35, 40];

let greaterthan25 = numbers.filter((number) => {
  return number > 5;
});

console.log(greaterthan25);
//rask 1 Q2
let DivBy5 = numbers.filter((number) => {
  return number % 5 == 0;
});

console.log(DivBy5);

//task 2 Q3
let squared = numbers.map((number) => {
  return number ** 2;
});

console.log(squared);

//task 2 Q4
let multBy2 = numbers.map((number) => {
  return number * 2;
});

console.log(multBy2);

//task 3 Q5
let greaterOrEqualTo20 = numbers.filter((number) => {
  return number > 20;
});

console.log(greaterOrEqualTo20);

let squareGreaterThan20 = greaterOrEqualTo20.map((number) => {
  return number ** 2;
});

console.log(squareGreaterThan20);

//task 3 Q6
let DivBy5Jr = numbers.filter((number) => {
  return number % 5 == 0;
});

console.log(DivBy5Jr);

let multiJr = DivBy5Jr.map((number) => {
  return number * 2;
});

console.log(multiJr);
