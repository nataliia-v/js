 'use strict'

//
// var year = 2018;
// let month = "November";
// const date = 27;
// let number = 10;
// let newNumber = 50;
// let numBer = 100;
//
// let peoplename = 'Bob';
// let peopleName = 'Bob';
//
// const UAH = 8;

// let sum = number + numBer;
// console.log(sum);

// let sumOne = number + newNumber * numBer;
// console.log('privet', sumOne);
// alert('bbdbdbdb', sumOne);  //выводит сообщеник с "ok"
// const answer1 = confirm('Are you ready?'); //да, нет


// const name = prompt('What is your name?'); //для сбора данных
// console.log(name);
// alert(`hello, ${name}`);
//
// console.log(typeof number);
// console.log(typeof month);
// console.log(typeof date === typeof number);
//
// console.log(month.length);
// console.log(month.indexOf('N'));
// console.log(month.indexOf('w'));
// console.log(month.includes('Nov'));
// console.log(month.includes('nov'));
//
// const fontSize = '5.5px';
// const userLength = 20;
//
// // console.log('Преобразовать в целое число', Number.parseInt(fontSize));
// // console.log('Преобразовать в число с дробью', Number.parseFloat(fontSize));
//
// console.log(Number(fontSize));
//
// console.log('Проверка на число', Number.isNaN (Number(fontSize)));
// console.log('Проверка на число', Number.isNaN (userLength));
// console.log(typeof fontSize);
//
//
// const name = 'John';
// const surname = 'Connor';
// const years = 40;
// const height = 180;
//
// console.log ('Message:',
// `Hello ${name} ${surname}. I'm ${years} and ${height + 2 + 'sm'}.`);



// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ 

// const num = 20;
// const result = num < 30 && num > 10;
// console.log (result);



// const text = 'hghy';

// const result = text.length < 30 && text.length > 5;
// console.log (result);



// const resultPromt = prompt('Введите имя');

// if (resultPromt === 'admin') {
//   alert('Добро пожаловать');
// } else {
//   alert ('Нет прав')
// };

// const monthName = "May";
// let season;

// switch (monthName) {
//   case "June":
//     season += "Summer";
//   case "May":
//     season += "Spring";
//   case "September":
//     season += "Autumn";
//   default:
//     season += "Winter";
// }

// console.log(season);



// Доп задание 2
/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

// const day = 2;
// const month = 10;
// const year = 2017;

// const date = '0' + day + "\\" + month + "\\" + year;

// console.log(date); // 02\10\2017

// /* 

// ДОП ЗАДАНИЕ 3
//   Напишите скрипт который:
//   - при загрузке страницы спрашивает имя пользователя (используйте prompt)
//   - после того как было введено имя показывает alert с тем что ввели в prompt
// */

// const name = prompt ('введите имя');
// alert(name);


/*  ДОП ЗАДАНИЕ 4
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = 
// `${name} прибывает на отдых ${date} в ${roomType}`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.


// ДОП ЗАДАНИЕ 5  
/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// // // console.log('Преобразовать в целое число', Number.parseInt(fontSize));
// // // console.log('Преобразовать в число с дробью', Number.parseFloat(fontSize));

// let totalWidth;
// totalWidth = Number.parseInt (padding) + Number.parseInt (border) + Number.parseInt (contentWidth) + 'px';

// console.log(totalWidth); // '125px'


// ДОП ЗАДАНИЕ 6
/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/ 


// const whatYear = prompt('What the year now?');
// if (whatYear === '2018') {
//   alert ('Great!');
// } else {
//   alert ('But  now 2018!')
// };

// ДОП ЗАДАНИЕ 7
/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
// */ 

// const number = prompt('введите произвольное целое число');
// if (number === null) {
//   alert('Приходите ещё!');
// } 
// else if (Number.isSafeInteger(Number(number))) {
//   alert ('Thank you')
// }
// else {
//   alert('you must type other number')
// }

// ДОП ЗАДАНИЕ 8
/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

// const num = Number.parseInt(Math.random() * 100);

// let type;

// switch (num%2 ) {
//   case 0:
//   type = "even";
//   break;
//   default:
//   type ="odd";
// }

// console.log(`${num} is ${type}`);

// ДОП ЗАДАНИЕ 9
/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 12;
// let minutes = 3;
// let seconds = 54;

// const time = `${hours < 10 ?
//   '0' + hours : hours}:${minutes < 10 ?
//   '0' + minutes : minutes}:${seconds  < 10 ?
//   '0' + seconds : seconds}`;

// console.log('Time is: ', time);


// ДОП ЗАДАНИЕ 10
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
//
// const promtValue = prompt ('ввести число от 1 до 5');
//
// if (Number.isInteger (+promtValue) && (promtValue >0 && promtValue <= 5) ){
//
// switch (+promtValue){
//   case 1 :
//   alert ('каталог хостелов')
//   break;
//   case 2 :
//   alert ('каталог бюджетных отелей')
//   break;
//   case 3 :
//   alert ('каталог отелей ***')
//   break;
//   case 4 :
//   alert ('каталог отелей ****')
//   break;
//   case 5 :
//   alert ('каталог best отелей')
//   break;
// }
//
//
// } else if (promtValue === null) {
//   alert ("soory, try again")
//
// } else {
//   alert ('Неверный ввод')
// }
//



// let valueA = '5';
//
// let valueAsNumber = +valueA;
// let typeValue =  typeof valueAsNumber;
//  console.log(typeValue);
//  console.log(valueAsNumber);


 // console.log(Number.parseInt('454.23ppp'));//   454
 // console.log(Number.parseFloat('454.23ppp'));//   454.23



// const validNumber = Number('51');
// console.log(Number.isNaN(validNumber));/// false
//
//  const invalidNumber = Number('sfsg'); //NaN
//  console.log(Number.isNaN(invalidNumber));/// true
//
//  const message = 'Welcome to Bahamas!';
//
//  console.log(message.length); // 19
//  console.log(message.toLowerCase());// welcome to bahamas!
//  console.log(message.toUpperCase());// WELCOME TO BAHAMAS!
//  console.log(message.indexOf('too')); //-1
//  console.log(message.indexOf('a')); //12
//  console.log(message.includes('to')); //true
//  console.log(message.includes('too'))//false




// const monthName = "January";
// let result;
//
// if (monthName === "June") {
//   let result = "summer";
// } else {
//   let result = "winter";
// }
//
// const season = monthName === "June" ? "summer" : "winter"; ///   тернарный оператор

// задание 1

 // let guest = "Mango";
 // let name;
 // name = "Mango";
 // console.log(guest);

 // // задание 2
 // /*
 //   Есть три переменные содержащие день, месяц, и год.
 //   Необходимо получить строку день\месяц\год
 //   в формате xx\xx\xxxx
 //
 //   Найдите ошибку в записи значания для переменной date,
 //   результат будет выведен в консоль и равен комментарию
 //   напротив console.log()
 // */
 // const day = 2;
 // const month = 10;
 // const year = 2017;
 //
 // const date = `0${day}\\${month}\\${year}`;
 //
 // console.log(date); // 02\10\2017


//  // // задание 3
//
//  /*
//   Напишите скрипт который:
//   - при загрузке страницы спрашивает имя пользователя (используйте prompt)
//   - после того как было введено имя показывает alert с тем что ввели в prompt
// */
//
//  const inputName = prompt('Type your name');
//
//  alert(inputName);


 // // // задание 4
 // /*
 //   Есть три переменные name, date и roomType, содержащие
 //   имя гостя, дату его прибытия на отдых и тип комнаты отеля.
 //
 //   Используя шаблонные строки необходимо записать
 //   в перменную message сообщение формата:
 //   "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
 //
 //   Найти ошибки в коде и исправить их, при верном решении
 //   в консоль будет выведена строка идентичная той что
 //   напротив console.log
 // */
 //
 // const name = 'Mango';
 // const date = '14/08/2031';
 // const roomType = 'люкс';
 //
 // const message = `${name} прибывает на отдых ${date} в ${roomType}.`;
 //
 // console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.


 // // задание 5
//  /*
//   Есть 3 переменные в которых хранится  размер составляющих
//   блочной модели в формате Npx, где N это целое число.
//
//   Используя эти переменные, запишите в переменную totalWidth
//   общую ширину блока в формате Npx.
//
//   К примеру "сумма" '20px' и '30px' будет равна '50px'.
//
//   Если все верно, то в консоли будет выведена строка '125px'
// */
//
//  const padding = "20px";
//  const border = "5px";
//  const contentWidth = "100px";
//
//  let totalWidth;
//  totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth);
//
//  console.log(totalWidth); // '125px'

 // // задание 6

 /*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'

  PS: используйте конструкцию if..else.
*/

 // const year = prompt('What the year is now?');
 // let thisYear = "2018";
 // if (year === thisYear) {
 //   alert("Good!")
 // } else {
 //   alert("But 2018!")
 // };


 // // задание 7

 /*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'

  PS: используйте конструкцию if..else.
*/

 // const inputNumber = prompt("Input number");
 //
 // if (inputNumber === null){
 //   alert("Come again!")
 // } else if (Number.isSafeInteger(Number(inputNumber))){
 //   alert("Thanks!!")
 // } else {
 //   alert("необходимо было ввести целое число!")
 // }


 // // задание 8

 /*
  В переменную num записывается случайное число.

  Используя ветвления запишите в переменную type строку:
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

//  const num = Number.parseInt(Math.random() * 100);
//
//  let type;
//  // (num%2)
//
// switch (num % 2) {
//   case 0:
//     type = "even";
//     break;
//   case 1:
//     type = "odd";
//     break;
// }
//
//  console.log(`${num} is ${type}`);


 // // задание 9

 // /*
 //   Время состоит из:
 //     часов(hours)
 //     минут (minutes)
 //     секунд(seconds).
 //
 //   Время должно всегда выводиться в формате xx:xx:xx
 //   Например: 01:12:04 или 14:03:45
 //
 //   Составляющие времени не гарантированно состоят из 2-х цифр!
 //
 //   Напишите скрипт который проверяет каждую составляющую,
 //   тоесть значения переменных hours, minutes, seconds
 //   и добавлят впереди 0 если необходимо.
 // */
 //
 // let hours = 7;
 // let minutes = 3;
 // let seconds = 42;
 //
 //
 // if ()
 //
 // const time = `${hours}:${minutes}:${seconds}`;
 //
 // console.log('Time is: ', time);



 // // у нас есть семья из 3х человек Игорь, Ира, Коленька.
 // // Дома в данный момент мама и Коленька.
 // // Спросить кто пришел, если кто-то из семьи, то впускаем и
 // // приветствуем
 // // Если кто-то чужой, спрашиваем "к кому пришел?" - в ответ нужно ввести "Пришел к имя"
 // // Если пришел к Отцу сказать что его нету дома
 // // Если пришел к матери, сказать что "добро пожалывать, но без сюрпризов"
 //
 // const inputName = prompt("Who are you?");
 // let inputNameLower;
 //
 // const father = "Igor";
 // const mother = "Ira";
 // const child = "Nikolay";
 //
 // // if (inputName){
 // //   inputNameLower = inputName.toLowerCase();
 // //   if(inputNameLower === father.toLowerCase()
 // //   || inputNameLower === mother.toLowerCase()
 // //   || inputNameLower === child.toLowerCase()){
 // //     alert("Hello!");
 // //   } else {
 // //     const guest = prompt ("к кому пришел?");
 // //     if (guest.toLowerCase().includes(father.toLowerCase())){
 // //       alert("его нету дома");
 // //     } else if (guest.includes(mother.toLowerCase())) {
 // //       alert ("добро пожалoвать, но без сюрпризов");
 // //     } else {
 // //       alert ("Bye!");
 // //     }
 // //   }
 // // }
 //
 // inputName ? alert("Hello") : alert("Cancel"); // эта же задача в терарном операторе



 // //   через switch
 //
 //
 // const guest = prompt("Who are you?");
 //
 // const father = "Igor";
 // const mother = "Ira";
 // const child = "Nikolay";
 //
 // if  (guest !== null) // или можно просто (guest)
 //   if (guest === father || guest === mother || guest === child) {
 //     alert('Welcome!');
 //   } else {
 //     const guest = prompt("к кому пришли?");
 //
 //
 //
 //     switch (true) {
 //       case guest.includes(father):
 //         alert("Его нет дома");
 //         break;
 //
 //       case guest.includes(mother):
 //         alert("Осторожно!!");
 //         break;
 //
 //
 //       case guest.includes(child):
 //         alert("он слишеом мал")
 //     }
 //   }


/// task 1
//  /*
//   - Объявите две переменные: guest и name
//   - В переменную name запишите строку 'Mango'
//   - Скопируйте значение из name в guest
//   - Выведите в консоли значение переменной guest (должно вывести 'Mango')
// */
//
//  let  guest;
//  let  name;
//  name = "Mango";
//
//  guest = name;
//
//  console.log(guest);

 /// task 2

//  /*
//   Есть три переменные содержащие день, месяц, и год.
//   Необходимо получить строку день\месяц\год
//   в формате xx\xx\xxxx
//
//   Найдите ошибку в записи значания для переменной date,
//   результат будет выведен в консоль и равен комментарию
//   напротив console.log()
// */
//
//  const day = 2;
//  const month = 10;
//  const year = 2017;
//
//  const date = "0"+day + "\\" + month + "\\" + year;
//
//  console.log(date); // 02\10\2017

 /// task 3
//  /*
//   Напишите скрипт который:
//   - при загрузке страницы спрашивает имя пользователя (используйте prompt)
//   - после того как было введено имя показывает alert с тем что ввели в prompt
// */
//
// const name = prompt("Input your name");
// alert(name);

 /// task 10

 /* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
 //
 // const number = +prompt("ввести число от 1 до 5");
 // console.log(number);
 //
 // if (number === 0) { ///cancel
 //   alert('очень жаль, приходите еще!')
 // }
 //
 // else if (Number.isNaN(number) === false && number <= 5 && number >= 1 ){
 //   switch (number) {
 //     case "1":
 //       alert('Каталог хостелов');
 //         break;
 //     case "2":
 //       alert('Kаталог бюджетных отелей');
 //       break;
 //     case "3":
 //       alert('Каталог отелей ***');
 //       break;
 //     case "4":
 //       alert('Каталог отелей ****');
 //       break;
 //     case "5":
 //       alert('Каталог best hotels');
 //       break;
 //   }
 //   } else {
 // alert("Неверный ввод, возможные варианты 1-5!")};




