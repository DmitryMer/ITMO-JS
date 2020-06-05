let goods = [
	{
		title: 'Кресло',
		price: 30000,
		art: 14253,
		img: 'armchair.jpg',
	},{
		title: 'Кровать',
		price: 50000,
		art: 23512,
		img: 'bed.jpeg',
	},
	{
		title: 'Стул',
		price: 20000,
		art: 53212,
		img: 'chair.jpg',
	},
];


function createGoods(arr) {
	let idGoods = document.getElementById('goods');
	idGoods.innerHtml = '';
	idGoods.style.display = 'block';
	idGoods.style.marginLeft = '40%';

	for (let i = 0; i < arr.length; i++) {
		let title = document.createElement('h2');
		title.innerText = arr[i].title;
		title.style.marginLeft = '40px';

		let img = document.createElement('img');
		img.setAttribute("src", "img/" + arr[i].img);
		img.style.border = 'solid black';
		img.style.width = '150px';
		img.style.height = '150px';
		
		let price = document.createElement('p');
		price.innerText = "Стоимость : " + arr[i].price + " руб.";

		let art = document.createElement('em');
		art.innerText = "Артикул " + arr[i].art;
		
		let div = document.createElement('div');
		
		div.style.width = "50%";
		
		div.appendChild(title);
		div.appendChild(img);
		div.appendChild(price);
		div.appendChild(art);
		
		idGoods.appendChild(div);
	}
}

createGoods(goods);