'use strict'

// const showTestDays = function (name = 'Пользователь', days = 30) {
//   return ` ${name}, использовано ${days} тестовых дня`;
// }
//
// console.log( showTestDays('Екатерина', 10) );
// //имя Екатерина6 использовано 10 тестовых дня
//
// console.log( showTestDays('Михаил') );
// //имя Михаил использовано 30 тестовых дня
//
// console.log( showTestDays() );
// //Имя пользователь, использовано 30 тестовых дней


const summ = function() {
  const max = arguments.length; //Количество элементов псевдомассива arguments
  let total = 0;

  for (let i = 0; i < max; i += 1) {
    total += arguments[i];
  }

  return total;
};

console.log(`summ = ${sum(1, 2, 3, 4, 5)}`); // "sum = 15"








