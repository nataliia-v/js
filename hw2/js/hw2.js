'use strict'

let someNumbers = [];
let sum = 0;
let userInput;

do {
  userInput = Number(prompt('Введите число'));
  someNumbers.push(userInput);
  console.log(someNumbers);
} while(userInput);

if (someNumbers.length  !==0){

  for (const iteration of someNumbers) {
    sum += iteration;
  }
}

console.log(`Общая сумма чисел равна ${sum}`)




