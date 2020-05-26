//5 ДЗ 1 задание
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];

function test(arr1, arr2) {
 if (arr1.length != arr2.length) return false;
 	
	for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
             if (arr1[i] == arr2[j]) { 
                 break;
             }
             if (j === arr1.length - 1) {
                 return false;
             }
        }
    }
   
    return true;
}

console.log(test(arr1, arr2));

//5 ДЗ 2 задание

 function range(start, end, step) {
        let arr = [];
        
        for (let i = start; i >= start && i <= end; i += step) {
            arr.push(i);
        }
        return arr;
    }

 console.log(range(1,10,3));


 //5 ДЗ 3 задание

 var student = {имя: 'Дмитрий',
               фамилия: 'Мережкин',
               возраст: '26',
               интересы: ['IT',' Музыка',' Автомобили',' Спорт'],
               'место обучения': 'ИТМО'
            };

function descript(about) {
        for (let key in about) {
            console.log(key + ' - ' + student[key]);
        }
 };
descript(student);


