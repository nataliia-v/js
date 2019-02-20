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

// const clients = ["Mango", "Poly", "Ajax", "Romeo", "Groum"];
//
// // clients.splice(0, 3); //удалит все элементы с 0 до 3(не включается)
// // console.log(clients);// (2) ["Romeo", "Groum"
//
// // clients.splice(1, 0, 'Even', 'Artem'); //Добавляет элементы с индекса 1
// // console.log(clients);//(7) ["Mango", "Even", "Artem", "Poly", "Ajax", "Romeo", "Groum"]
//
// // CONCAT из нескольких массивов делает один
//
// const newClients = ['Adam', 'Frank'];
// const newArr = clients.concat(newClients);
// console.log('newArr', newArr);
//
// console.log(newArr.reverse());// REVERSE
// console.log('isArry:', Array.isArray(newArr))///проверка на тип Arry






// ДОП ЗАДАНИЯ

/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
//   так, чтобы в консоль вывелись указаные в комментариях
//   элементы массива.
// */
//
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
//
// console.log(); // 4
//
// console.log(users.length); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax



// задание 2
//
// /* Есть массив имен пользователей */
//
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
//
// /* Используя методы массива, последовательно выполнить следующие операции */
//
// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
//
// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]
//
// // // Добавить в начало массива любое имя
// // console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// //
// // // Добавить в конец массива два любых имени за одну операцию
// // console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


// // ЗАДАНИЕ 3
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string

  PS: для перебора массива используте цикл for или for...of
*/

// let string = 'kakoy-to text ekhkuen ewjeje ';
// let arr;
//
// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
//
// arr = string.split(' ');
// console.log(arr);
//
//
// // Вывести в консоли общую длину массива arr
// console.log(arr.length);
//
// // Используя цикл, вывести в консоль все индексы массива arr
// for (let i =0; i < arr.length; i+= 1) {  /// let i=0 мы обьявили название i (можно другое имя)
//   console.log(arr.indexOf(arr[i]));
// }
//
// // Используя цикл, вывести в консоль все элементы массива arr
// for (let i = 0; i < arr.length; i+= 1) {
//   console.log(arr[i]);
// }
//
// // Используя цикл, вывести в консоли все пары индекс:значение массива arr
//
// for (const i of arr)
// console.log(arr.indexOf(i) + ':' + i);


// ЗАДАНИЕ 4

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100.

   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз,
   и так далее, пока не введет число больше 100.

  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод
  вроде строк 'qweqwe' в этой задаче необязательно.

  PS: используйте цикл do...while
*/
//
// let num = 100;
// let input;
//
// do {
//   input = Number(prompt('ввести число больше 100'))
// }
// while (input <num);

// ЗАДАНИЕ 5

/*
  Напишите скрипт, который выводит через console.log все
  числа от min до max, с двумя исключениями:

    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'

    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'

  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;
//
// for (let i = min; i < max; i=i+1 ) {
//   if ( i % 3 === 0) {
//     console.log("Fizz");
//   } else if ( i %5 === 0 && i % 3 !==0) {
//     console.log("Bizz")
//   } else {
//     console.log(i);
//   }
// }




// ЗАДАНИЕ 6
/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num,
  записывая эти числа в массив newArray.

  В результате в массиве newArray будут все подходяшие числа.

  PS: используйте цикл for или for...of и оператор ветвления if
*/
//
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];
//
// for(const newNumber of numbers) {
//   if(newNumber > num) {
//     newArrey.push(newNumber);
//   }
// }
//
// console.log(newArray);


// // ЗАДАНИЕ 7
// /*
//   Напишите скрипт, который проверяет произвольную строку
//   в переменной string и находит в ней самое длинное слово,
//   записывая его в переменную longestWord.
// */
//
// const string = "May the force be with you";
// let longestWord;
//
// const newArry  = string.split(" ");
//
// longestWord = newArry[0];
// for(const value of newArry) {
//   if (value.length > longestWord.length) {
//     longestWord = value;
//   }
// }
// console.log(longestWord); // 'force'

// // ЗАДАНИЕ 8
/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой,
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
//
// let arr = [];
// let ask;
// let sum = 0;
//
// do{
//   ask = Number(prompt('Enter number'));
//   console.log(ask);
//
//   if (ask !== 0){
//     arr.push(ask)
//   }
//
//   console.log(ask);
//   console.log(arr);
//
// }while(ask);
//
// if (arr.length  !==0){
//   for (const iteration of arr) {
//     sum += iteration;
//   }
// }
//
// console.log('The sum is: ' + sum);
//
//
// const users = ['Mango', 'Salo', 'Salat'];
// console.log(users);
//
// if(users.length === 0) {
//   console.log('empty');
// } else
//   console.log('not empty');


//==============МЕТОДЫ

// const users = ['Mango', 'Salo', 'Salat'];
//
// // const  userInput = prompt('Введите число');
// // console.log(userInput);
// //
// // const numbers = userInput.split(', ')
// //
// // console.log(numbers);
// // const name = Number(prompt('Enter number'));
// // const idx = users.indexOf(userInput)
// users.push('Chelsy');
// users.push('Chelsy');
// console.log(users);
//
// users.pop();
// console.log(users.pop());
// console.log(users);



// const example = ['fff', 'ddd', 'aaa'];
//
//  for (let iterator = 0; iterator < example.length; iterator+=1 );  ///let iterator = начали отсчет от 0го индекса, он должен быть меньше длины массива, чтобы цикл был не бесконечныйю. Если я хочу чтобы через 2 был шаг, то пишу iterator+=1
//
// const  answer = prompt('введите пароль');
// while (answer.length < 9) // условие если пароль



// let num = 0;
// const users = ['alex', 'nik', 'bob'];
// while (num < users.length) {
//   if (users[num] === 'mom') {
//     console.log('nik найден');
//     break;
//   }
//   if (num === (users.length -1)) {
//     console.log('user not found')
//   }
//   num += 1;
// }
//


// let  num = 0;
// const users = ['alex', 'nik', 'helen', 'bob'];
//
// do {
//   if (users[num]  === 'helen') {
//     continue
//   }
//   console.log('Hello: ', users[num]);
//   num += 1;
// } while(num >= users.length);


/*
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***

  Создайте игру угадай число.

  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.

  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.

  Пусть prompt говорит "Введите цифру между x и y", где x и y
  соотвественно самый маленький и самый большой элемент массива.

  Но пользователь может ввести что угодно, необходимо проверить
  что было введено. Преобразовать input в числовой тип и проверить
  число ли это.

    - Если не число - выводим alert с сообщением о том, что было
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];
// const min = numbers[0];
// const max = numbers[4];
//
//
// const answer = Number(prompt(`Введите цифру от ${min} до ${max} `));
// if (Number.isNaN(answer)) {
//   alert('было введено не корректное значение')
// }
// else {
//   if (answer < min) {
//     alert('вы ввели число меньше 12');
//   } else if (answer > max)  {
//     alert ('вы ввели число больше 41');
//   }
//
//   if (numbers.includes(answer)) {
//     alert ('поздравляем, вы выиграли!');
//   }
//
//   else {
//     alert(` ${answer}`);
//   }
// }

// ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
//
// Напишите скрипт имитирующий авторизацию пользователя.
//
//   Есть массив паролей зарегистрированных пользователей passwords.
//
//   При посещении страницы, необходимо попросить пользователя ввести свой пароль,
//   после чего проверить содержит ли массив passwords пароль введенный пользователем.
//
//   Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
//   Подсказка: используйте цикл do...while.
// Если был введен пароль который есть в массиве passwords, вывести alert
// с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
//   Если был введен не существующий пароль, отнять от лимита попыток единицу,
//   вывести alert с текстом "Неверный пароль, у вас осталось n попыток",
//   где n это оставшийся лимит.
//
//   После того как пользователь закрыл alert, запросить пароль снова.
//   Продолжать запрашивать пароль до тех пор, пока пользователь не введет
// существующий пароль, не кончатся попытки или пока пользователь
// не нажмет Cancel в prompt.
//   Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
//
// Если пользователь нажмет Cancel, прекратить выполнение цикла.
// */
//
// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

let inputPassword;

do {
  inputPassword = prompt('Enter password: ');

  if (passwords.includes(inputPassword)) {
    alert('Добро пожаловать!');
    break;
  }

  else if (inputPassword !== null) {
    attempts -= 1;

    if(attempts > 0){
      alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    }

    else {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  }
} while (attempts > 0 && inputPassword !== null);










