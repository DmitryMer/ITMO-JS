//10 ДЗ 1 задача

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

class BasketPrices {
	_productsArr = [];
	_quantityProducts = 0;
	_sumProducts = 0;

	addProduct(title) {
		this._productsArr.push(title);
	}

	getSummProducts(){
		let sum = 0;
		for (let i = 0; i < this._productsArr.length; i++) {
		sum += this._productsArr[i].price;
		}
		return sum;
	}

	getQuantityProducts() {
		this._quantityProducts = this._productsArr.length;

		return this._quantityProducts;
	}
};

let basket = new BasketPrices();

let product1 = new Product('guitar', 500);
let product2 = new Product('piano', 700);
let product3 = new Product('drums', 800);

basket.addProduct(product1);
basket.addProduct(product2);
basket.addProduct(product3);

console.log('Общая сумма товара :' + ' ' + basket.getSummProducts());
console.log('Общее кол-во товара :' + ' ' + basket.getQuantityProducts());

//10 ДЗ 2 задача

class Person {
	constructor(name, age, gender, interest) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.interest = interest;
	}

	getString() {
		return 'Человек: ' + this.name + 'Возраст: ' + this.age + ' лет. Пол: ' + this.gender + ' Интересы: ' + this.interest;
	}

}

class Student extends Person {
	constructor(name, age, gender, interest, institute) {
 	super(name, age, gender, interest);
  	this.institute = institute;
	}
	getString() {
		return 'Студент: ' + this.name + 'Возраст: ' + this.age + ' лет. Пол: ' + this.gender + ' Интересы: ' + this.interest + ' Обучается в: '
		+ this.institute;
	}
}


let student = new Student('Иван. ', '25', 'Мужской.', 'музыка, программирование.' ,'ИТМО');
console.log(student.getString());

//10 ДЗ 3 задача 

function User() {
  this.getString = function() {
    return ("Имя: " + this.name + ", Возраст:" + this.age);
  };
}

User.createAnonymous = function() {
  let user = new User;
  user.name = 'Аноним';
  user.age = 'Неизвестно'
  return user;
}

User.createData = function(userData) {
  let user = new User;
  user.name = userData.name;
  user.age = userData.age;
  return user;
}

let guest = User.createAnonymous();
guest.getString();

let knownUser = User.createData({
  name: 'Петр',
  age: 30
});

console.log(knownUser.getString());
console.log(guest.getString()); 

// 10 ДЗ 4 задание

//#1 window.focus - Метод window.focus позволяет сфокусироваться на окне. Он работает по-разному в разных ОС и браузерах.
//#2 window.parent - Ссылка на родительский объект window или родительский iframe. Если у объекта window нет родителя, то свойство parent данного объекта будет ссылаться на сам объект.
//#3 window.name - Свойство name может использоваться для установки и получения имени текущего окна. Оно становится доступным после его создания.
//#4 window.frames - Возвращает само окно, являющееся объектом в виде массива, распечатывая элементы текущего окна.
//#5 window.opener - Если окно было открыто из другого окна, то оно сохраняет ссылку на него в свойстве window.opener.
//#6 window.history - Позволяет переходить на предыдущие и следующие страницы в history браузера, программным образом эмулируя кнопки Back/Forward.
//#7 window.top - Ссылка на верхнее окно в иерархии фреймов, возвращает непосредственного родителя window, свойство window.top дает самое верхнее окно в иерархии. 
//#8 window.location - Получает/устанавливает URL окна и его компоненты.
//#9 window.blur - является программным эквивалентом действия, когда пользователь переключает фокус с текущего окна.
//#10 window.event - Возвращает событие, которое в настоящее время обрабатывается кодом сайта.


