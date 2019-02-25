'use strict'

function Cashier(name, productDatabase) {
  // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
}

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

// /* Пример использования */
// const mango = new Cashier('Mango', products);
//
// // Проверяем исходные значения полей
// console.log(mango.name); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0
//
// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// const totalPrice = mango.countTotalPrice(order);
//
// // Проверям что посчитали
// console.log(totalPrice); // 110
//
// // Вызываем getCustomerMoney для запроса денег покупателя
// mango.getCustomerMoney(300);
//
// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300
//
// // Вызываем countChange для подсчета сдачи
// const change = mango.countChange();
//
// // Проверяем что нам вернул countChange
// console.log(change); // 190
//
// // Проверяем результат подсчета денег
// if(change !== null) {
//   // При успешном обслуживании вызываем метод onSuccess
//   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
// } else {
//   // При неудачном обслуживании вызываем метод onError
//   mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }
//
// // Вызываем reset при любом исходе обслуживания
// mango.reset();
//
// // Проверяем значения после reset
// console.log(mango.customerMoney); // 0










