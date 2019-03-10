
// 'use strict'
//
// // 30) Возведите 2 в 10 степень. Результат запишите в переменную st.
// let a = 2;
// let pow = Math.pow(a,10);
// console.log('pow = ', pow);

// 31) Найдите квадратный корень из 245.
// let number = 245;
// let sqrt = Math.sqrt(number);
// console.log(pow);

// 32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))

// let number = 379;
// let sqrt = Math.sqrt(number);
// console.log(sqrt.toFixed(0));
// console.log(sqrt.toFixed(1));
// console.log(sqrt.toFixed(2));

// 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны
//
// let number = 587;
//
// let sqrt = Math.sqrt(number);
// console.log(sqrt);
// console.log(Math.ceil(sqrt));
// console.log(Math.floor(sqrt));

// 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// let a = 20;
// let b = 3;
// let numb = a / b;
// let ostatok = a % b;
//
// if (a % b === 0){
//   console.log("Делится, result: ", numb );
// } else {
//   console.log("Делится с остатком, result: ", ostatok);
// };

// 35) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let arr = [4, -2, 5, 19, -130, 0, 10]
//
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));


// 35) Выведите на экран случайное целое число от 1 до 100.
// let numb = (Math.random()*100).toFixed(0); ///вариант 1
// console.log(numb);
//
// let min;
// let max;
// let random = min + Math.random()*(max+1-min);/////  формула из гугла
// random = Math.floor(random);

// // 36) Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.
//  let inputNumbers = Number(prompt("Input numbers from 1 to 3"));
// if (inputNumbers <= 3 && inputNumbers > 0){
//   alert(inputNumbers);
// }else {
//   alert("введите верное число")
// };

// 37 ) Необходимо написать программу, где бы пользователю предлагалось ввести число  1.
// Если пользователь ввёл число 1, программа должна вывести сообщение:
// "Вы ввели число 1". Если пользователь ввёл другое число, программа должна вывести такое сообщение:
// "Вы ввели число не равное 1"

// let inputNumber = Number(prompt("Input number 1"));
//  if (inputNumber ===1) {
//    alert(`вы ввели число ${inputNumber}`)
//  } else {alert("вы ввели число не равное 1")}

// 38 ) Пользователь вводит число.
// Проверить число на четное или не четное и вывести в консоль результат проверки.

// let inputNumber = Number(prompt("Input number"));
// inputNumber % 2 === 0 ? alert("четное") : alert("не четное");

// 41) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью;

// let arr = [88.88, 55, 78, 66.66];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//   sum += arr[i]
// }
//
// console.log(parseFloat(sum));
// console.log(parseInt(sum));

// 42) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
// то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
// Решите задачу через switch-case.
//
// let inputNumb = Number(prompt("Enter number"));
// switch (inputNumb) {
//   case 1: {
//     alert('зима');
//     break;
//   }
//   case 2: {
//     alert('весна');
//     break;
//   }
//   case 3: {
//     alert('лето');
//     break;
//   }
//   case 4: {
//     alert('осень');
//     break;
//   }
//   default:
//     alert("Not a season")
// }

//   43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно',
//   иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = Number(prompt("Enter number"));
//
// if (a > 0 && a < 5) {
//   alert("True")
// } else {
//   alert("False")
// }

//   44)  Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
//   иначе поделите ее на 10. Выведите новое значение переменной на экран.
//   Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 0;
// let result;
//
// if (a === 0 || a === 2){
//  alert(a += 7) ;
// } else {
//   let numb = a/10;
//   alert(numb);
// }
//   45)  Если переменная a равна или меньше 1, а переменная b больше или равна 3,
//   то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
//   Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = 1;
// let b = 3;
//
// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }


//   46)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
//   то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 25;
// let b = 4;
//
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   alert("True")
// }else {
//   alert("False")
// };

//   47) В переменной day лежит какое-то число из интервала от 1 до 31.
//   Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = 45;
// if (day >=0 && day <= 10){
//   alert("First decada")
// }else if(day >=11 && day <= 20){
//   alert("Second decada");
// } else if(day >=21 && day <= 30){
//   alert("Third decada");
// }else {
//   alert("Enter true day");
// };


//   48)  В переменной month лежит какое-то число из интервала от 1 до 12.
//   Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// let month = 15;
// if (month >=1 && month <=2){
//   console.log("Winter");
// } else if (month >= 3 && month <=5){
//   console.log("Spring");
// } else if(month >= 6 && month <= 8){
//   console.log("Summer");
// } else if(month >= 7 && month <= 11) {
//   console.log("Fall");
// }
// else if (month === 12){
//   console.log("Winter");
// }


// *На цикл в цикле.*

// 12) Выведите на экран таблицу умножения (как в школьной тетради).

// for (let i =1; i <=9; i++){
//   for (let j = 1; j <= 9; j++){
//     console.log(`${i} * ${j}`);
//   }
// }

// 13) Заполните массив следующим образом: в первый элемент запишите '1',
// во второй '22', в третий '333' и так далее. Показать решение.


//
// let b = [];
//
// for (let i = 1; i <= 10; i++){
//  let a = '';
//   for (let j = 1; j <= i; j++) {
//     a = a + String(i);
//   }
//   b.push(a);
// }
// console.log(b);


// 14) Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
//

// let str = [];
//
// for (let i = 1; i<=5; i++){
//   let string = '';
//   for (let j = 1; j <=i; j++) {
//     string = string + 'x';
//   }
//   // console.log(string);
//   str.push(string);
// }
// console.log(str);
//
// 15) Дан двухмерный массив с числами, например
// [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.
//
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i of arr){
//   for (let j of i ){
//     sum +=j;
//   }
// }
// console.log(sum);

// 16) Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
//
// for(let i of arr){
//   for (let j of i) {
//     for (let p of j ) {
//       sum +=p;
//     }
//   }
// }
// console.log(sum);
//   *Задачи на функции работы с массивами в JavaScript*
//
// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
//
// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// let sum = a.concat(b);
// console.log(sum);

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);

// 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let a = [1, 2, 3];
// let b = [4, 5, 6];
//
// let sum = a.concat(b);
// console.log(sum);
//
// // 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
//
// let arr = [1, 2, 3];
// let newArr = arr.reverse();
// console.log(newArr);

// 5) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4,5,6);
// console.log(arr);

// 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq'];
// console.log(arr[0]);

// 8) Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq'];
// let lenth = arr[arr.length - 1];
//
// console.log(lenth);

// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0,3);
// console.log(newArr);

// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// 13) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// 14) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// 15)  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// 16)   Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// 17)   Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
// 18)   Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. (edited)


//////////////////                     МОДУЛЬ 4  - ОБЬЕКТЫ                  /////////////////

// 1. Создайте функцию isEmpty(obj), которая возвращает true,
// если в объекте нет свойств и false – если хоть одно свойство есть.

// const isEmpty  = function (obj) {
//   if(Object.keys(obj).length === 0){
//     return "true";
//   }else {
//     return "false";
//   }
// };
//  let objject = {
//    fgff: "fff"
//  };
//
//  console.log(isEmpty(objject));

// 2. Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
  // Если объект пустой, то результат должен быть 0.

// let salaries = {
//   Вася: 100,
//   Петя: 300,
//   Даша: 250
// };
//
// function getSum (obj) {
//
//   let sum = 0;
//   for (let key in obj) {
//     sum = sum + obj[key];
//   }
//   return sum;
// }
//
// console.log(getSum(salaries));

//3.  Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника,
// у которого самая большая зарплата.
//
//   Если объект пустой, то пусть он выводит «нет сотрудников».

// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
//
// function bigSalary (obj) {
//   let max = 0;
//   let name = '';
//   for (let key in obj ){
//     if (obj[key] > max){
//       max = obj[key];
//       name = key;
//     }
//   }
//   return name;
// }
//
// console.log(bigSalary(salaries));

// ... ваш код выведет "Петя"


// 4. Умножьте численные свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
//   let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// // P.S. Для проверки на число используйте функцию:
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }
//
// function multiplyNumeric(obj, callback ){
//   for (let key in obj) {
//     if (callback(obj[key])){
//       obj[key] = obj[key] * 2;
//     }
//   }
//   return obj;
// }
//   console.log(multiplyNumeric(menu, isNumeric));

// 5. /*
//   Напиши скрипт который определит и выведет в консоль
//   имя сотрудника который выполнил больше всех задач.
//   Сотрудники и кол-во выполненых задач содержатся
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
//
//
// for (let keys in tasksCompleted){
//   if( tasksCompleted[keys] > max){
//     best = keys;
//     max = tasksCompleted[keys];
//   }
// }
// console.log(best, ':', max);

// function name (obj) {    ////   работает, но не выводит
//   let max = 0;
//   let namePersone = '';
//
//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       namePersone = key;
//     }
//   }
//   return namePersone;
//   return max;
// }
// name(tasksCompleted);



// доп 3
/*
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

//  function countProps(obj){
//    let numbers = 0;
//    for (let key in obj){
//     (numbers++);
//    }
//    return numbers;
//  }
//
// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0
//
// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// доп 4

/*
  Напиши функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// function isObjectEmpty(obj) {
//   let numbers = 0;
//   for (key in obj){
//     (numbers++)
//   } if (numbers === 0){
//     return true
//   } else {
//     return false
//   }
// }
//
// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true
//
// console.log(
//   isObjectEmpty({a: 1})
// ); // false
//
// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// доп 5
/*
  Напиши функцию countTotalSalary(salaries).

  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.

  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// function countTotalSalary(salaries){
//   let sum = 0;
//
//   for (let key in salaries){
//     sum = sum + salaries[key];
//   }
//   return sum;
// }
// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0
//
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330


// допка 6

/*
  Напиши функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа.
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
//
// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];
//
// function getAllPropValues(arr, prop) {
//
//   let newArr = [];
//
//   for (let obj of arr){
//     if (obj.hasOwnProperty(prop)){
//       newArr.push(obj[prop]);
//     }
//   }
//   return newArr;
// }
//
// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']
//
// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']
//
// console.log(
//   getAllPropValues(users, 'active')
// ); // []


// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
//
// const { name, ...rest} = hotel;
//
// console.log(name); // "Resort Hotel"
// console.log(rest); // {stars: 5, capacity: 100}
// console.log(hotel);


// if (obj[prop] === prop) {
//   // console.log('obj[prop]')
//   props = obj[prop];
// }
alert( +"Infinity" )