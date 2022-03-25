const title = "Project name";
let screens = "Simple, complex, interactive";
let screenPrice = 3000;
const rollback = 77;
let fullPrice = 50000;
const adaptive = true;

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive
console.log('Тип данных переменной title - ' + typeof title);
console.log('Тип данных переменной fullPrice - ' +typeof fullPrice);
console.log('Тип данных переменной adaptive - ' +typeof adaptive);

//Вывести в консоль длину строки screens
console.log('Длина строки screens - ' + screens.length + ' символов');

/*Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и
 “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”*/
 console.log('Стоимость верстки экранов '+ screenPrice + ' рублей. \nСтоимость разработки сайта - ' + fullPrice + ' рублей.');

 //Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
 console.log(screens.toLowerCase().split(", "));

 //Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
let percent = fullPrice * (rollback/100);
console.log('Сумма выплат посреднику '+ percent + ' рублей.');

