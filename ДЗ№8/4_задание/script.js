let books = [
	{
		article: 412425,
		author: 'Виктор Пелевин',
		title: 'Generation-P',
		image: 'generation.jpg',
		description: 'Выпускник Литинститута Вавилен Татарский через карьеру в рекламном бизнесе России 1990-х годов проходит путь от продавца в ларьке до цифрового воплощения мужа богини Иштар.',
	},
	{
		article: 153235,
		author: 'Джек Лондон',
		title: 'Мартин Иден',
		image: 'marten.jpg',
		description: 'Действие романа происходит в начале XX века в Окленде (Калифорния, США). Мартин Иден — рабочий парень, моряк, выходец из низов, примерно 21 года от роду, случайно знакомится с Руфью Морз — девушкой из состоятельной буржуазной семьи.',
	},
	{
		article: 451236,
		author: 'Джон Рональд Руэл Толкин',
		title: 'Властелин колец',
		image: 'rings.jpg',
		description: 'Роман-эпопея английского писателя Дж. Р. Р. Толкина, одно из самых известных произведений жанра фэнтези. «Властелин колец» был написан как единая книга, но из-за объёма при первом издании его разделили на три части — «Братство Кольца», «Две крепости» и «Возвращение короля».',
	},
	{
		article: 125632,
		author: 'Михаил Веллер',
		title: 'Приключения майора Звягина',
		image: 'zvyagin.jpg',
		description: 'Действие романа "Приключения майора Звягина" происходит в перестроечном Ленинграде. Главный герой - Леонид Звягин, майор в отставке, а на момент действия книги - врач скорой помощи.',
	},
];

function booksList(elem) {
	let idBooks = document.getElementById('books');
	idBooks.innerHtml = '';
	idBooks.style.display = 'flex';
	idBooks.style.flexWrap = 'wrap';

	for (let i = 0; i < elem.length; i++) {

		//добавляем артикул
		let article = document.createElement('h4');
		article.innerText = 'Артикул : ' + elem[i].article;

		//добавляем автора
		let author = document.createElement('h3');
		author.innerText = elem[i].author;

		//добавляем название
		let title = document.createElement('h2');
		title.innerHTML = elem[i].title;

		//картинку
		let image = document.createElement('img');
		image.setAttribute('src', 'img/' + elem[i].image);
		image.style.border = 'solid black';
		image.style.width = '120px';
		image.style.height = '160px';

		//описание
		let description = document.createElement('p');
		description.innerHTML = '<em>' +'Описание : ' + '</em>' + elem[i].description;
		description.style.marginRight = '10px';

		let line = document.createElement('hr');


		let div = document.createElement('div');

		div.style.width = '50%';

		div.appendChild(article);
		div.appendChild(author);
		div.appendChild(title);
		div.appendChild(image);
		div.appendChild(description);
		div.appendChild(line);

		idBooks.appendChild(div);
	}
	
}

booksList(books);