'use strict'

//////////////////////////////////////////          ЗАДАЧА 1            ////////////////////////////////////////

// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert

// let arr = ['a', 'b', 'c'];
// alert(arr)

//////////////////////////////////////////          ЗАДАЧА 2            ////////////////////////////////////////
// С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

// let arr = ['a', 'b', 'c'];
// console.log(arr[0],arr[1],arr[2] );
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//////////////////////////////////////////          ЗАДАЧА 3            ////////////////////////////////////////

// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

// let arr = ['a', 'b', 'c', 'd'];
//
// console.log(arr[0] + '+'+ arr[1] +', '+ arr[2] + '+'+ arr[3]);

//////////////////////////////////////////          ЗАДАЧА 4            ////////////////////////////////////////
// Создайте массив arr с элементами 2, 5, 3, 9.
// Умножьте первый элемент массива на второй, а третий элемент на четвертый.
//   Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
//
// let arr = [2, 5, 3, 9];
// let newArr1 = arr[0] * arr[1];
// let newArr2 = arr[2] * arr[3];
// let result = newArr1 + newArr2;
//
// console.log(result);

//////////////////////////////////////////          ЗАДАЧА 5            ////////////////////////////////////////

// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

//   let obj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
//
// console.log(obj.c);
// console.log(obj["c"]);

//////////////////////////////////////////          ЗАДАЧА 6            ////////////////////////////////////////

// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

//   let obj = {
//     Коля: '1000',
//     Вася: '500',
//     Петя: '200'
//     };
// console.log(obj.Петя, obj.Вася);

//////////////////////////////////////////          ЗАДАЧА 7            ////////////////////////////////////////

// Создайте объект с днями недели.
// Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
//
// let days = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5:"Friday",
//   6: "Saturday",
//   7: "Sunday"
// };
//
// console.log(days["7"]) ;

//////////////////////////////////////////          ЗАДАЧА 8            ////////////////////////////////////////

// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.

// let days = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5:"Friday",
//   6: "Saturday",
//   7: "Sunday"
// };
// let day = days["3"];
//
// console.log(day);

//////////////////////////////////////////          ЗАДАЧА 9            ////////////////////////////////////////

// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// let arrays = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
//
// console.log(arrays[1][0]);


//////////////////////////////////////////          ЗАДАЧА 10            ////////////////////////////////////////

// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'

// let obj = {
//   js:['jQuery', 'Angular'],
//   php: 'hello',
//   css: 'world'
// }
// console.log(obj['js'][0]);

//////////////////////////////////////////          ЗАДАЧА 11           ////////////////////////////////////////
// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'.
// Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски.
// Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

// let arrays = {
//   ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс' ],
//   en: ["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
// };
//
// console.log(arrays['ru'][0], arrays['en'][2]);

//////////////////////////////////////////          ЗАДАЧА 12           ////////////////////////////////////////

// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то),
// а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day.
// То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'

// let lang = arrays['en'];
// let day = lang[4];
// console.log(day);






