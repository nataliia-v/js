
'use strict'
/////////////////////////////////////////         MAP
// const numbers = [2, 6, 8, 1, 3, 5];
//
// const newNumbers = numbers.filter(x=> x > 2);
// const newNumbers2 = numbers.filter(x => x < 8);
// console.log(newNumbers2);


// const numbers = [2, 6, 8, 1, 3, 5];
//
// const newNumbers = numbers.filter(x => x > 2);
// console.log(newNumbers);

// const double = value => (value * 2);

// const userDb = [
//   {id: "000", name: 'mango', posts: 218, isActive: true},
//   {id: "001", name: 'poly', posts: 20, isActive: false},
//   {id: "003", name: 'ajax', posts: 512, isActive: true},
//   {id: "004", name: 'chelsey', posts: 114, isActive: false},
// ];
//
// const getUserName = user => user.name;
//
// console.log(getUserName(userDb[0]));
//
//
// //инверсия
// const toggleUserActiveState =  (user) => ({
//     ...user,
//     isActive: !user.isActive,
// });
// const map = (arr, callback) => {
//   const resultArray = [];
//   for (let i = 0, max = arr.length; i < max; i +=1) {
//     const element = arr[i];
//     const item = callback(element);
//     resultArray.push(item);
//   }
//   return resultArray;
// }
//
// const toggleUsers = map(userDb, toggleUserActiveState)
//
//
//
// // все предидущее можно записать вот так:
// const fnUserName = userDb.map(user.name);

// const changedUsers = userDb.map(function (user) {
//   console.log(user);
//   if (user.name === 'poly') {
//     return{
//       ...user,
//       name: "dhdhdh"
//     }
//   }
//   return user;
// });
//
// console.log(changedUsers);

/////////////////////////////////////////         FILTER

// const numbers = [2, 6, 8, 1, 3, 5];
//
// // const filtr = function (arr,callback) {
// //   const resultArray = [];
// //   for (let i = 0, max = arr.length; i < max; i +=1){
// //
// //   }
// // return resultArray;
// // };
//
// const greaterThenFive = value => value > 5;
// const filterNumbers = filter(numbers,greaterThenFive);



// // в классе
//
//
// const users = [
//   {
//     id: '121asdasda',
//     name: 'Gleb',
//     sex: 'male',
//     position: 'manager',
//     salery: 400,
//   },
//   {
//     id: '121a232asda',
//     name: 'Alin',
//     sex: 'female',
//     position: 'solider',
//     salery: 390,
//   },
//   {
//     id: '11241asda',
//     name: 'Adam',
//     sex: 'male',
//     position: 'developer',
//     salery: 420,
//   },
//   {
//     id: '94421asda',
//     name: 'Funk',
//     sex: 'female',
//     position: 'developer',
//     salery: 150,
//   },
//   {
//     id: '77221asda',
//     name: 'Gooliver',
//     sex: 'male',
//     position: 'gooliver',
//     salery: 230,
//   }
// ];
//
// //   ищем юзера по id
// //
// // for (const elem of users){
// //   if (elem.id === "121a232asda") {
// //     console.log(elem);
// //   }
// // }
//
// // ищем с помощью функции
//
// // function findById (id) {
// //   for (const elem of users){
// //     if (elem.id === id){
// //       return elem;
// //     }
// //   }
// // }
// //
// // console.log(findById("94421asda"));
//
//
// //добавляем callback / action
//
// function findBy (id, action) {
//   for (let elem of users){
//     let find = action(id, elem);
//     if (find !==null){
//       return find;
//     }
//   }
// }
//
// const byId = (id, elem) => elem.id === id ? elem : null;
// const byName = (name, elem) => elem.name === name ? elem : null;
//
// console.log(findBy("94421asda"),byId)


// const map = function (arr, change, currency, pdv) {
//   let newArr = []
//   for (let num of arr){
//     newArr.push(change(num.salery, currency, pdv));
//   }
//   return newArr;
// };
//
// const changeSalarey = (salery, currency, pdv) => Math.round(salery * currency * (1 - pdv / 100));
//
// console.log(map(users, changeSalarey, 27.1, 20));




///  /////////////////////////////////         ЗАДАНИЕ 1         ///////////////////////////////////////



/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//   const result = [];
//
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] > num) {
//       result.push(arr[i]);
//     }
//   }
//
//   return result;
// };

// const findGreaterThan = (num, arr) => arr.filter(i => i > num);  ////////вывели новый
//
// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

/*
  Функция multiplyBy принимает два аргумента - число и массив.
  Возвращает массив все значения которого умножены на число.
*/
// const multiplyBy = (num, arr) => {
//   let result = [];
//
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     result.push(arr[i] * num);
//   }
//
//   return result;
// };

// const multiplyBy = (num, arr) =>  arr.map(i => i * num);/////вывели новый
// //
// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
//
// /*
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// function summAllNumbers(...args) {
//   let accumulator = 0;
//
//   for (let i = 0, max = args.length; i < max; i += 1) {
//     accumulator += args[i];
//   }
//
//   return accumulator;
// }
//
// const summAllNumbers = (...args) => args.reduce((acc, value) => acc + value, 0);  ///  вывели новый
//
// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

/*
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// const findEvery = (num, arr) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] < num) {
//       return false;
//     }
//   }
//   return true;
// };

// const findEvery = (num, arr) => arr.every( i => num  <= i);  ///  вывели новый
// //
// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true




//////////////////////////////////////         ЗАДАНИЕ 2         ///////////////////////////////////////



// /*
//   Напишите функию getPropValues(arr, prop), принимающую
//   параметры arr - массив, и prop - имя ключа в объекте.
//
//   Функция должна возвращать массив всех значений этого ключа из arr.
//
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */
//
// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
//
// const getPropValues = (arr, prop) => { return arr.map((i) => i[prop]) };
//
//
// // Вызовы функции для проверки
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//
// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//
// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]



//////////////////////////////////////         ЗАДАНИЕ 3         ///////////////////////////////////////

// /*
//   Напишите функцию setGuestState(guests, period), где
//   guests - массив гостей, period - кол-во дней после
//   которого считается что гость не активен.
//
//   Если значение поля inactiveDays болше чем period,
//   поставить для isActive значение false.
//
//   Если же значение inactiveDays меньше чем period,
//   поставить для isActive значение true
//
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */
//
// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];
//
//
//
// const setGuestState = (guests, period) => guests.map((x) => ({
//   ...x,
//   isActive: x.inactiveDays < period
// }));
// const setGuestState = (users, period) =>       ////////   ВАСЯ
//   users.map(
//     obj =>
//       obj.inactiveDays < period
//         ? { ...obj, isActive: true }
//         : { ...obj, isActive: false }
//   );
//
//
// // Вызовы функции для проверки
// console.log(
//   setGuestState(guests, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
//
// console.log(
//   setGuestState(guests, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
//
// console.log(
//   setGuestState(guests, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


//////////////////////////////////////         ЗАДАНИЕ 4         ///////////////////////////////////////
/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/


//
// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
//
// const getActiveGuests = (arr) => arr.filter(i => i.isActive === true)
//
// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax



//////////////////////////////////////         ЗАДАНИЕ 5         ///////////////////////////////////////



/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
//
// const getGuestsOlderThan = (arr, num) => arr.filter( (i) => i.age > num)
//
// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
//
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
//
// console.log(getGuestsOlderThan(guests, 55)); // []


//////////////////////////////////////         ЗАДАНИЕ 6         ///////////////////////////////////////

/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 }
// ];
//
// const getGuestById = (arr, num) => arr.find ((i) => i.id === num);  ///find вернет обьект
//
// // Вызовы функции для проверки
// console.log(
//   getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}
//
// console.log(
//   getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}
//
// console.log(
//   getGuestById(guests, 5)
// ); // undefined


//////////////////////////////////////         ЗАДАНИЕ 7         ///////////////////////////////////////

/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/
// const order = {
//   bread: 10,
//   apples: 25,
//   chicken: 60,
//   milk: 15,
//   cheese: 40
// };
//
// const obj = Object.values(order);
// const redOr = (arr) => arr.reduce((acc, num) => acc + num, 0);
// console.log(redOr(obj)); // 150


//////////////////////////////////////         ЗАДАНИЕ 8         ///////////////////////////////////////

/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };
//
// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };
//
// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 3
// };
//
// const getTotalPrice =  function (products, order) {
//   const arr = Object.keys(order);
//   return arr.reduce((acc, elem) => acc + order[elem] * products[elem], 0);
// };
//
// // Вызовы функции для проверки
// console.log(getTotalPrice(products, orderA)); // 140
//
// console.log(getTotalPrice(products, orderB)); // 130


//////////////////////////////////////         ЗАДАНИЕ 9         ///////////////////////////////////////


/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/

// const guestsA = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true }
// ];
//
// const guestsB = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: true },
//   { name: "Ajax", isActive: true }
// ];
//
// let allGuestsActive = (guests) => guests.every(elem => elem.isActive)
//
// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false
//
// console.log(allGuestsActive(guestsB)); // true





////////////////////////////////// ДЗШКА////////////////////////////////
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     phone: '+1 (848) 556-2344',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     phone: '+1 (855) 582-2464',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     phone: '+1 (814) 593-3825',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     phone: '+1 (909) 547-2687',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     phone: '+1 (956) 512-2693',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     phone: '+1 (876) 411-2433',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     phone: '+1 (979) 504-2554',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// /*
//  * Используя массив (users) объектов пользователей, напишите функции которые с помощью
//  * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
//  */
//
// /**
//  * Получить массив имен (поле name) всех пользователей
//  */
// const getAllNames = arr => arr.map(i => i.name);
//
// console.log(getAllNames(users));
//
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//
// /**
//  * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
//  */
// const getUsersByEyeColor = (arr, color) => arr.filter(i => i.eyeColor === color);
//
// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
//
// //
// /**
//  * Получить массив имен пользователей по полу (поле gender)
//  */
// const getUsersByGender = (arr, gender) => arr.filter(i => i.gender === gender).map(i => i.name);
//
// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//

// /**
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = (arr) => arr.filter((i) => !i.isActive);
//
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//

// /**
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => arr.find((i) => i.email === email)
// ;
//
// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
//

// /**
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
//  */
// const getUsersWithAge = (arr, min, max) => arr.filter( (i) => i.age > min && i.age < max);
//
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
//
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//
//
// /**
//  * Получить общую сумму баланса (поле balance) всех пользователей
//  */
// const getTotalBalance = arr => arr.reduce((acc, value) => acc + value.balance, 0);
//
// console.log(getTotalBalance(users)); // 20916
// //
//
// /**
//  * Массив имен всех пользователей у которых есть друг с указанным именем
//  */
// const getUsersByFriend = (arr, name) => arr.filter(i => i.friends.includes(name)).map(i => i.name);
//
// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//
//

// /*
//   ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
// */
//
// /**
// //  * Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
// //  * повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
// //  */
// //
// // const getAllUniqueSkills = arr => arr.map(i => i.skills)
//
// const getAllUniqueSkills = arr => arr.reduce((acc, skills) => i.skills.arr ? acc.concat(i.skills.tags) : acc, [])
//
//
// console.log(getAllUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
//
//
//

// const users = [
//   { name: "Mango", daysInactive: 10, isActive: true },
//   { name: "Poly", daysInactive: 5, isActive: false },
//   { name: "Ajax", daysInactive: 12, isActive: true }
// ];
//
// // Для каждого элемента коллекции (user) проверим
// // поле daysInactive, если больше 7, то возвращаем
// // новый объект, распылив в него текущий user
// // и обновив поле isAcive на false (не активный),
// // и наоборот если меньше 7 то поле isActive
// // записываем true (активный)
// // На выходе получаем новую коллекцию с
// // актуальными данными
// const updatedUsers = users.map(user => ({
//   ...user,
//   isActive: user.daysInactive < 7
// }));
//
// console.log(updatedUsers);



// const numbers = [ 2, 6, 9];
//
// const powerNumbers = (arr) => arr.map(num => ({
//   num: num,
//   powered: num * num,
// }));
//
// console.log(powerNumbers(numbers));
//
//

//
 // var arrays = [
 // ["$6"],
 // ["$12"],
 // ["$25"],
 // ["$25"],
 // ["$18"],
 // ["$22"],
 // ["$10"]
 // ];
 // var merged = [].concat.apply([], arrays);
 //
 // console.log(merged);




/**
 forEach
 **/
// 1) Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.

// const arr = [15, 4, 9, 25 ,7, 3, 10 ,14];

// const copy = [];
//  arr.forEach(function(num) {copy.push(num * num)});
// console.log(copy);

/**
 map
 **/

// 1) Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// const arr = [15, 4, 9, 25 ,7, 3, 10 ,14];
//
// const numbesX2 = (arr) => arr.map(n => (n * n));
// console.log(numbesX2(arr));
//


/**
 every, some
 **/

// 1) Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// const arr = [15, 4, 9, 25 ,7, 3, 10 ,14];

// const numbers = (arr) => arr.every(n => (n > 0));
// console.log(numbers(arr));


// 2) Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

// const arr = [15, 4, 9, 25 ,7, 3, 10 ,14];
//
// const numbers = (arr) => arr.some(n => (n < 0 ));
// console.log(numbers(arr));

/**
 filter
 **/

// 1) Дан массив с числами. Оставьте в нем только отрицательные числа.

// const arr = [15, -4, 9, -25 ,7, 3, -10 ,14];
//
// const lessZero = (arr) => arr.filter(n => (n < 0));
// console.log(lessZero(arr));

// 2) Дан массив с числами. Оставьте в нем только четные числа.

// const arr = [15, 9, 25 ,7, 3, 10 ,14];
//
// const aboveZero = (arr) => arr.filter(n => (n % 2 === 0));
// console.log(aboveZero(arr));

// 3) Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
//
// const lines = ['lorem ipsum', 'l i', 'lllooo rre mmmm', 'iiiip ssuu m m mm m'];
//
// const linesLength = (arr) => arr.filter(n => (n.length > 5));
// console.log(linesLength(lines));

// 4)  Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
//   Оставьте в нем только подмассивы.

// const arr = [1, 2, [3, 4], 5, [6, 7]];
//
// const onlyArr = (arr) => arr.filter(n => Array.isArray(n));        /////        спросить
// console.log(onlyArr(arr));
//
// 5) Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// const arr = [15, -4, 9, -25 ,7, 3, -10 ,14];
//
// const countNegativeNumbers = (arr) => {
//   const arrNegative = arr.filter(n => n < 0);
//   return arrNegative.length;
// };
// console.log(countNegativeNumbers(arr));
//

/**
 reduce, reduceRight
 **/

// 1) Дан массив с числами. Найдите сумму этих чисел.
//
// const arr = [15, 9, 25 ,7, 3, 10 ,14];
//
// const sum = (arr) => arr.reduce((acc, value) => acc + value, 0);
// console.log(sum(arr));
//


// 2) Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

// const arr = [15, 9, 25 ,7, 3, 0, 10 ,14];
//
// const sumBeforeZero = (arr) => arr.reduce((acc, value) => acc + value > 0 )
//
// console.log(sumBeforeZero(arr));
//
//
//
//

/////!!!!!!!!!!!!!!!       ВАЖНО             !!!!!!!!!!!



// const User = function (name, isActive) {
//   this.name = name;
//   this.isActive = isActive;
//   this.getStatus = function(){
  //     return `${this.name} is ${this.isActive ? 'active' : 'unactive'}`;
//   }
// };
// const user = new User('Boris', false);
// console.log(user.getStatus());


///////////////////////////////           ПРОТОТИПЫ ////////////////



// ЗАДАНИЕ 1

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email.

  В prototype функции-конструктора добавь метод getInfo(),
  который выводит в консоль значения полей login и email.

  Обрати внимание, метод всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

//
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
//
// Account.prototype.getInfo = function (){
//   console.log(`Login: ${this.login}, e-mail: ${this.email}`)
// };
//
//
// const account = new Account('Mangozedog', 'mango@dog.woof');
//
// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//

// ЗАДАНИЕ 2

/*
  Напиши ES6 класс StringBuilder.

  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.

  Добавь классу следующие методы:

    - геттер value - возвращает текущее значение поля _value

    - append(str) - получает парметр str (строку) и добавляет ее в конец _value

    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value

    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// const StringBuilder = function(value) {
//   this.value = value;
// };
//
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
//
// StringBuilder.prototype.toAppend = function(str) {
//   return (this.value = this.value + str);
// };
//
// StringBuilder.prototype.toPrepend = function(str) {
//   return (this.value = str + this.value);
// };
//
// StringBuilder.prototype.toPad = function(str) {
//   return (this.value = str + this.value + str);
// };
//
//
// const builder = new StringBuilder('.');
//
// builder.toAppend('^');
// console.log(builder.value); // '.^'
//
// builder.toPrepend('^');
// console.log(builder.value); // '^.^'
//
// builder.toPad('=');
// console.log(builder.value); // '=^.^='

// ЗАДАНИЕ 3

/*
 * Напиши класс Car с указанными свойствами и методами
*/
//
// const Car = function({maxSpeed}){
//   this.speed = 0;
//   this.maxSpeed = maxSpeed;
//   this.running = false;
//   this.distance = 0;
// };
//
// Car.prototype.turnOn = function(){
//   return this.running = true;
// };
//
// Car.prototype.turnOff = function(){
//   return this.running = false;
// };
//
// Car.prototype.accelerate = function(spd){
//   if(spd <= this.maxSpeed){
//     return this.speed = spd;
//   } else {
//     return "Перевищення швидкості"
//   }
// };
//
// Car.prototype.decelerate = function(spd){
//   if(spd <= this.maxSpeed && spd >= 0){
//     return this.speed = spd;
//   }
// };
//
// Car.prototype.drive = function(hours){
//   if(this.turnOn){
//     return  this.distance = (hours * this.speed);
//   }
// };

// const car = new Car({ maxSpeed: 100 });
//
// console.log('Turn on the car', car.turnOn());
// console.log('Change speed', car.accelerate(40));
// console.log( car.accelerate(140));
// console.log("Your distance", car.drive(2));
// console.log('Change speed', car.decelerate(0));
// console.log("Turn off the car", car.turnOff());

// ЗАДАНИЕ 4 // это продолжение 3го задания

/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

// Car.prototype.getSpeces = function (car) {
//   console.log(`maxSpeed: ${car.maxSpeed},speed: ${car.speed}, running: ${car.running}, distance: ${car.distance}`);
// };
//
// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);
//
// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
//



// ЗАДАНИЕ 1 // через ES6


/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email.

  В prototype функции-конструктора добавь метод getInfo(),
  который выводит в консоль значения полей login и email.

  Обрати внимание, метод всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// class Account {
//   constructor (login, email){
//     this.login = login;
//     this.email = email;
//   };
//   getInfo() {
//     console.log(`login: ${this.login}, email: ${this.email}`)
//   }
// }
//
// const account = new Account('Mangozedog', 'mango@dog.woof');
//
// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//


// ЗАДАНИЕ 2 // через ES6

/*
  Напиши ES6 класс StringBuilder.

  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.

  Добавь классу следующие методы:

    - геттер value - возвращает текущее значение поля _value

    - append(str) - получает парметр str (строку) и добавляет ее в конец _value

    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value

    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//   constructor(value){
//     this._value = value;
//   };
//
//   get value() {
//     return this._value;
//   };
//
//   toAppend(str){
//     return this._value = this._value + str;
//   };
//
//   toPrepend(str){
//     return this._value = str + this._value;
//   };
//
//   toPad(str){
//     return this._value = str + this._value + str;
//   }
// }
//
// const builder = new StringBuilder('n ');
//
// builder.toAppend('ttt ');
// console.log(builder.value); // '.^'
//
// builder.toPrepend('rrr ');
// console.log(builder.value); // '^.^'
//
// builder.toPad('!!! ');
// console.log(builder.value); // '=^.^='
//
//
// ЗАДАНИЕ 3 // через ES6
//
//
/*
 * Напиши класс Car с указанными свойствами и методами
*/
//
// class Car {
//   constructor({ maxSpeed = 0 }) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }
//
//   turnOn() {
//     return this.running = true;
//     // Добавь код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }
//
//   turnOff() {
//     return this.running = false;
//     // Добавь код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }
//
//   accelerate(spd) {
//     if (spd < this.maxSpeed ){
//       return this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }
//
//   decelerate(spd) {
//     if(spd < this.maxSpeed && spd > 0){
//       return this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }
//
//   drive(hours) {
//     if (this.running) {
//       return this.distance = hours * this.speed;
//     }
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }
// }
//
// const newCar = new Car({ maxSpeed: 200 });
//
// console.log(newCar.turnOn());
// console.log(newCar.accelerate(120)); // разогнались до 120
// console.log(newCar.decelerate(50));         //
//
//







//                 !!!              ДОМАШННЕЕ ЗАДАНИЕ 6          !!!                //
//


/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/
//
/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {

  static SIZE_SMALL = 'SIZE_SMALL';
  static SIZE_LARGE = 'SIZE_LARGE';
  static STUFFING_CHEESE = 'STUFFING_CHEESE';
  static STUFFING_SALAD = 'STUFFING_SALAD';
  static STUFFING_MEAT = 'STUFFING_MEAT';
  static TOPPING_SPICE = 'TOPPING_SPICE';
  static TOPPING_SAUCE = 'TOPPING_SAUCE';


  /**
   * @constructor
   * @param {String} size - Размер
   * @param {String} stuffing - Начинка
   */
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  };

  /**
   * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
   * @param {String} topping - Тип добавки
   */
  addTopping(topping) {
    if(!this._toppings.includes(topping)){
      this._toppings.push(topping);
      return (hamburger._toppings);
    }
  };

  /**
   * Убрать topping, при условии, что она ранее была добавлена
   * @param {String} topping - Тип добавки
   */
  removeTopping(topping) {
    if(this._toppings.includes(topping)){
      this._toppings.indexOf(topping);
      this._toppings.splice(topping)}
  };

  /**
   * Получить список toppings
   * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
   */
  getToppings() {
    return hamburger._toppings
  }

  /**
   * Узнать размер гамбургера
   * @returns {String} - размер гамбургера
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
   */
  getSize() {}

  /**
   * Узнать начинку гамбургера
   * @returns {String} - начинка гамбургера
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
   */
  getStuffing() {}

  /**
   * Узнать цену гамбургера
   * @returns {Number} - Цена в деньгах
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
   */
  calculatePrice() {}

  /**
   * Узнать калорийность
   * @returns {Number} - Калорийность в калориях
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
   */
  calculateCalories() {}
}

/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

/* Вот как может выглядеть использование этого класса */
// Hamburger.TOPPINGS[Hamburger.TOPPING_SPICE].price;  //мы обращаемся к прайсу топингов TARAS

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SAUCE); ///написал ТАРАС
console.log(hamburger);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE); //["TOPPING_SAUCE", "TOPPING_SPICE"]

// // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories());
//
// // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice());
//
// // Я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
//
// // А сколько теперь стоит?
// console.log("Price with sauce: ", hamburger.calculatePrice());
//
// // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
//
// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
//
// // // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1

// /*
//   🔔 Обратите внимание на такие моменты:
//     	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
//     		другой код, а класс живет в изоляции от мира
//     	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
// 		чтобы нельзя было создать объект, не указав их
//     	✔️ необязательные (добавка) добавляем через методы
//     	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
// 	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
//     	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
//     	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
//       		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
// 		логично в тот момент, когда это потребуется, а не заранее.
// */
//
//



// function Hero(name, level) {
//   //
//   this.name = name;
//   this.level = level;
// }
//
// Hero.prototype.getName = function(){
//   return this.name;
// };
//
// Hero.prototype.value = 5; ////добавили еще value, так можно добавлять вс, что хочешь
//
// Hero.prototype.setLevel = function (level) {
//   this.level = level;//перезиписываемам level
// };
// const mango = new Hero ('Juliy', 1);
// console.log(mango.getName());
// mango.setLevel(666);
// console.log(mango);
//
// //
//
// function Student(old, height) {
//   this.old = old;
//   this.height = height;
// }
//
// Student.prototype.getOld = function () {
//   return this.old;
// };
// const old = new Student(20, 173);
// console.log(old);
// console.log(old.getOld());
//

