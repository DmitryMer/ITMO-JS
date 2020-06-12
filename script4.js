//4 Дз 1 задание

let str1 = prompt('Введите число');
let sum1 = 0;

for (var i = 0; i < str1.length; i++) {
	sum1 += parseFloat(str1[i]);
}

alert(`Сумма цифр этого числа равна ${sum1}`);

//4 Дз 2 задание

var string = 'JavaScript'

alert(string.replace(/r/ig, 'rr'))


//4 ДЗ 3 задание

function checkPass() {
	pass = prompt('Введите пароль');

	let regLow = /[a-z]/g;
	let regUp = /[A-Z]/g;
	let regUpLow = /[a-zA-Z]/g;
	let regDigit = /\d{2,}/;
	let regSymb =  /[!,$,#,%]/g;

	(pass.length < 9) ? alert('Длина пароля должна быть от 9 символов') :
	(!pass.match(regLow)) ? alert('Пароль должен содержать английские буквы нижнего регистра') :
	(!pass.match(regUp)) ? 	alert('Пароль должен содержать английские буквы верхнего регистра') :	
	(!pass.match(regUpLow)) ? alert('Пароль должен содержать английские буквы верхнего и нижнего регистра') :
	(!pass.match(regDigit)) ? alert('Пароль должен содержать более 2-х цифр'): 
	(!pass.match(regSymb)) ? alert('Пароль должен содержать один из неалфавитных символов (например, !, $, #, %)') :
	alert('Пароль введен успешно!');
}

checkPass();

