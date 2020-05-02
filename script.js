// 1 дз 1 задание

var garden = 10 * 100; // узнаем площадь сада в метрах
var gryadka = 15 * 25; // узнаем текущую занятую площадь грядками

var difference = garden - gryadka; //отнимем от всей площади занятую площадь
console.log('Осталось незанято ' + difference + ' метров');

// 1 дз 2 задание

var dmAreaCircle = 15; /*- площадь овала в дм*/

var smAreaCircle = dmAreaCircle * 100; /*- площадь овала в см*/

var smCutCircle = 600; /*- вырезанный овал в см*/

var smAreaEllipse = smAreaCircle - smCutCircle; /*- итоговая площадь овального кольца*/

console.log('Итоговая площадь овального кольца равна ' + smAreaEllipse); 

// 1 дз 3 задание

var a = prompt('Введите число a');

var b = prompt('Введите число b');

var c = prompt('Введите число c');

if (a < b && a < c) {
	alert('Самое маленькое число это ' + a);
} else if (b < a && b < c) {
	alert('Самое маленькое число это ' + b);
} else {
	alert('Самое маленькое число это ' + c);
}

// 1 дз 4 задание

var number = 10;

var n = prompt('Выберите число n');

var m = prompt('Выберите число m и посмотрите ближайшее число в консоли ');


var num1 = Math.abs(number - n); 
	
var num2 = Math.abs(number - m);

if (num1 < num2) {
	console.log('Ближайшее число это ' + n);
} else {
	console.log('Ближайшее число это ' + m);
}