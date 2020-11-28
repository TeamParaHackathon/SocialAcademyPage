const list_items = [
	"Principio de Programacion con Scracht",
	"Python para todos",
	"Java Desde 0",
	"Fundamentos de programacion en Java",
	"JavaScript",
	"EL lenguaje de programacion en C#",
	"Manual de Programacion en C++",
	"Introduccion a ASP.NET(Presentacion)",
	"Programador PHP",
	"Taller en PHP",
	"Introducción a Objective-C (Presentación)",
	"Programación con Objective-C",
	"App iOS para buscar negocios locales",
	"Aprendizaje de Swift Language",
	"Manual de Matlab",
	"Introduction to Matlab for engineering students (Inglés)",
	"Objective C (Presentación)",
	"Introduccion a Angular",
	"Fundamentos de Angular",
	"Programacion Movil(Android Studio)",
	"Programacion MOvil (iOS)",
	"Programacion en Flutter",
	"Manual de HMTL y CSS3",
	"Programacion en Visual Basic",
	"Manual de Visual Basic",
	"Instalacion y Configuracion de LINUX",
	"Fundamentos de Angular",
	"Programacion Movil(Android Studio)",
	"Programacion MOvil (iOS)",
	"Programacion en Flutter"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 10;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);