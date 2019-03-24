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


