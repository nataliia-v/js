'use strict'

// let title = document.createElement('h2');
// title.classList.add('red-text');
// title.textContent = 'Hello';
// let div = document.querySelector('.first');
// div.append(title);
// div.innerHTML += '<ul class="myList"><li>ocean</li></ul>';
//
//
// div.insertAdjacentHTML('afterend', '<p>bla bla bla </p>');
// let text = document.querySelector('p');
// text.classList.add('green');
// let textGreen = document.querySelector('.green');
// textGreen.style.color = 'green';
//
//
// let image = document.createElement('img');
// image.src = 'https://www.ctvnews.ca/polopoly_fs/1.4037876!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg';
// div.append(image);
// image.classList.add('img-style');
// image.style.display = 'block';
// image.style.width = '300px';



      ////////////           ///////////          FIRST TASK         ///////////////        //////////


/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

////  вариант 1

// const categories  = document.querySelector('.categories');
// console.log(categories);
//
// Array.from(categories.children).forEach((li) => {
// // //  Array.from приводит HTMLCollection в обычный массив, у которого есть метод forEach
//
//   const categoryName = li.childNodes[0].textContent;
//   const liCount = li.childNodes[1].childElementCount;
//
//   console.log(`Category: ${categoryName}`);
//   console.log(`The number of nested li: ${liCount}`);
// });


/// вариант 2

// const items = document.querySelectorAll('.categories >li');
// // items.forEach(function(item, i, arr){item.children.length}return item[i]);
// items.forEach(item => console.log(`Categories: ${item.firstChild.textContent} Length: ${item.childNodes[1].childElementCount}`));
// // console.log(items);


////////////           ///////////          SECOND TASK         ///////////////

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


// let list = document.querySelector('.list');
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';


////////////           ///////////          THIRD TASK         ///////////////

/*
  Дан ul склассом .list и массив строк.

  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
//
// const list = document.querySelector('.list');
//
// const mark = elements.reduce((string, i) => string + `<li>${i}</li>`, '');
// list.innerHTML = mark;

////////////           ///////////          fourth TASK         ///////////////

/*
  Напишите скрипт для создания галлереи изображений.

  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];
//
// const gallery = document.querySelector('.gallery');
// const mark = galleryItems.reduce((acc, image)=> acc + `<li><img class = 'sizes' src="${image.url}" alt="${image.alt}"></li>`, '');
// gallery.innerHTML = mark;
// const sizes = document.querySelectorAll('.sizes');
// sizes.forEach(image => image.style.width = '300px');
// gallery.style.listStyle = "none";


////////////           ///////////          fifth TASK         ///////////////
/*
  Есть список с классом .size-filter из произвольного
  количества чекбоксов, каждый из которых содержит
  размер одежды в фильтре.

  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.

  Возвращает массив значений атрибута value.
*/

// let arrInput = document.querySelectorAll('input:checked');
// console.log(arrInput);
//
// function collectInputData(inputs) {
//
//   return Array.from(inputs).map(element =>  element.value);
// }
//
// console.log(collectInputData(arrInput));


////////////           ///////////          SIXTH TASK         ///////////////

/*
  Создайте функцию createMovieCard(), которая
  создает и возвращает DOM-узел карточки кинофильма.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// function createMovieCard() {
//   let movie = document.querySelector('.movie');
//   movie.innerHTML = `<img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
//
//   <div class="movie__body">
//   <h2 class="movie__title">The Godfather</h2>
//   <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//     would-be killers, launching a campaign of bloody revenge.</p>
//
//      <p class="movie__date">Released: 1972-03-14</p>
//      <p class="movie__rating">Rating: 8.6</p>
//       </div>`
//   // let elem = document.createElement('img');
//   // elem.classList.add('movie__image');
//   // elem.src='http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//   // elem.alt='movie image';
//   //
//   // let elemTextContainer = document.createElement('div');
//   // let textMain = document.createElement('h2');
//   // textMain.classList.add('movie__title')
//   // let textP1 = document.createElement('p');
//   // textP1.classList.add('movie__description')
//   // let textP2 = document.createElement('p');
//   // textP2.classList.add('movie__date')
//   // let textP3 = document.createElement('p');
//   // textP3.classList.add('movie__rating');
//   //
//   // textMain.textContent = 'The Godfather';
//   // textP1.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
//   // textP2.textContent = 'Released: 1972-03-14';
//   // textP3.textContent = 'Rating: 8.6';
//   // elemTextContainer.append(textMain,textP1,textP2,textP3);
//   // movie.append(elem, elemTextContainer);
//
// }
// createMovieCard();



////////////      ///////////          SEVENTH TASK         ///////////////

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// function randomColor() {
//     let result = '';
//     let max = 255;
//     let a = Math.floor(Math.random() * (255 + 1) );
//     let b = Math.floor(Math.random() * (255 + 1) );
//     let c = Math.floor(Math.random() * (255 + 1) );
//     return result = `rgb(${a}, ${b}, ${c})`;
// }
// console.log(randomColor());

  // let userInput = +prompt("Enter a number");
  //
  // function randomColor() {
  //   let result = '';
  //   let max = 255;
  //   return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
  // }
  // console.log(randomColor());
  //
  // function createBoxes(num) {
  //   let container = document.createElement('div');
  //   let mainDiv = document.querySelector('#root');
  //   let i = 1;
  //   let width = 30;
  //   let height = 30;
  //
  //   do {
  //     // let divs = document.createElement("div");
  //     // divs.style.backgroundColor = randomColor();
  //
  //     // divs.style.width = width +"px";
  //     // divs.style.height = height + "px" ;
  //
  //     container.innerHTML += `<div style='width: ${width +"px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
  //     i++;
  //     width += 10;
  //     height += 10;
  //
  //   } while (i <= num);
  //
  //   mainDiv.append(container);
  // }
  //
  // createBoxes(userInput);





// //========== Самые верхние элементы дерева доступны напрямую из document
//
// // Это свойство ссылается на DOM-объект для тега html
// console.log("document.documentElement: ", document.documentElement);
// // Cоответствует тегу body
// console.log("document.body: ", document.body);
// // Соответствует тегу head
// console.log("document.head: ", document.head);
//
//
// //=========== Работаем с body
// const body = document.body;
// // выберет всех детей body включая текстовые узлы
// console.log("body.childNodes: ", body.childNodes);
// // выберет всех детей body которые являются элементами
// console.log("body.children: ", body.children);
//
// // выберет первого ребенка родителя, включая тектовые узлы
// console.log("body.firstChild: ", body.firstChild);
// // выберет первого ребенка родителя который является элементом, это и будет ul
// console.log("body.firstElementChild: ", body.firstElementChild);
//
// //=============== Работаем со списком
// const list = body.firstElementChild;
// console.log("list.parentNode: ", list.parentNode);
// console.log("list.childNodes: ", list.childNodes);
// console.log("list.children: ", list.children);
//
// //================== Выберем второй li внутри ul
// const secondItem = list.children[1];
// console.log("secondItem: ", secondItem);
//
// // Родитель
// console.log("secondItem.parent:", secondItem.parent);
//
// // Дети
// console.log("secondItem.childNodes: ", secondItem.childNodes);
// console.log("secondItem.children:", secondItem.children);
//
// // Первые ребенок
// console.log("secondItem.firstChild:", secondItem.firstChild);
// console.log("secondItem.firstElementChild:", secondItem.firstElementChild);
//
// // Последний ребенок
// console.log("secondItem.lastChild:", secondItem.lastChild);
// console.log("secondItem.lastElementChild:", secondItem.lastElementChild);
//
// // Сосед слева
// console.log("secondItem.previousSibling: ", secondItem.previousSibling);
// console.log(
//   "secondItem.previousElementSibling: ",
//   secondItem.previousElementSibling
// );
//
// // Сосед справа
// console.log("secondItem.nextSibling: ", secondItem.nextSibling);
// console.log("secondItem.nextElementSibling: ", secondItem.nextElementSibling);


/*
  1. Модифицируйте готовую функцию createPostCard() из задания
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
    чтобы она принимала объект post с данными для заполнения полей
    в карточке.

  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает
    массив DOM-элементов всех постов.

  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
// const postsdata = [
//   {
//     img: "https://placeimg.com/400/150/arch",
//     title: "Post title 1",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//     link: 'link-1.com'
//   },
//   {
//     img: "https://placeimg.com/400/150/nature",
//     title: "Post title 2",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//     link: 'link-2.com'
//   },
//   {
//     img: "https://placeimg.com/400/150/archi",
//     title: "Post title 3",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//     link: 'link-3.com'
//   }
// ];
//
// function createPostCard(postdata) {
//   let cards = document.querySelector('.cards');
//   cards.innerHTML += `
// <div class = "cardItem">
// <img class="card__image" src="${postdata.img}" alt="image">
//   <div class="card__body">
//   <h2 class="card__title">${postdata.title}</h2>
//   <p class="card__description">${postdata.text}</p>
//      <p class="card__link">${postdata.link}</p>
//       </div>
// </div>`
// }
//
// const createCards = (posts) => posts.map((post) => createPostCard(post));
//
// createCards(postsdata);





// function createPostCard(post) {
//   return `
//   <div class="movie">
//     <img class="movie__image" src="${post.img}" alt="movie image">
//     <div class="movie__body">
//       <h2 class="movie__title">${post.title}</h2>
//       <p class="movie__description">
//         ${post.text}
//       </p>
//     </div>
//   </div>`
// }
// createPostCard(postsdata[0])
//
// function createCards(posts) {
//   return posts.map((post) => createPostCard(post))
// }
//
// function renderCards(posts) {
//   let cards = document.querySelector('.cards');
//   createCards(posts).forEach(card => {
//     cards.insertAdjacentHTML('beforeend', card);
//   })
// }
//
// renderCards(postsdata);
