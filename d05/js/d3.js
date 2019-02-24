"use strict"


// const user = {
// //   name: 'Frank',
// //   age: 21,
// //   male: true,
// //   getInfo: function () {
// //     return `name: ${this.name} age: ${this.age} male: ${this.male}`
// //   },
// // };
// //
// // // console.log(user.name);
// // // console.log(user['age']);
// // // console.log(user['male']);
// //
// //
// // user.age = 26;
// // user.height = 180;
// //
// // const keys = Object.keys(user);
// // console.log(keys);
// //
// // const values = Object.values(user);
// // console.log(values);
// //
// // const entries = Object.entries(user);
// // console.log(entries);
// //
// // // console.log('user', user);
// // // console.log(user.getInfo());
// //
// // // delete user.male;
// // // console.log(user.male)
// // //
// // // for (const key in user) {
// // //   console.log(`${key} : ${user[key]}`);
// // // }
// //
// // for (const el of userArr){
// //   console.log(`${el[0]} : ${el[1]} `)
// // }

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

const hotel = {
  name : "Resort Hotel",
  stars: 5,
  capacity: 100,
};

const hotel1 = {
  name : "Good Hotel",
  stars: 3,
  capacity: 70,
};

const { name = "hotel", stars = 3, status = "empty" } = hotel;
const { name: name1 = "hotel", stars: stars2, status: status1 = "empty" } = hotel1;


console.log(name, stars, status); // "Resort Hotel", 5, "empty"
console.log(name1, stars2, status1);
