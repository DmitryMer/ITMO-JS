// 3 ДЗ 1 Задание

let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];

let C1 = [];

let C2 = [];

C1.unshift(A); // Первый вариант 
C1.push(B);
	

C2.unshift(B); // Второй вариант 
C2.push(A);


// 3 ДЗ 2 Задание

let area = [ 1, null, 0, null, 1, null, 0, null, 1 ];

let table = '';

for (let i = 0; i < area.length; i ++) {
	if (area[i] === 0 ) {
		area[i] = '0';
	} else if (area[i] === 1) {
		area[i] = 'X';
	} else if (area[i] === null) {
		area[i] = '';
	}
}

table +='<table>' +'<tr><td>'+ `${area[0]}` +'</td><td>'+ `${area[1]}` +'</td><td>'+ `${area[2]}` +'</td></tr>';
table +='<tr><td>'+ `${area[3]}` +'</td><td>'+ `${area[4]}` +'</td><td>'+ `${area[5]}` +'</td></tr>';
table +='<tr><td>'+ `${area[6]}` +'</td><td>'+ `${area[7]}` +'</td><td>'+ `${area[8]}` +'</td></tr>' + '</table>';

document.write(table);


//  3 ДЗ 3 Задание

let arr = [12,4,3,10,1,20];

let min = arr[0], max = arr[0];

for (let i = 0; i < arr.length; i ++) {
	let arrs = arr[i];
	if (arrs > max) {
		max = arrs;
	}
	if (arrs < min) {
		min = arrs;
	}
}

for (let i = 0; i < arr.length; i ++) {
	if (arr[i] === min) {
		arr.splice(i, 1);
	}
}

for (let i = 0; i < arr.length; i ++) {
	if (arr[i] === max) {
		arr.splice(i, 1);
	}
}

console.log(arr);


//  3 ДЗ 4 Задание


let result = [];
let str = [];

for (let i = 1; i <= 999999; i ++) {
  var numStr = i.toString();
  
  while (numStr.length != 6 ) {
    numStr = '0' + numStr;
  }

  str.push(numStr);

  if (Lucky(i)) {
    result.push(i);
  }
}

function Lucky(num) {
  let str = String(num);
  
  let sum1 = Number(numStr[0]) + Number(numStr[1]) + Number(numStr[2]);
  let sum2 = Number(numStr[3]) + Number(numStr[4]) + Number(numStr[5]);
  
  return sum1 == sum2;
}

console.log(result.length);

