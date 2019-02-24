
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16 ){
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(logins, login) {

  if (logins.indexOf(login) !==-1) {
    return false;
  } else  {
    return true;
  }
};

const addLogin = function(logins, login) {
  if (isLoginValid (login) === false){
    console.log('Mistake! Login should be from 4 to 16 symbols')
  } else if (isLoginUnique(logins, login) === true) {
    logins.push(login);
    console.log('Логин успешно добавлен!')
  } else {
    console.log('Такой логин уже используется!')
  }
};
//Проверка
addLogin(logins,'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins,'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins,'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins,'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'









