;!function(){
	window.myUtils = {
		minArr: function(arr) {
			let min = Math.min.apply(null, arr);
			console.log(min); //минимальное число
		},
		maxArr: function(arr) {
			let max = Math.max.apply(null, arr);
			console.log(max); //максимальное число
		},
		averageArr: function(arr) {
			let result = arr.reduce((a, b) => (a + b)) / arr.length;
			console.log(result); //поиск среднего арифметического
		},
		copyArr: function(arr) {
			let newArr = arr.slice();
			newArr.shift(); //уберем первый элемент, что бы убедиться, что это копия
			console.log(newArr); //копия массива
		},
	};
}();


