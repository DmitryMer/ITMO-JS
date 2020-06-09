 //Кнопка для подтверждения ввода
let btnClick = document.getElementById('add_comment');


let user = {
	name: 'Вася',
	avatar: 'avatar.jpg'
};


btnClick.addEventListener('click', afterClicked);

function afterClicked() {
	//Нижний блок
	let lastComment = document.getElementById('block_text');

	let textArrea = document.getElementById('add_text').value; 

	if (textArrea !== '') {
		
		let div = document.createElement('div');

		//добавление аватара
		let avatr = document.createElement('img');
		avatr.setAttribute('src', 'img/' + `${user.avatar}`);
		avatr.style.width = '150px';
		avatr.style.height = '150px';

		//добавление даты
		let date = document.createElement('div');
   		date.innerHTML = new Date().toLocaleString();

		//добавление имени
		let textLogin = document.createElement('p');
		textLogin.style.marginLeft = '50px';
		textLogin.innerHTML = '<em>'+ `${user.name}` + '</em>';

		//добавление в div контента

		let textComment = document.createElement('p');
		textComment.innerHTML = textArrea;
		div.appendChild(textComment);
		div.appendChild(textLogin);
		div.appendChild(avatr);
		div.appendChild(date);

		lastComment.appendChild(div);

	} else {
		alert('Введите текст комментария');
	}
};