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
let fullPrice;
let servicePercentPrice;
let allServicePrices;

const showTypeOf = function(variable){
console.log('Тип данных ' + variable, typeof variable);
};


const getRollbackMessage = function(price){
    switch(true){
        case (price>=30000):
            return "Даем скидку в 10%";
        case (price>=15000 && price<30000):
            return "Даем скидку в 5%";
        case (price<15000 && price>=0):
            return "Скидка не предусмотрена";
        case (price<0):
            return "Что-то пошло не так:(";
    }
};


const getAllServicePrices = function(){
    return servicePrice1 + servicePrice2;
};


 function getFullPrice(){
     return screenPrice + allServicePrices;
 }


const getTitle = function(){
    title = title.trim();
    return title[0].toUpperCase() + title.substring(1).toLowerCase();
};


const getServicePercentPrices = function(){
 return fullPrice - (fullPrice * (rollback/100));
};


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();



console.log('Длина строки screens - ' + screens.length + ' символов');
console.log('Стоимость верстки экранов '+ screenPrice + ' рублей. \nСтоимость разработки сайта - ' + fullPrice + ' рублей.');
console.log(getRollbackMessage(fullPrice));
console.log('Cтоимость за вычетом процента отката посреднику - ' + servicePercentPrice);