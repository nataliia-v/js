'use strict'


//////////////////////////////////////////          ЗАДАЧА 1            ////////////////////////////////////////

// Создайте переменную num и присвойте ей значение 3.
// Выведите значение этой переменной на экран с помощью метода alert.

// let num = 3;
// alert(num);

//////////////////////////////////////////          ЗАДАЧА 2            ////////////////////////////////////////

// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления)

// let  a = 10;
// let b = 2;
//
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);

//////////////////////////////////////////          ЗАДАЧА 3            ////////////////////////////////////////

// Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на
// экран значение переменной result.
// let c = 15;
// let d  = 2;
// let result = c * 2;
//
// console.log(result);

//////////////////////////////////////////          ЗАДАЧА 4            ////////////////////////////////////////

// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму

// let a = 10;
// let b = 2;
// let c = 5;
//
// console.log(a + b + c);

//////////////////////////////////////////          ЗАДАЧА 5            ////////////////////////////////////////

// Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
//   Затем создайте переменную d, присвойте ей значение 7.
// Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result

// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
//
// let result = c + d;
// console.log(result);

//////////////////////////////////////////          ЗАДАЧА 6            ////////////////////////////////////////

// Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.

// let str  = 'Hello, World!';
// console.log(str);

//////////////////////////////////////////          ЗАДАЧА 7            ////////////////////////////////////////

// Создайте переменные str1='Привет, ' и str2='Мир!'.
// С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

// let str1 = 'Hello, ';
// let str2 = 'World!';
//
// console.log(str1 + str2);

//////////////////////////////////////////          ЗАДАЧА 8            ////////////////////////////////////////

// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
//
// let name = "Nataliia";
//
// console.log('Hello, ' + name + '!');

//////////////////////////////////////////          ЗАДАЧА 9            ////////////////////////////////////////

// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'. Показать решение.
//
// let age = 23;
//  console.log('Me ' + age + ' years');

//////////////////////////////////////////          ЗАДАЧА 10            ////////////////////////////////////////

// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
// Показать решение.

// let input = prompt('Input your name');
// alert('Your name ' + input)

//////////////////////////////////////////          ЗАДАЧА 11            ////////////////////////////////////////

// Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

// let number = prompt('Please, input number :');
//
// alert(number * number);

//////////////////////////////////////////          ЗАДАЧА 12            ////////////////////////////////////////

// Создайте переменную str и присвойте ей значение 'abcde'.
  // Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'
//
// let str = 'abcde';
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);

//////////////////////////////////////////          ЗАДАЧА 13            ////////////////////////////////////////

// Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

// let num = '12345';
// console.log(num[0] * num[1] * num[2] * num[3] * num[4]);

//////////////////////////////////////////          ЗАДАЧА 14            ////////////////////////////////////////

// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
//
//  let secondsHour = 60 * 60; //секунд часе
// console.log(secondsHour);
//  let secondsDay = secondsHour * 24; //секунд в сутках
// console.log(secondsDay);
//  let secondsMonth = secondsDay * 30;//секунд в месяце
// console.log(secondsMonth);


//////////////////////////////////////////          ЗАДАЧА 15            ////////////////////////////////////////

// Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'
// let hours = 19;
// let minutes = 44;
// let seconds = 36;
// console.log(hours +':'+ minutes + ':'+ seconds)

//////////////////////////////////////////          ЗАДАЧА 16            ////////////////////////////////////////

// Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

// let number = 4;
//
// let number2 = number * number;
// console.log(number2);

//////////////////////////////////////////          ЗАДАЧА 17            ////////////////////////////////////////

// Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=.
// Количество строк кода при этом не должно измениться.
// let num = 47;
// // num = num + 7;
// num += 7;
// // num = num - 18;
// num -= 18;
// // num = num * 10;
// num *= 10;
// // num = num / 15;
// num /= 15;
// //
// //
// console.log(num);



//////////////////////////////////////////          ЗАДАЧА 18            ////////////////////////////////////////

// Переделайте этот код так, чтобы в нем использовались операции ++ и --.
// Количество строк кода при этом не должно измениться.

// let num = 10;
// // num = num + 1;
// // num = num + 1;
// // num = num - 1;
// num ++;
// num ++;
// num --;
// console.log(num);

//1


// for (let i = 1;  i <= 100; i++) {
//   console.log(i);
// }

//2

// for (let i = 11; i <=33; i++){
//   console.log(i)
// }

//3

// for (let i = 1; i <=100; i++){
//   if (i%2 === 0) {
//     console.log(i);
//   }
// }

//4


// task 1

// Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.

// let inputs = document.querySelectorAll(".cls");
// let btn = document.getElementById("task");
// let sum = document.getElementById("sum");
//
// inputs = Array.from(inputs);
//
// let sumFnk = () => {
//   inputs.forEach(input => {
//     sum.value = +sum.value + (+input.value);
//   })
// };
//
// console.log(inputs);
//
// btn.addEventListener("click", sumFnk);

// task 2
// Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и
// запишите их сумму в абзац с id="result".

// let inputs = document.querySelectorAll(".num");
// const btn = document.getElementById("task");
// let result = document.getElementById("result");
// inputs = Array.from(inputs);
//
// let sumFunk = () => {
// let a = inputs.reduce((acc, input) => acc + (+input.value), 0);
//   result.textContent = a;
// };
//
// btn.addEventListener("click", sumFunk);

// task 3
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

let input = document.getElementById("num");
let result = document.getElementById("result");

let sum = ()=>{
  result.textContent = input.value;
};


.addEventListener('blur', sum);


