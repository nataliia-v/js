  'use strict'


// const dog = {
//   name: "Mango",
//   age: 2,
//   isHappy: true
// };
//
// const dogJSON = JSON.stringify(dog);//////переводим в JSON
//   console.log(dogJSON);
//
//   let test = JSON.parse(dogJSON);/////////из JSON в обьект
//   console.log(test);
//   d2fa1b1d0974a0688d29581318fdbc7d///  мой id darksky.net
//   let proxy = 'https://cors-anywhere.herokuapp.com/';/// обманываем будто зашли через хероку
//   const {icon, summary, temperature} = data.currently; //// вместо записи: data.currently.temperatureDegree.textContent = temperature
  // Сраничка погоды

  // let temperatureDegree = document.querySelector('.temperature-degree');
  // let temperatureDescription =  document.querySelector('.temperature-description');
  // let locationTimezone =  document.querySelector('.location-timezone');
  // let iconID = document.querySelector('.icon');
  // let temperatureSection = document.querySelector('.temperature-section');
  // let temperatureUnit = document.querySelector('.temperature-unit');
  // let onLoad = ()=> {
  //   let lat;
  //   let long;
  //   let celsus, tempBuffer;
  //
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(position => {
  //       lat = position.coords.latitude;
  //       long =  position.coords.longitude;
  //
  //       let proxy = 'https://cors-anywhere.herokuapp.com/';/// обманываем будто зашли через хероку
  //
  //       let api = `${proxy}https://api.darksky.net/forecast/d2fa1b1d0974a0688d29581318fdbc7d/${lat},${long}`;
  //
  //       fetch(api)
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log(data);
  //           const {icon, summary, temperature} = data.currently;//// вместо записи: data.currently.temperat
  //           temperatureDegree.textContent = temperature;
  //           temperatureDescription.textContent = summary;
  //           locationTimezone.textContent=data.timezone;
  //           celsus = 5/9*(temperature-32);
  //           setIcon(icon, iconID);
  //           tempBuffer = temperature;
  //           temperatureSection.addEventListener('click', setTemperature);
  //         })
  //     })
  //   }
  //
  //   function setTemperature (){
  //     if (temperatureUnit.textContent==='F'){
  //       temperatureUnit.textContent='C';
  //       temperatureDegree.textContent = Math.floor(celsus);
  //     } else {
  //       temperatureUnit.textContent='F';
  //       temperatureDegree.textContent = tempBuffer;
  //     }
  //
  //   }
  //
  //   function setIcon(icon, iconID){
  //     const skycons = new Skycons({color: "white"});
  //     const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  //     skycons.play();
  //     return skycons.set(iconID, Skycons[currentIcon]);
  //   }
  //
  // };
  //
  // window.addEventListener('load', onLoad);

  /*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому адресу.
  Обязательно обработать вариант с ошибкой запроса используя catch.

  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/


  // доп 1 модуль 10
  // const input = document.querySelector("input");
  // const form = document.querySelector(".search-form");
  // const result = document.querySelector(".result");
  //
  // form.addEventListener("submit", fetchCountryData);
  //
  // /*
  // @param {FormEvent} evt
  // */
  // function fetchCountryData(evt) {
  //   evt.preventDefault();
  //   let API_URL = `https://restcountries.eu/rest/v2/name/${input.value}?fullText=true`;
  //   fetch(API_URL)
  //     .then(response=> response.json())
  //     .then(data=>{
  //       console.log(data);
  //       result.innerHTML = `<p>Country name:${data[0].name}</p><p>Capital: ${data[0].capital}</p><p>Main currency: ${data[0].currencies[0].code}</p><p>Flag: <img style="width:300px" src="${data[0].flag}"></p>`;
  //     })
  //     .catch(
  //       result.innerHTML = "Такой страны нет");
  // }


  // доп 2 модуль 10

  /*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.

  Формат полного url таков:
    https://api.github.com/users/имя-пользователя

  Документация по Git API:
    https://developer.github.com/v3/

  С помощью fetch сделать запрос по составленому адресу.
  Обязательно обработать вариант с ошибкой запроса используя catch.

  Результат запроса вывести в поле result в формате:
    Avatar: аватартка
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев

  Все необходимые данные есть в ответе от API.
*/
  //
  // const input = document.querySelector("input");
  // const form = document.querySelector(".search-form");
  // const result = document.querySelector(".result");
  //
  // form.addEventListener("submit", fetchUserData);
  //
  // /*
  // @param {FormEvent} evt
  // */
  // function fetchUserData(evt) {
  //   evt.preventDefault();
  //   const API_URL = `https://api.github.com/users/${input.value}`;
  //   fetch(API_URL)
  //     .then(response=>response.json())
  //     .then(data=>{
  //       console.log(data);
  //       result.innerHTML = `<p>Avatar:<img style="width:300px" src=   "${data.avatar_url}"></p><p>Username: ${data.login}</p><p>Bio:   ${data.bio}</p><p> Public repos: ${data.public_repos}</p>`;
  //     })
  //     .catch(result.innerHTML = `<p>NETU TAKOGO CHELOVEKA</p>`)
  // }


  // доп 3 модуль 10
  /*
    Документация API: https://jsonplaceholder.typicode.com/

    Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/

    Написать функцию fetchUsers, которая посылает get запрос.
    Результатом fetch будет массив объектов.

    В таблицу .user-table добавить строки для каждого пользователя.
    Каждая строка состоит из 5-ти столбцов указанного формата.
    Кол-во строк будет такое как и кол-во объектов пользователей в ответе.

      Имя | Почта | Город | Вебсайт | Компания
      Имя | Почта | Город | Вебсайт | Компания
      и так далее для каждого пользователя...
  */

  // const form = document.querySelector(".search-form");
  //   // const userTable = document.querySelector(".user-table");
  //   //
  //   // form.addEventListener("submit", fetchUsers);
  //   //
  //   // /*
  //   //   @param {FormEvent} evt
  //   // */
  //   // function fetchUsers(evt) {
  //   //   evt.preventDefault();
  //   //   fetch("https://jsonplaceholder.typicode.com/users/")
  //   //     .then(response => response.json())
  //   //     .then(data =>{
  //   //       console.log(data);
  //   //       data.forEach(el => {
  //   //         userTable.innerHTML += `<tr><td>${el.name}</td><td>${el.email}</td><td>${el.address.city}</td><td>${el.website}</td><td>${el.company.name}</td></tr>`
  //   //       });
  //   //
  //   //     })
  //   // }



  // доп 1 модуль 10
  /*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому адресу.
  Обязательно обработать вариант с ошибкой запроса используя catch.

  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

  // const input = document.querySelector("input");
  // const form = document.querySelector(".search-form");
  // const result = document.querySelector(".result");
  // // const API_URL = "https://restcountries.eu/rest/v2/name/";
  //
  // form.addEventListener("submit", fetchCountryData);
  //
  // /*
  //   @param {FormEvent} evt
  // */
  // function fetchCountryData(evt) {
  //   const name = input.value;
  //   evt.preventDefault();
  //   fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data[0]);
  //       result.innerHTML = `<p>Country name: ${data[0].name}</p><p>Capital: ${data[0].capital}</p><p>Main currency: ${data[0].currencies[0].code}</p><img style="width: 200px" src="${data[0].flag}">`
  //
  // доп 2 модуль 10
  /*
    Написать функцию fetchUserData, которая использует
    API_URL + текущее значение input для составления запроса.

    Формат полного url таков:
      https://api.github.com/users/имя-пользователя

    Документация по Git API:
      https://developer.github.com/v3/

    С помощью fetch сделать запрос по составленому адресу.
    Обязательно обработать вариант с ошибкой запроса используя catch.

    Результат запроса вывести в поле result в формате:
      Avatar: аватартка
      Username: логин
      Bio: описание профиля
      Public repos: кол-во открытых репозиториев

    Все необходимые данные есть в ответе от API.
  */

  // const input = document.querySelector("input");
  // const form = document.querySelector(".search-form");
  // const result = document.querySelector(".result");
  // // const API_URL = "https://api.github.com/users/";
  //
  // form.addEventListener("submit", fetchUserData);
  //
  // /*
  //   @param {FormEvent} evt
  // */
  // function fetchUserData(evt) {
  //   evt.preventDefault();
  //   let userName = input.value;
  //
  //   fetch(`https://api.github.com/users/${userName}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log('then data', data);
  //       result.innerHTML = `<p>Avatar: <img style="width: 300px" src="${data.avatar_url}"></p><p>Username: ${data.login}</p><p>Bio: ${data.bio}</p><p>Public repos: ${data.public_repos}</p>`
  //     })
  //     .catch(() => {
  //       result.innerHTML = `<p>User not found</p>`
  //     })
  //
  // }


  // доп 4 модуль 10
  /*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос
  на получение информации о пользоватеьте с id (число) введенным в input.
  Не забывайте что значение input это строка.

  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result

  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

  // const input = document.querySelector("input");
  // const form = document.querySelector(".search-form");
  // const result = document.querySelector(".result");
  //
  // form.addEventListener("submit", getUserById);
  //
  // function getUserById(evt) {
  //   evt.preventDefault();
  //   let userId = Number(input.value);
  //
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
  //     .then(response => {
  //       if (!response.ok) {
  //       throw Error(response.statusText);}
  //       return response.json()})
  //     .then(data => {
  //       console.log(data);
  //       result.innerHTML = `<p>id: ${data.id}</p><p>title: ${data.title}</p><p> completed: ${data.completed}</p>`
  //     })
  //     .catch(() => {result.innerHTML = `<p>Ошибка! Пользователя с таким id не существует</p>`})
  // }

  /*
  Написать приложение для работы с REST сервисом,
  все функции делают запрос и возвращают Promise
  с которым потом можно работать.

  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.

  - функция getUserById(id) - должна вернуть пользователя с переданным id.

  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

  - функция removeUser(id) - должна удалять из БД юзера по указанному id.

  - функция updateUser(id, user) - должна обновлять данные пользователя по id.
    user это объект с новыми полями name и age.

  Документацию по бэкенду и пример использования прочитайте
  в документации https://github.com/trostinsky/users-api#users-api.

  Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
  А так же панелью для вывода результатов операций с бэкендом.
*/

const form = document.querySelector(".search-form");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const form2 = document.querySelector(".create-form");
const userName = document.querySelector(".enterName");
const userAge = document.querySelector(".enterAge");
const inputDelUser = document.querySelector(".inputDelUser");
const form3 = document.querySelector(".delete-form");
const resultDel = document.querySelector(".resultDel");
const form4 = document.querySelector(".update-form");
let inputUpdate= document.querySelector(".inputUpdate");
const userName1 = document.querySelector(".enterName1");
const userAge1 = document.querySelector(".enterAge1");


function getAllUsers(event) {
  event.preventDefault();
  return fetch(`https://test-users-api.herokuapp.com/users/`)
    .then(response => response.json())
    .then(data => data.data)
}

function getUserById() {
  let id = input.value;
  return fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => {
            if (!response.ok) {
            throw Error(response.statusText);}
            return response.json()})
    .then(data => {
      // console.log(data);
      result.innerHTML = `<p>Name: ${data.data.name}</p><p>Age: ${data.data.age}</p><p>ID: ${data.data.id}</p>`

    })
    .catch(() => {result.innerHTML = `<p>Ошибка! Пользователя с таким id не существует</p>`})
}

function addUser(event) {
  event.preventDefault();
  const newUser = {
    name: `${userName.value}`,
    age: `${userAge.value}`,
  };
  fetch('https://test-users-api.herokuapp.com/users/', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));
}

function removeUser(event) {
  event.preventDefault();

  let idDel = inputDelUser.value;
  const isConfirmed = confirm(`Are you sure you want to delete the user with id ${idDel}?`);
  if (isConfirmed) {
    return fetch(`https://test-users-api.herokuapp.com/users/${idDel}`,{
      method: 'DELETE'
    }).then(() => {
      resultDel.innerHTML = `<p>Ok, user removed</p>`
    })
      .catch(error => console.log('ERROR' + error));
  }
}

function updateUser(event){
  event.preventDefault();
  let resultUpdate = inputUpdate.value;
  const updateUser = {
    name: `${userName1.value}`,
    age: `${userAge1.value}`,
  };

  fetch(`https://test-users-api.herokuapp.com/users/${resultUpdate}`, {
    method: 'PUT',
    body: JSON.stringify(updateUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));
}

form.addEventListener("submit", getAllUsers);
form.addEventListener("submit", getUserById);
form2.addEventListener("submit", addUser);
form3.addEventListener("submit", removeUser);
form4.addEventListener("submit", updateUser);


