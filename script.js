'use strict';

let title = prompt("Как называется ваш проект?", "Название проекта");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let rollback = 30;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let percent = fullPrice * (rollback/100);
let servicePercentPrice = fullPrice - percent;
console.log(Math.ceil(servicePercentPrice));

switch(true){
    case (fullPrice>=30000):
        console.log("Даем скидку в 10%");
        break;
    case (fullPrice>=15000 && fullPrice<30000):
        console.log("Даем скидку в 5%");
        break;
    case (fullPrice<15000 && fullPrice>=0):
        console.log("Скидка не предусмотрена");
        break;
    case (fullPrice<0):
        console.log("Что-то пошло не так:(");
        break;
    default:
        console.log("Проверьте правильность введенных данных");
}