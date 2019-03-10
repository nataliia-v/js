
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

//
// const summ = function() {
//   const max = arguments.length; //Количество элементов псевдомассива arguments
//   let total = 0;
//
//   for (let i = 0; i < max; i += 1) {
//     total += arguments[i];
//   }
//
//   return total;
// };
//
// console.log(`summ = ${sum(1, 2, 3, 4, 5)}`); // "sum = 15"




//
// const multiply = function (x, y) {
//   console.log ('x:', x);
//   console.log ('y:', y);
//   console.log('inside dks wlhl'); // определение функции
//
//   return x * y;
// };
//
// const z1 = multiply(4, 5); //вызов функции
// const z2 = multiply(2, 3);
//
// const z3 = multiply(z1, z2);
//
// console.log(z1);
// console.log(z2);
// console.log(z3);




//////////////////////////////////   КАК СЛЕПИТЬ ФУНКЦИЮ /////////////////////////////

// const  findNumbers = function (arr, value) {
//   const numbers = [];
//
//   for (let numb of arr) {
//     if (numb > value){
//       numbers.push(numb);
//     }
//   }
//   return numbers;
// }
//
//
//
//
// const arr1 = [3, 637, 12, 88, 3, 32, 18, 78 ,56, 43];
//
// const newArr1 = findNumbers(arr1, 15 );
// console.log(newArr1);
//
//
// //                                ВЫБИРАЕМ ЧИСЛА МЕНЬШЕ 100 (БЕЗ ФУНКЦИИ)
// // const newList = [];
// //
// // for (let number of arr1){
// //   if (number < 100) {
// //     newList.push(number);
// //   }
// // }
// // console.log(newList);
// // console.log(newList.length);
//
//
// const ages = [76, 34, 10, 32, 87, 12, 2, 7, 15, 45, 32];
//
// const newArr2 = findNumbers(ages, 45);
// console.log(newArr2);
//
// //
// // const selectedAges = [];
// //
// // for (let age of ages) {
// //   if (age < 45){
// //     selectedAges.push(age)
// //   }
// // }
// // console.log("The list of ages less then 45 years", selectedAges);
// // console.log(`The number of people with ages less 45 years: ${selectedAges.length}`);
// //
// // selectedAges.forEach(function(age, i, arr) {
// //   if (i % 2 === 1) {
// //     console.log(age);
// //   }
// // });


//            /////////////        КАК ПРОВЕРЯТЬ СВОЙ КОД        /////////////       //////////
// let a = 10;
// //
// // const fn = function (value) {
// //  const ifValue = Number(value) || a;
// //  if (!Number.isNaN(ifValue)) {
// //    console.log(ifValue + 10);
// //  }
// //  else {
// //    console.log('value is NaN')
// //  }
// // };
// //
// // fn();






////////////////////////////////    ФУНКЦИИ ОБРАТНОГО ВЫЗОВА        /////////////////////////////

// const printMessage = function (callback) {
//   const message = callback();
//   console.log( message );
// };
//
// const getMessage = function () {
//   return "Welcome to the jungle!";
// }
//
// printMessage(getMessage); // "Welcome to the jungle!"



// const map = (arr, callback) => {  // обьявляем функцию с аргументами arr (массивом), callback
//   const resultArr = []; // обьявляем пустой массив, в который будет записывать новые элементы
//
//   // перебирвем входящий при вызове функции массив записанный в аргумент arr.
//   // в теле цикла элементы пропускаем через функцию callback, обьявленную в аргументах
//   // и записываем результат callback-функции в переменную result.
//   // последним этапом цикла  - записываем result в новый массив, выходим из массива.
//   // последним этапом функции map будет возврат (return) переменной resultArr.
//
//   for(const element of arr) {
//     const result = callback(element);
//     resultArr.push(result);
//   }
//
//   return resultArr;
// };
//
// const double = val => val * 2;
//
// const triple = val => val * 3;
//
// const numbers = [1, 2, 3, 4, 5];
//
// const doubledNumbers = map(numbers, double);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//
// const tripledNumbers = map(numbers, triple);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]


/////////////////////////////////     ДОП ЗАДАНИЕ 1          /////////////////////////////////////

/*
  Напишите функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// const checkNumberType  = function (num) {
//   const even = num % 2 === 0;
//   const odd = num % 2 === 1; // или можно так написать: const odd = num % 2 !==0;
//
//   // return even ? 'even' : 'odd';  // это через тернарный оператор первый вариант
//
//   if (even === true){   // Это второй вариант
//     return('Even');
//   }
//   else {
//     return ('Odd')
//   }
//
// }
// console.log( checkNumberType(2) ); // 'Even'
//
// console.log( checkNumberType(46) ); // 'Even'
//
// console.log( checkNumberType(3) ); // 'Odd'
//
// console.log( checkNumberType(17) ); // 'Odd'


/////////////////////////////////     ДОП ЗАДАНИЕ 2          ////////////////////
/*
  Напишите функцию formatString(str)

  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/

// const formatString = function(str) {
//
//   if (str.length < 40){
//     return str;
//   }  else {
//     return (str.slice(0, 40) + '...')
//   }
// }
//
// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка
//
// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка
//
// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка
//
// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка

/////////////////////////////////     ДОП ЗАДАНИЕ 3          ////////////////////

/*
  Напишите функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale

  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/


// const checkForSpam = function (str) {
//
//   // if (str.includes("spam") || str.includes("sale")){ ////   ПЕРВЫЙ ВАРИАНТ
//   //   return str;
//   // } else {
//   //   return false;
//   // }
//
//   return (str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale"))  //// ВТОРОЙ ВАРИАНТ
// }
//
// // Вызовы функции для проверки //// БЫЛО В УСЛОВИИ
// console.log( checkForSpam('Latest technology news') ); // false
//
// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
//
// console.log( checkForSpam('Get best sale offers now!') ); // true
//
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


/////////////////////////////////     ДОП ЗАДАНИЕ 4          ////////////////////

/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/
//
// function getPx(str) {
//   if (str === String(str)) { //мой вариант
//     return (str.parseFloat);
//   } else {
//     return null;
//   }

  // if (typeof  str === 'string') { //вариант в классе
  //   return  Number.parseFloat(str);
  // }
  // else {
  //   return null;
  // }
//   // console.log();
// }
//
// // Вызовы функции для проверки ///В УСЛОВИИ
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null



/////////////////////////////////     ДОП ЗАДАНИЕ 5          ////////////////////

/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.

  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// function findLongestWord(str){
//
//   let newArr = str.split(" ");
//  console.log(newArr);
//  let maxWord = newArr[0];
//
//   for (let i = 1; i < newArr.length; i = i + 1) { ///let i=0  (отсчет начинается с 1, потому что  let maxWord = newArr[0] чтобы не сравнивать 0 с 0),i < new.Arr.length (выполняем проверку по всей длине масива, i = i + 1 (шаг перебирания);
//     if (newArr[i].length >= maxWord.length ) {
//       maxWord = newArr[i];
//     } else {
//       continue;
//     }
//   }
//   return maxWord;
// }
//
// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'
//
// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'
//
// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'



/////////////////////////////////     ДОП ЗАДАНИЕ 6          ////////////////////

/*
  Напишите функцию filterFromArray(arr), которая
  объявляет 1 параметр, исходный массив arr.

  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Функция возвращает новый массив, который содержит только
  те элементы исходного массива, которые не совпадают
  ни с одним из числовых аргументов.
*/



// const filterFromArray  = (...arr) => {
//
//   const newArr = arr [0];
//   arr.shift();
//   const newArr2 = arr;
//
//   console.log(newArr);
//   console.log(newArr2);
//
//   for (const number of newArr2){
//     if (newArr.includes(number)) {
//       newArr.splice(newArr.indexOf(number), 1, "tt");
//     }
//   }
//   console.log(newArr);
// };
//
// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]
//
// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]

  /////////////////////////////////ПРИМЕРЫ ТАРАСА////////////////////
//loops

// while

// 1) лічильник
// 2) Умова виконання циклу
// 3) Тіло циклу
// 4) Лічильник має змінюватися

// let counter = 0;
//
// let arr = [];
// while(counter < 5) {
//   let a = prompt('Enter number');
//   arr.push(a);
//   counter++;
//     // counter +=1;
//     // counter = counter + 1;
// }

// let counter = 10;
// let arr = [];
//
// do {
//   let a = prompt('Enter number');
//   arr.push(a);
//   counter++;
// } while (counter < 5)

// console.log(arr);
// let arr = [];
// for(let i = 0; i < 5; i++) {
//     let a = prompt('Enter n');
//     arr.push(+a);
// }
// console.log(arr);

// let number = 0;
// let arr = [];
// // // // поки номер меньше 3 виводь в консоль цей номер і потім збільшуй на 1
// // console.log(number < 3);
// while (number < 4) {
//     let userNumber = prompt('Enter number');
//     if(userNumber !== null && userNumber !== '') {
//       if (Number(userNumber) === 9) {
//         alert('9 це погане число');
//         number+=1;
//         continue;
//       } else {
//         arr.push(Number(userNumber));
//         number+=1;
//       }
//     }  else {
//       break;
//     }
// }
// console.log(userNumber);
// console.log(arr);

// // do while

// let number = 10;
// do {
//   console.log(number);
//   number++;
// }
// while (number < 5);

// while (number < 5) {
//   console.log(number);
//   number++;
// }
// console.log(condition);

//
// for
// особливість let i var
// let arr = [];
// for(let i = 0; i < 10; i+=1) {
//   let number = prompt('Enter number');
//   arr.push(number);
// }
// console.log(arr);

// let arr = [5, 10, 25, 68, 78, 95];
// let total = 0;
// // for(let i = 0; i <arr.length; i++) { // імперативний код
// //     total += arr[i];
// // }

// for (let el of arr) { // декларативний код
//     total += el;
// }
// console.log(total);

// let arrTenPrc = [];
// // for(let i = 0, max = arr.length; i < max; i+=1) {
// //   arrTenPrc.push(Number((arr[i]*1.1).toFixed(2)));
// // }
// // console.log(arrTenPrc);

// for(let element of arr) {
//   arrTenPrc.push(Number((element*1.1).toFixed(2)))
// }

// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.

// let number = prompt('Enter number');
// let arr = [];
// for (let i = 0; i < number; i++) {
//     let answer = prompt('Enter goods');
//     arr.push(answer);
// }
// console.log(arr);

// let arr = [];
// for(let i =0; i < Infinity; i++) {
//     let number = prompt('Enter number');
//     if(Number(number) === 9) {
//         break;
//     }
//     arr.push(number);
// }

// console.log(arr);

// let arr = [5,10,15,20,25,30,35,40,48,51];
//
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !==0) { // пропустит итерацию(повторение) если arr[i] будет не четным
//         continue;
//     }
//     console.log(arr[i]);
// }

//

// let empty = [];
// let teamNumber = +prompt('Введите количество команд');
// let teamAmount = +prompt('Какое количество играков?');

// сделаем цикл, который будет присваивать порядковый номер
// let i = 0;
// let first = [];
// for(let a = 1;a <= teamAmount;a++) {
//   first.push(a);
// }
// console.log(first);
// for(let i = 0; i < teamNumber;i++){
//     let first = [];
//     for(let a = 1;a <= teamAmount;a++) {
//        first.push(a+i*teamAmount);
//     }
//     console.log(first);
//     empty.push(first);
// }
// console.log(empty);
// console.log(empty[1][1][0]);


// Задача 1 . Выведите столбец чисел от 1 до 50.
//
// for (let i = 0; i <= 50; i++){ ////первый вариант
//   console.log(i);
// };
//
// let i = 0;//// второй вариант
// while ( i < 50){
// console.log(i);
// i += 1;
// }

/////////////////////////////////       ЗАДАЧА 4        ////////////////////

// Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
//   С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

// const obj = {
//   Минск :  'Беларусь',
//   Москва : 'Россия',
//   Киев : 'Украина',
// };
//
// for (const key in obj) {
//
//   console.log( `${key} это ${obj[key]}` );
// }


/////////////////////////////////       ЗАДАЧА 3.1       ////////////////////

// Выведите столбец чисел от 1 до 100
// let i = 0;
//
// while ( i < 100 ) {
//   i += 1;
//   console.log(i);
// }
//

/////////////////////////////////       ЗАДАЧА 3.2       ////////////////////

// Выведите столбец чисел от 11 до 33.

// let i = 10;
//
// while ( i < 33) {
//   i += 1;
//   console.log(i);
// }
/////////////////////////////////       ЗАДАЧА 3.3       ////////////////////

// Выведите столбец четных чисел в промежутке от 0 до 100.



// for (let i = 0; i < 100; i += 1 ) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
/////////////////////////////////       ЗАДАЧА 3.4       ////////////////////
// С помощью цикла найдите сумму чисел от 1 до 100.
// let sum = 0;
//
//
// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log (sum);

/////////////////////////////////       ЗАДАЧА 3.5       ////////////////////

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// numbers = [1, 2, "fgf", 4, 5];
//
// for (let i = 0; i < numbers.length; i += 1){
//   console.log(numbers[i]);
// }

/////////////////////////////////       ЗАДАЧА 3.6       ////////////////////
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
//
// let numbers = [1, 2, 3, 4, 5]; //вариант 1
// let sum = 0;
//
//  for (let i = 0; i <= numbers.length; i += 1) {
//    sum = sum + i;
//  }
// console.log(sum);
//
// let numbers = [1, 2, 3, 4, 5];//вариант 2
// let result;
// let sum = 0;
//
// for (const input of numbers) {
//   sum = sum + input;
//
// }
// console.log(sum);

/////////////////////////////////       ЗАДАЧА 3.7       ////////////////////


// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
//
//   var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

// let obj = {
//   green: 'зеленый',
//   red: 'красный',
//   blue: 'голубой'}
//
//   for (key  in obj) {
//     console.log()
//     console.log( `${key} : ${obj[key]}` )
//   }
/////////////////////////////////       ЗАДАЧА 3.8       ////////////////////

// 8Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите
// на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// let obj = {
//  Коля: '200',
//   Вася: '300',
//   Петя: '400'}
//   for (key in obj) {
//     console.log(`${key} - зарплата ${obj[key]} долларов`)
//   }


/////////////////////////////////       ЗАДАЧА 3.9       ////////////////////
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите
//   на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let  numbers = [ 2, 5, 9, 15, 0, 4];
//
// for (let input of numbers) {
//   if (input > 3 && input < 10){
//   console.log(input)
// }
// }

/////////////////////////////////       ЗАДАЧА 3.10       ////////////////////
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [2, -1, -3, 15, 0, 4];
// let sum = 0;

// for (let input of arr) {
//   if (input > 0){
//     sum = sum + input;
//   }
// }
// console.log(sum);
/////////////////////////////////       ЗАДАЧА 3.11       ////////////////////
// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте
//   есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!'
// и выйдите из цикла. Если нет - ничего делать не надо.

// let elements = [1, 2, 5, 9, 4, 13, 4, 10];
//
// for (let element in elements) { ///                   способ 1
//   if (element = 4){
//     console.log('Есть!');
//   }
//   break;
// };
//
// for (let element = 0; element = 4; element++) { ////  способ 2
//   console.log("Есть!");
//   break;
// }

/////////////////////////////////       ЗАДАЧА 3.12       ////////////////////
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива,
//   которые начинаются на цифру 1, 2 или 5.

// let arr = ['10', '20', '30', '50', '235', '3000']; // из решебника
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
//     console.log(arr[i]);
//   }
// }

// let arr = ['Коля', 'Вася', 'Волк', 'Огонь', 'Фрукт', 'Фанта'];   //придумала пример с буквами
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0] === 'Ф' || arr[i][0] === 'В' || arr[i][0] === 'К') {
//     console.log(arr[i]);
//   }
// }

/////////////////////////////////       ЗАДАЧА 3.13       ////////////////////

// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-

// let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// let str = '';
//
// for (let i = 0; i < elements.length; i++) {
//   str +=  '-' + elements[i] ;
//
// }
// console.log(str +'-')

/////////////////////////////////       ЗАДАЧА 3.14       ////////////////////

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//
// for (let i = 0; i < days.length; i++ ) {
//
//
//    if (i < 5 ){
//      document.write(days[i]);
//    }
//    if (i >= 5) {
//      document.write('<b>'+days[i] +'</b>');
//    }
// }


/////////////////////////////////       ЗАДАЧА 3.16       ////////////////////
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.

// let n = 1000;
// let num = 0;
//
// while (n > 50) {
//
//   num ++;
//   n /= 2
//   console.log(n);
//   console.log(num)
//
// }

// console.log(n)
// console.log(num)
//
// for (var n = 1000, num = 0; n > 50; n /= 2, num++);
// // alert(n);
//
// console.log(n)
// console.log(num)



//  do {
//    num = n / 2; {
//    while (n % 2 < 50);
//    console.log(num);
//  }
// }



///////////    ПОВТОРЕНИЕ       ///////

// const addition = function (a, b, c) { /////   FUNCTION EXPRESSION
//   return a + b + c;
// };
//
// let kfr = addition(4,5,7);
// console.log(kfr);
// console.log(addition(2,4,7)); 
    

// function add (a, b, c){  //  FUNCTION DECLARATION  (можно вызвать до обьявления в коде)
//   return a + b + c;
// }  
// const testDays = function (name = "User", days = "30") {
// //   return `Name - ${name}, used ${days} tests days`;
// // };
// //
// // let user1 = (testDays("Nadya", 12))
// // console.log(user1);


// TASK 1
/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// function checkNumberType(num){
//   if (num % 2 === 0){
//     return ("Even");
//   } else if (num % 2 === 1) {
//     return ("Odd");
//   }
//
// }
//
// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'
//
// console.log( checkNumberType(46) ); // 'Even'
// //
// console.log( checkNumberType(3) ); // 'Odd'
// //
// console.log( checkNumberType(17) ); // 'Odd'

/*
  Напишите функцию formatString(str)

  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/


// TASK 2
//
// function formatString(str) {
// // let lengthStr = str.length;
// //   return lengthStr;
//   if (str.length < 40){
//     return str;
//   } else {
//     let strLength = str.substr(0, 40);
//
//    return strLength + " ...";
//
// }}
//
// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка
// //
// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка
//
// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка
//
// console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
// // вернется форматированная строка



// TASK 3

// /*
//   Напишите функцию checkForSpam(str)
//
//   Функция принимает 1 параметр str - строку,
//   и проверять ее на содержание слов: spam и sale
//
//   Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false
//
//   PS: слова могут быть в произвольном регистре
// */
//
// function checkForSpam(str){
//   if (str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false
//
// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
//
// console.log( checkForSpam('Get best sale offers now!') ); // true
//
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// TASK 4

/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/
//
// function getPx(str){
//
//   if(typeof str === "string"){
//     return parseFloat(str);
//   }else {
//     return null;
//   }
// };
//
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


// // TASK 5
// /*
//   Создайте фукнцию findLongestWord(str),
//   которая получает аргументом произвольную строку и
//   возвращает самое длинное слово в этой строке.
//
//   Важное условие - в строке могут быть только пробелы,
//   символы букв и цифр!
// */


// function findLongestWord(str){
//   let arr  = str.split(" ");
//   let longestWord = arr[0]
//
//
//   for (let num of arr) {
//     if (num.length > longestWord.length) {
//       longestWord = num ;
//     }
//   }
//   return longestWord;
// }
//
// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'
//
// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'
//
// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'



// // TASK 6


/*
  Создайте функцию findLargestNumber(numbers),
  которая получает массив чисел numbers, и возвращает
  самое большое число в массиве.
*/

// function findLargestNumber(numbers){
//
//   let i = 0;
//    for (let num of numbers){
//      if(num > i ){
//        i = num ;
//      }
//    }
//   return i ;
// }
//
// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3
//
// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27
//
// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128

// // TASK 7

/*
  Есть массив уникальных чисел uniqueNumbers.

  Написать функцию, addUniqueNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers(...args){
//
//
//   for (let num of args) {
//     if (!uniqueNumbers.includes(num)) {
//      uniqueNumbers.push(num);
//     }
//   }
// return uniqueNumbers;
// }

//
// const uniqueNumbers = [3,6,3,19,1,12];
//
// function addUniqueNumbers(...arg){
//
//   for (num of arg){
//     if (!uniqueNumbers.includes(num)){
//       uniqueNumbers.push(num)
//     }
//   }
//   return num;
// }
//
// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]
//
// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]
//
// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


// // TASK 8

/*
  Напишите функцию filterFromArray(arr), которая
  объявляет 1 параметр, исходный массив arr.

  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Функция возвращает новый массив, который содержит только
  те элементы исходного массива, которые не совпадают
  ни с одним из числовых аргументов.
*/



// const filterFromArray = function(arr, ...arg) {
//   let newArr = arr;
//   for (let num of arg) {
//     if (newArr.includes(num)){
//       newArr.splice(newArr.indexOf(num), 1)
//     }
//   }
//   return newArr;
// };
//
// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]
//
// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]









       //                                ОБЬЕКТЫ
// // TASK 1

/*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
//
// user.mood = "happy";
// user.hobby = "javascript";
// delete user.premium;
//
// for (const key in user) {    //////////////  for in
//   console.log(`${key} : ${user[key]}`);
// }
//
// const keys = Object.keys(user); ////////// keys
// for (const key of keys) {
//   console.log(key, user[key] )
// }
//
// const entries = Object.entries(user); /////////  entries
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`)
// }

// // TASK 2

/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
//
// let maxNum  = 0;
// let winner;
// for (const key in tasksCompleted) {
//   if (tasksCompleted[key] >  maxNum){
//     maxNum = tasksCompleted[key];
//     winner = key;
//   }
// }
// console.log(`${winner} : ${maxNum}`)


// // TASK 3


/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// function countProps(obj){
//    return Object.keys(obj).length;
// };
//
//
// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0
//
// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// // TASK 4

/*
  Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/


// function isObjectEmpty(obj){

  // for (let i in obj){                   /// вариант 1
  //   if (obj.hasOwnProperty(i)) {
  //     return false;
  //   }else {
  //     return true;
  // }}

  // if (Object.keys(obj).length === 0){ ///   вариант 2
  //   return true;
  // } else {
  //   return false;
  // }

// }

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


// // TASK 5

/*
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

// function countTotalSalary(salaries){
//   let sum;
//   let array = Object.values(salaries);
//   for (let object of array) {
//     sum += object;
//   }
//   return sum;
// }
//
// // Вызовы функции для проверки
// console.log(countTotalSalary({})
// ); // 0
//
// console.log(countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330


// // TASK 6
/*
  Напишите функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа,
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// function getAllPropValues(arr, prop){
// //   let arrOfProps = [];
// //   for(let object of arr){
// //     if (object.hasOwnProperty(prop)){
// //       arrOfProps.push(object[prop]);
// //     }
// //   }
// //   return arrOfProps;
// // }
// //
// // const users = [
// //   { name: 'Poly', age: 7, mood: 'happy' },
// //   { name: 'Mango', age: 4, mood: 'blissful'},
// //   { name: 'Ajax', age: 3, mood: 'tired' }
// // ];
// //
// // // Вызовы функции для проверки
// // console.log(
// //   getAllPropValues(users, 'name')
// // ); // ['Poly', 'Mango', 'Ajax']
// //
// // console.log(
// //   getAllPropValues(users, 'mood')
// // ); // ['happy', 'blissful', 'tired']
// //
// // console.log(
// //   getAllPropValues(users, 'active')
// // ); // []


// // TASK 7

/*
  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать
  как аргументы при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/

// const User = function (name, isActive, age, friends){
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
// }
// this.getUserInfo = function(){
//   console.log(`User ${name} is ${age} years old and has ${age} friends`);
// };
//
// let user = new User ('Kate', true, 24, 43);
// console.log(user);

// // TASK 8

/*
  Расставьте отсутствующие this в методах объекта store
*/
//
// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//
//
//   addManager(manager) {
//     this.managers.push(manager);
//
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
//
//     this.managers.splice(idx, 1);
//
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
//
//     return this.products;
//   }
// }
//
// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
//
// store.removeManager('mango'); // ['poly', ajax', 'chelsey']
//
// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']


// // TASK 9

/*
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;
//
//   changePassword = function(newPassword) {
//     this.password = newPassword;
//
//     console.log(this.password);
//   };
//
//   getAccountInfo = function() {
//     console.log(`
//       Login: ${login},
//       Pass: ${password},
//       Type: ${type}
//     `);
//   };
// }
//
// const account = new Account("Mango", "qwe123", "premium");
//
// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'
//
// account.changePassword("asdzxc"); // 'asdzxc'
//
// account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
//
//















