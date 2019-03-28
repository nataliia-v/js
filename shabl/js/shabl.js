// const galleryItems = [
//   { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
//   { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
//   { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
//   { img: 'https://placeimg.com/300/150/people', text: 'people' },
//   { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
//   { img: 'https://placeimg.com/300/150/any', text: 'random' }
// ];
//
// const container = document.querySelector('.gallery-content');
// const source = document.querySelector('#gallery-item').innerHTML.trim();
// const template = Handlebars.compile(source);
//
// const markup = galleryItems.reduce((acc, item) => acc + template(item), '');
// container.innerHTML = markup;

// Модуль 11 доп 1
/*
* К pen уже подключен Handlebars.
* Используй встроенные шаблоны и метод Handlebars.compile
*
* Создай шаблон элемента списка указаного на вкладке HTML.
* Отрендери список в DOM по данным из массива products.
*/

// const products = [
//   { name: "Apples", quantity: 50 },
//   { name: "Grapes", quantity: 44 },
//   { name: "Cheese", quantity: 128 },
//   { name: "Milk", quantity: 93 }
// ];
//
// const container = document.querySelector(".products");
// const source = document.querySelector("#productItem").innerHTML.trim();
// const template = Handlebars.compile(source);
// const marcup = products.reduce((acc, item) => acc + template(item), "");
//
// container.innerHTML = marcup;


// Модуль 11 доп 2
/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 *
 * Если в объекте поле favourite=true, в посте должна быть
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
*/

// const posts = [
//   {
//     title: "Phasellus volutpat metus",
//     text:
//       "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
//     favourite: true
//   },
//   {
//     title: "Nulla consequat massa",
//     text:
//       "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     favourite: false
//   },
//   {
//     title: "In enim justo",
//     text:
//       "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
//     favourite: true
//   },
//   {
//     title: "Vestibulum ante ipsum",
//     text:
//       "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
//     favourite: false
//   }
// ];

const postsContainer = document.querySelector(".posts");
const postItem = document.querySelector("#postItem").innerHTML.trim();
const template = Handlebars.compile(postItem);
const favIicon = document.querySelector(".fav-icon");

const postsList = posts.reduce((acc, item) => acc + template(item), "");


postsContainer.innerHTML = postsList;

// Модуль 11 доп 3
/*
  Напишите функцию validate которая проверяет поля формы
  firstname и lastname и возвращает результат в виде
  обьекта со свойствами 'first name' и 'last name'.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }

  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.

  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.

  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");
//
// submitBtn.addEventListener("click", validate);
//
// function validate(evt) {
//   evt.preventDefault();
//   let bbb = /^[a-z]{2,}\s[a-z]{2,}$/ig;
//
// }




