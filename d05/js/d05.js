"use strict"

//
// const user = {
//   name: 'Frank',
//   age: 21,
//   male: true,
//   getInfo: function () {
//     return `name: ${this.name} age: ${this.age} male: ${this.male}`
//   },
// };
//
// // console.log(user.name);
// // console.log(user['age']);
// // console.log(user['male']);
//
//
// user.age = 26;
// user.height = 180;
//
// const keys = Object.keys(user);
// console.log(keys);
//
// const values = Object.values(user);
// console.log(values);
//
// const entries = Object.entries(user);
// console.log(entries);
//
// // console.log('user', user);
// // console.log(user.getInfo());
//
// // delete user.male;
// // console.log(user.male)
// //
// // for (const key in user) {
// //   console.log(`${key} : ${user[key]}`);
// // }
//
// for (const el of userArr){
//   console.log(`${el[0]} : ${el[1]} `)
// }

// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
//
// const { name = "hotel", stars = 3, status = "empty" } = hotel;
//
// console.log(name, stars, status); // "Resort Hotel", 5, "empty"

// const a = {x: 1, y: 2};
// const b = {x: 0, z: 5};
//
// const c = Object.assign({}, a, b);
// console.log(c);
//
// const v = { ...a, ...b};
// console.log(v);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
//
// const  newArr = [...arr1, ...arr2]
//
// console.log(newArr);

// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const hotel1 = {
//   name : "Good Hotel",
//   stars: 3,
//   capacity: 70,
// };

// const { name = "hotel", stars = 3, status = "empty" } = hotel;
// const { name: name1 = "hotel", stars: stars2, status: status1 = "empty" } = hotel1;


// console.log(name, stars, status); // "Resort Hotel", 5, "empty"
// console.log(name1, stars2, status1);

// const users = ['Greengo', 'Riki', 'Floyd', 'Marchellos'];
// let userIndex;

// Написать цыкл для поиска игрока за именем. Для примера давайте найдем Riki и
// сохраним его индекс в userIndex;
// for(let input of users) {
//   if (input === 'Riki') {
//     userIndex = users.indexOf(input);
//   }
// }
// console.log(userIndex)

// let ask = 'aaa';

// for (let user of users){
//   let hasUser;
//   console.log(hasUser);
//   if (ask === user) {
//     hasUser = true;
//   };
//   if (hasUser === true) {
//     alert ('This user has allready created');
//     console.log (hasUser);
//   }else {
//     users.push(ask);
//   }
// }
// console.log (users);

// let ask = prompt ("Add a new user");
//
// // Дальше давайте добавим нового юзера, в конец массива
// if (!users.includes(ask)) {
//   users.push(ask);
// }
//
//
// // Удалим юзера по индексу userIndex
// users.splice(userIndex,1);
// console.log(users);
//
//
// // Обновим юзера по индексу
// users[1] = 'Max';
// console.log(users);
//
//
// // Дальше давайте перепишем каждый шаг в отдельную функцию getUserID(id),
// // addUser('string'), deleteUser(id), updateUser(id)
// function getUserID(name) {
//   let userIndex = '';
//   for(let input of users) {
//     if (input === name) {
//       userIndex = users.indexOf(input);
//     }
//
//   }
//   if (userIndex !== '') {
//     return userIndex;
//   } else {
//     alert('user is not finded');
//   }
//   console.log(userIndex);
// }
//
//
// console.log(getUserID('aabbbba')); // если юзера нет "user is not defined"
// //
// const addUser = function(arr, name) {
//   if (arr.includes(name)) {
//     alert('user has already exist');
//   } else {
//     arr.push(name);
//   }
// }
// addUser(users, 'Ajax');
// addUser(users, 'Pablo');
// console.log(users);
//
//
// const deleteUser = (userIndex) => {
//   users.splice(userIndex,1)
// }
// deleteUser(2);
//
// console.log ('aftedDelete', users);
// deleteUser(getUserID('Max'));
// console.log(users);
//
//
// const updateUser = function (index, name, arr) {
//   arr[index] = name;
//   return arr;
// }
// console.log(getUserID('aaa'));
// console.log(updateUser(getUserID('aaa'),'Max',users));


//обновим функцию  getUserByID(id = 'user_id_111' - должно вернуть обьект юзера
// юзера с id user_id_111


// const users = [
//   {id: 'user_id_111', name: 'Greengo'},
//   {id: 'user_id_222', name: 'Riki'},
//   {id: 'user_id_333', name: 'Floyd'},
//   {id: 'user_id_444', name: 'Marchellos'},
// ];
//
// function getUserID(id) {
//   let userIndex = '';
//   for(let input of users) {
//     if (input.id === id) {
//       userIndex = users.indexOf(input);
//     }
//   }
//   if (userIndex !== '') {
//     return userIndex;
//   } else {
//     alert('user is not finded');
//   }
//   console.log(userIndex);
// }
// console.log(getUserID('user_id_222'));
// console.log(users[getUserID('user_id_222')].name);
//
// const deleteUser = (userIndex) => {
//   users.splice(userIndex,1)
// }
// deleteUser(2);
//
// const updateUser = function (index, name, arr) {
//   arr[index].name = name;
//   return arr;
// }
// console.log(getUserID('user_id_222'));
// console.log(updateUser(getUserID('user_id_222'),'Max',users));
//
// // написать функцию getAllUsers(arr) которая выводит сообщение в консль id : name
//
// const getAllUsers = function (arr) {
//   for (const el of arr){
//     console.log(`id: ${el.id} name: ${el.name}`)
//   }
// };
//
// getAllUsers(users);

// const petya = {
// //   name: 'Petya',
// //   showName() {
// //     console.log(petya.name);
// //   }
// // };
// //
// // petya.showName();


// давайте создадимм конструктор студентов через оператор new (name, berthday, slogan)
// getSlogan --девиз, метод нашего обьектва, возвращающий наш слоган в alert

// const student = function (name, birthday, slogan){
//   this.name = name;
//   this.birthday = birthday;
//   this.slogan = slogan;
//   this.getSlogan = function () {
//     alert(`${this.slogan}`);
//   }
// }
//
// const newStudent = new student('Ben', '02.08.2019', 'Winter is coming!');
//
// console.log(newStudent);
// console.log(newStudent.name);
// console.log(newStudent.getSlogan());

// /*
//   Напишите скрипт, который, для объекта user, последовательно:
//
//     - добавляет поле mood со значением 'happy'
//
//     - заменяет значение hobby на 'javascript'
//
//     - удаляет свойство premium
//
//     - выводит содержимое объекта user в формате ключ:значение
//       используя цикл for...in
//
//     - выводит содержимое объекта user в формате ключ:значение
//       используя Object.keys и for...of
//
//     - выводит содержимое объекта user в формате ключ:значение
//       используя Object.entries и for...of
// */
//
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

//////////////////////////////                СЛИЯНИЕ ОБЬЕКТОВ               ////////////////////////////
// const first = {name: 'Tony'};
// const  last = {lastName: 'Stark'};
//
// const person = Object.assign(first, last); //
// console.log(person); // {name: 'Tony', lastName: 'Stark'}
//
// // target (first) тоже изменился
// console.log(first); // first = {name: 'Tony', lastName: 'Stark'}


/////////////  ---- КЛОН ОБЬЕКТА
//
// const obj = {person: 'Thor Ofifkgg'};
//
// const clone = Object.assign({position: 'Seller'}, obj); //{position: "Seller", person: "Thor Ofifkgg"}
// console.log(clone);


 /// Например, есть настройки к акаунту, и мы вносим изменения в настройки, кторорые обновляются
/// с помощью
//

// const defaultSettings = {
//   name: 'Gamer',
//   age: 20,
//   level: 'easy',
//   isActive: true,
//   usAdmin: false,
// };
//
// const updatedSettings = {
//   age: '22',
//   levels: 'medium' ,
//   isActive: false,
// }
//
// Object.assign(defaultSettings, updatedSettings);
// console.log(defaultSettings);

//   Игрок прошел уровни на определенное количество очков, так жн он прошел еще один уровень,
// // перепрошел третий уровень на 380 очков.
//
// const resulrsLevels = {
//   first:  330,
//   second: 570,
//   third: 220,
//   fourth: 670,
// };

// const newResultLevels = {
//   third: 380,
//   fifth: 440,
// };

// Object.assign(resulrsLevels, newResultLevels);
// console.log(resulrsLevels);


//////////////////////////////                ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТОВ               //////////////////////

// const hotel = {
//   name: "Stars Hotel",
//   capacity: 24,
//   stars: 5,
// };
//
// const { name, stars, status } = hotel;
// console.log(name, stars, status);
// console.log(hotel);


/////////////////////////////               ВЫЗОВЫ ФУНКЦИИ                  ////////////////

// const Dog = {
//   name: 'Molli',
//   breed: 'Terier',
// };
//
//
// const myFunction = function (message = ' ') {
//   return `The animal breet is ${this.breed} and ${message }`;
// };
//
// const action = function (callback){
//   return callback();
// }
// console.log(myFunction.call(Dog), 'his' );
// console.log(myFunction.apply(Dog), ['his'] );
// console.log(action(myFunction.bind(Dog, 'hfdf')));
// const  bindExample = myFunction.bind(Dog); ////привязыввем обьект к функции myFunction
//


// const Dog  = function (name = 'Bobik', age, breed, color, male, vegetarian, facobook) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
//   this.color = color;
//   this.male = male;
//   this.vegetarian = vegetarian;
//   this.facebook = facobook;
//   this.yelp = function () {
//     return 'wwwwoooff woooff';
//   }
// };
//
// const dog = new Dog('Bolls', 2, 'Shepherd', 'black', 'female', 'jh', 'bb');
// console.log(dog);
//
// console.log(dog.yelp());
// dog.getAboutData = function () {
//   return `name: ${this.name}; age: ${this.age}; breed: ${this.breed}`;
// };
//
// console.log(dog.getAboutData())
//
// const dog2 = new Dog(undefined, 5, "такса", "female", " ", "no");
// console.log(dog2);
//
// // dog2.getAboutData = function () {
// //   return `name: ${this.name}; color: ${this.color}`
// // };
// // console.log(dog2.getAboutData())





/////////////////////////////////////////////        МОДУЛЬ 5         ///////////////////////

// const doubleFn = arr => {
//   for (let i= 0, max = arr.length; i < max; i += 1) {
//     arr[i] = arr[i] * 2;
//   }
// };
//
// const numbers = [1, 2, 3];
// doubleFn(numbers);
// console.log(numbers); // [2, 4, 6];


