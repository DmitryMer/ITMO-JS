//6 ДЗ 1 задание

let a = {
    name: 'static',
    count: 0
}

function foo(obj, key, content) {
    let arr = [];

    for (let i = 0; i < content; i++) {

        let newArr = Object.assign({}, a);
        newArr[key] = i;
        arr.push(newArr);
    }
    return arr;
}

console.log(foo(a, "count", 10));

//6 ДЗ 2 задание

function makeRand(num) {

    let usedNumbers = [];

    function f() {
        
        if (usedNumbers.length == num) {
             usedNumbers = [];
        }

        let i = Math.floor(Math.random() * num) + 1;
        
        if (usedNumbers.includes(i)) {
            return f();
        } else {
            return (usedNumbers.push(i),i);
        }
 
    }
    return f;
}
 
var x = makeRand(100);
 
document.write(x()+"<br>");
document.write(x()+"<br>");



//6 ДЗ 3 задание

 var student = {name: 'Вася',
                surname: 'Иванов',
                age: '26',
                interests: ['IT',' Музыка',' Автомобили',' Спорт'],
                education:  'ИТМО',
                summary() {
                    return (this.name + ' ' + this.surname + ', ' + this.age + ' лет, ' + this.interests + ', Учится в ' + this.education);
                    }
                };

console.log(student.summary());


//6 ДЗ 4 задание


function factorial(n) {
    if (n == 1) {
       return 1;
    } else {
        return n * factorial(n - 1);
    }
}

alert(factorial(5));


//6 ДЗ 5 задание

let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];


arr.sort((a,b) => a.price-b.price);

console.log(arr);