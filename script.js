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

 var a = 5; var b = 2; var c = 3; 

if (a < b && a < c) {
	console.log('Самое маленькое число ' + a);
} else if (b < a && b < c) {
	console.log('Самое маленькое число ' + b);
} else {
	console.log('Самое маленькое число ' + c);
}

// 1 дз 4 задание

var number = 10;

var n = 8.5;
var m = 11.45;


var num1 = Math.abs(number - n); 
	
var num2 = Math.abs(number - m);

if (num1 < num2) {
	console.log('Ближайшее число это ' + n);
} else {
	console.log('Ближайшее число это ' + m);
}