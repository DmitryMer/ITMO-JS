// 1 дз 1 задание

let garden = 10 * 100; // узнаем площадь сада в метрах
let gryadka = 15 * 25; // узнаем текущую занятую площадь грядками

let difference = garden - gryadka; //отнимем от всей площади занятую площадь
console.log('Осталось незанято ' + difference + ' метров');

// 1 дз 2 задание

let dmAreaCircle = 15; /*- площадь овала в дм*/

let smAreaCircle = dmAreaCircle * 100; /*- площадь овала в см*/

let smCutCircle = 600; /*- вырезанный овал в см*/

let smAreaEllipse = smAreaCircle - smCutCircle; /*- итоговая площадь овального кольца*/

console.log('Итоговая площадь овального кольца равна ' + smAreaEllipse); 

// 1 дз 3 задание

let a = parseFloat(prompt('Введите число a'));

let b = parseFloat(prompt('Введите число b'));

let c = parseFloat(prompt('Введите число c'));

if (a < b && a < c) {
	alert('Самое маленькое число это ' + a);
} else if (b < a && b < c) {
	alert('Самое маленькое число это ' + b);
} else if (c < a && c < b) {
	alert('Самое маленькое число это ' + c);
} else {
	alert('Введенное значение некорректное');
}
 

// 1 дз 4 задание
	
let number = 10;

let n = prompt('Выберите число n');

let m = prompt('Выберите число m и посмотрите ближайшее число в консоли ');


let num1 = Math.abs(number - n); 
	
let num2 = Math.abs(number - m);

if (num1 < num2) {
	console.log('Ближайшее число это ' + n);
} else {
	console.log('Ближайшее число это ' + m);
}

