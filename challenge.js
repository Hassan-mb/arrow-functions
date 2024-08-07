//logger array Q1
// const loggerArray = testArray.forEach((element) => {
//   console.log(element);
// }); i have no clue why i thought this was necessery
// ill use a regular function

testArray = [2, 4, 5, 6, 7];

function loggerArray(array) {
  console.log(array);
}
loggerArray(testArray);
//toCelsius Q2
tempArray = [32, 77, 114.8, 140];

const toCelsius = tempArray.map((element) => {
  //C = (F - 32) * (5/9)
  element - (32 * 5) / 9;
  return element;
});
loggerArray(toCelsius);
//hottestDays Q3
temperatures = [15, 20, 30, 45, 50];

const hottestDays = temperatures.filter((element) => {
  const threshhold = 30;
  return element >= threshhold;
});

loggerArray(hottestDays);
//logHottestDays Q4
// const logHottestDays = tempArray.filter((element, threshhold) => {
//   threshhold = 40;
//   return (element >= threshhold) - (32 * 5) / 9;
// });
const logHottestDays = tempArray.filter((element) => {
  const threshold = 40; // Threshold in Celsius
  const celsiusTemp = ((element - 32) * 5) / 9; // Convert Fahrenheit to Celsius
  return celsiusTemp >= threshold;
});

loggerArray(logHottestDays);
