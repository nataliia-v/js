'use strict'

 //
 // const clients = ["Mango", "Poly", "Ajax"];
//
// console.log(clients[0]); //Mango
// console.log(clients [1]); //Poly
// console.log(clients[2]); //Ajax
//
// clients[3] = 'Alex'; //Добавили Alex, но не запушили
// console.log( clients[3]);
//
// clients.length = 2; //Все удаляется, остается только [0,1]
// console.log(clients);




// //split
// const message = "Welkome to Bahamas!";
//
// //Разбивает строку по разделителюб в даном случае это пробел


//ИЗ СТРОКИ ДЕЛАЕМ МАССИВ

// console.log (message.split(" ")); // ['Welkome', 'to', 'Bahamas!']

//  ИЗ МАССИВА ДЕЛАЕМ СТРОКУ JOIN

// const clients = ["Mango", "Poly", "Ajax"];

//
// console.log(clients.join(""));//MangoPolyAjax
// console.log(clients.join(","));//Mango,Poly,Ajax
// console.log(clients.join("-"));//Mango-Poly-Ajax
//
// //  INDEXOF показываеат под каким номером находится элемент
// console.log(clients.indexOf('Poly')); //1
// console.log(clients.indexOf('Monkong')); //-1
//
// console.log(clients.includes('Poly'));  //true  (Проверяет наличие элемента в массиве)
// console.log(clients.includes('Monkong')); //false (отсутствует)
//
//
// //ДОБАВЛЯЕТ ЭЛЕМЕНТЫ В МАССИВ
// clients.push('Natasha'); //Добавляет в конец ["Mango", "Poly", "Ajax", "Natasha"]
// console.log(clients);
// clients.unshift("Sergio");
// console.log(clients); // Добавляет в началоа массива ["Sergio", "Mango", "Poly", "Ajax", "Natasha"]
//
// //УБИРАЕТ ЭЛЕМЕНТЫ ИЗ МАССИВА
// clients.pop();   //удаляем последний (4) ["Sergio", "Mango", "Poly", "Ajax"]
// console.log(clients); 
// clients.shift();  //удаляем первый
// console.log(clients); //(3) ["Mango", "Poly", "Ajax"]


//
// const bests = clients.slice(0, 3); //копирует в новый массив три эл
// console.log('bests', bests);

const clients = ["Mango", "Poly", "Ajax", "Romeo", "Groum"];

// clients.splice(0, 3); //удалит все элементы с 0 до 3(не включается)
// console.log(clients);// (2) ["Romeo", "Groum"

// clients.splice(1, 0, 'Even', 'Artem'); //Добавляет элементы с индекса 1
// console.log(clients);//(7) ["Mango", "Even", "Artem", "Poly", "Ajax", "Romeo", "Groum"]

// CONCAT из нескольких массивов делает один

const newClients = ['Adam', 'Frank'];
const newArr = clients.concat(newClients);
console.log('newArr', newArr);

console.log(newArr.reverse());// REVERSE
console.log('isArry:', Array.isArray(newArr))///проверка на тип Arry


















