

  'use strict'


// /Задача № 1
//Алерт по нажатию на кнопку.
//При нажатии на кнопку "Нажми на меня"
//выводиться сообщение 'Привет!

// const buttonClick = document.querySelector('button');
// const handClick = () => alert('Hello');
// buttonClick.addEventListener('click', handClick);

//Задача № 2
//Изменение текста в инпуте.
//По нажатию на кнопку - изменяеться текст в импуте

// let buttonClick = document.querySelector('button');
//
// let inputFunc = () => input.value = "fgggg";
// buttonClick.addEventListener('click', inputFunc);

//Задача № 3
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута

// const buttonClick = document.querySelector('button');
// const inp = document.querySelector('input');
//
// let buttFunk = () => alert(inp.value);
// buttonClick.addEventListener('click', buttFunk);

  //Задача № 4
  //Изменение текста в инпуте.
  //По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат

  // const buttonClick = document.querySelector('button');
  // const inp = document.querySelector('input');
  //
  // let inpFunk = () => alert(inp.value * inp.value);
  // buttonClick.addEventListener('click', inpFunk);


  //Задача № 5
  // Задача. Кнопка осуществляет обмен содержимым между двумя инпутами,
  // можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:

// let  buttonClick = document.querySelector('button');
// let inp1 = document.querySelector('#input1');
// let inp2 = document.querySelector('#input2');
//
//   let inpFunk = () => {
//     let buf = inp1.value;
//
//     inp1.value = inp2.value;
//     inp2.value = buf;
//   } ;
//   buttonClick.addEventListener('click', inpFunk);
//
  //Задача № 6
  // Задача. При нажатии на кнопку - поменяется ее текст:

//   let btn = document.querySelector('input');
//
// let btnFunk = () => btn.value = "dthdthd";
//
// btn.addEventListener('click', btnFunk);
//
  // Задача № 7
  // При нажатии на кнопки -  одна из них блокирует инпут
  // с помощью атрибута disabled, а другая разблокирует:

  // const inputV = document.querySelector('input')
  //
  // let test = document.getElementsByTagName('button');
  // console.log(test);


// доп 1

  /*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// let btn = document.querySelector('.button');
// let btnFunk = () => btn.textContent  = Number(btn.textContent) + 1;
// btn.addEventListener('click', btnFunk);


  // доп 2

  // Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  // получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
  // */

  // let btn = document.querySelector('button');
  // let inp1 = document.querySelector('.input1');
  // let inp2 = document.querySelector('.input2');
  // let result = document.querySelector('.result');
  // // console.log(Number(inp1.placeholder) + 1);
  // // console.log(inp2.placeholder);
  // // console.log(result.textContent);
  //
  // let sum = () => result.textContent = Number(inp1.value) + Number(inp2.value);
  //
  //
  // btn.addEventListener('click', sum );

  // доп 3
  /*
//   Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1.
//
//   - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
//   - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
//   - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
//   - Привяжите вызовы методов и значение счетчика к раметке
// */
//
// class Counter {
//
//   constructor(onChange) {
//     this.onChange = onChange;
//     this.value = 0;
//   }
//
//   increment () {
//     this.value += 1;
//     this.onChange(this.value);
//   }
//
//   decrement () {
//     this.value -= 1;
//     this.onChange(this.value);
//   }
// }
//
// let btnMinus = document.querySelector('[data-action="sub"]');
// let btnPlus = document.querySelector('[data-action="add"]');
// let spanValue = document.querySelector('.value');
//
//
// const onCounterChange = (value) => {
//   spanValue.textContent = value;
// };
//
// const counter = new Counter(onCounterChange);
//
// btnMinus.addEventListener('click', () => {
//   counter.decrement();
// });
// btnPlus.addEventListener('click', () => {
//   counter.increment();
// });




 //      АСИНХРОННОСТЬ

  // // выполнится первым
  // console.log('First');
  //
  // setTimeout(() => {
  //   // выполнится третим спустя 2 секунды
  //   console.log('Second');
  // }, 2000);
  //
  // // выполнится вторым
  // console.log('Third');

  // ПРИМЕР ИЗ КОНСПЕКТА 1

  // const btn = document.querySelector('#js-button');
  //
  // const onClick = () => {
  //   setTimeout(()=> {
  //     alert('I love async JS');
  //   }, 3000)
  // };
  //
  // btn.addEventListener('click', onClick);


  // ПРИМЕР ИЗ КОНСПЕКТА 2

  // const startBtn = document.querySelector(".js-start");
  // const stopBtn = document.querySelector(".js-stop");
  // let timerId = null;
  //
  // // При клике на Старт, запустим интервал,
  // // будем каждую секунду выводить в консоль строку,
  // // используем Date.now для уникального числа,
  // // чтобы строки в консоли были разные
  // startBtn.addEventListener("click", () => {
  //   timerId = setInterval(() => {
  //     console.log(`I love async JS! ${Date.now()}`);
  //   }, 1000);
  // });
  //
  // // По клику на Стоп вызовем clearInterval и передадим
  // // аргументом ID того счетчика который надо остановить
  // stopBtn.addEventListener("click", () => {
  //   clearInterval(timerId);
  //   console.log("setInterval stopped!");
  // });

  // let date = new Date();
  // console.log(date);
  // let date = new Date('March 31, 2017')
  // console.log(date);

  // let date = new Date();
  // console.log("Date: " + date);
  // console.log("getDate(): " + date.getDate());
  // console.log("getDay(): " + date.getDay());
  // console.log("getMonth(): " + date.getMonth());
  // console.log("getFullYear(): " + date.getFullYear());
  // console.log("getHours(): " + date.getHours());
  // console.log("getMinutes(): " + date.getMinutes());
  // console.log("getSeconds(): " + date.getSeconds());
  // console.log("getMilliseconds(): " + date.getMilliseconds());
  // console.log("getTime(): " + date.getTime());

 // Time: 21:18:12:483"


  // let date = new Date();
  //
  // // формат вывода
  // const options = {
  //   weekday: 'long',
  //   year    : 'numeric',
  //   month   : 'short',
  //   day     : 'numeric',
  //   hour    :'2-digit',
  //   minute  :'2-digit'
  // };
  //
  // // China
  // let localeUk = date.toLocaleString('zh-cn', options);
  // console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42
  //
  // let localeUs = date.toLocaleString("en-US", options);
  // console.log(localeUs); // Monday, Mar 19, 2018, 5:43


  //
  // function getYoutubeLikeToDisplay(millisec) {
  //   var seconds = (millisec / 1000).toFixed(0);
  //   var minutes = Math.floor(seconds / 60);
  //   var hours = "";
  //   if (minutes > 59) {
  //     hours = Math.floor(minutes / 60);
  //     hours = (hours >= 10) ? hours : "0" + hours;
  //     minutes = minutes - (hours * 60);
  //     minutes = (minutes >= 10) ? minutes : "0" + minutes;
  //   }
  //
  //   seconds = Math.floor(seconds % 60);
  //   seconds = (seconds >= 10) ? seconds : "0" + seconds;
  //   if (hours != "") {
  //     return hours + ":" + minutes + ":" + seconds;
  //   }
  //   return 'До обеда осталось'  + minutes + " минут" + seconds + 'секунд';
  // }
  //
  // let date = new Date();
  // console.log(date);
  // let dateFuture = new Date(2019, 2, 14, 14, 0, 0, 0);
  // console.log(dateFuture);
  // let x = dateFuture - date;

  //
  // let minutes = document.querySelector('.hours');
  // minutes.textContent = getYoutubeLikeToDisplay(x);



  ////////////////// СЧЕТЧИК ВРЕМЕНИ /////////////

//   function time(millisec) {
//     var seconds = (millisec / 1000);
//     var minutes = Math.floor(seconds / 60);
//     seconds = Math.floor(seconds % 60);
//     return 'До обеда осталось '  + minutes + " минут " + seconds + ' секунд';
//   }
//
// setInterval((function interval() {
//   let date = new Date();
//   let dateFuture = new Date(2019, 2, 14, 14, 0, 0, 0);
//   let x =  dateFuture - date ;
//
//   let p = document.querySelector('.time');
//   p.textContent = time(x);
//
//   }), 1000);



  /*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/
//
//   const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
//   ];
//
//   let start = document.querySelector('[data-action="start"]');
//   let stop = document.querySelector('[data-action = "stop"]');
//   let bodyColor = document.querySelector('body');
//
// setInterval((function interval() {
//
//
//   start.addEventListener('click');
//
// }),1000);



////////// доп 7 модуль 8


  /*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  - Если введено подходящее количество, то outline инпута становится зеленым,
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

  // const inputs = document.querySelectorAll('.input');
  //
  // inputs.forEach(inp => inp.addEventListener('blur', validator));
  //
  // function validator(e) {
  //   const dataLength = Number(e.target.getAttribute('data-length'));
  //   const inputLength = e.target.value && e.target.value.length;
  //
  //   ['invalid', 'valid'].forEach(className => e.target.classList.remove(className));
  //
  //   if (inputLength) {
  //     if (inputLength === dataLength) {
  //       e.target.classList.add('valid');
  //     } else {
  //       e.target.classList.add('invalid');
  //     }
  //   }
  // }


// let arr = ['hello'];
//
// arr[1] = 1;
// console.log(arr);
// let bbb = 2;
//
// arr[bbb] = 'Ajax';
//
// console.log(arr);


  //////////////////////////////////// модуль 8 доп1 ///////////////
  /*
    Напишите скрипт который реализует следующий функционал.
    Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
  */

  // let btnClick = document.querySelector('.button');
  //
  // let myArray = ["#006400", "#bdb76b","#8b008b","#556b2f","#ff8c00","#9932cc","#8b0000"];
  //
  // let clickPlus = () => {
  //   btnClick.textContent  = Number(btnClick.textContent) + 1;
  //
  //   let rand = myArray[Math.floor(Math.random() * myArray.length)];
  //   btnClick.style.backgroundColor = rand;
  // };
  //
  // btnClick.addEventListener('click', clickPlus);


  // let btn = document.querySelector('.button');
  // let btnFunk = () => btn.textContent  = Number(btn.textContent) + 1;
  // btn.addEventListener('click', btnFunk);



  // четыре
  // 4. Есть текстовое поле в котором написано "Наведи на меня мышь - а потом убери!".
  // Когда мышка выходит за пределы текстового поля - через алерт вывести сообщение "Привет!"



  // let blurAlert = () => {
  //
  //   if (pole.type === 'mouseout') {
  //     alert('qeqweqe');
  //   }
  //
  // };

  // pole.addEventListener('focus', blurAlert);








