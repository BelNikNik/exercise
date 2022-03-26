"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

/*	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu_arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}*/


// Меню бургер
const iconMenu = document.querySelector('.header-main__menu-icon');
const menuBody = document.querySelector('.aside');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock')
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   

	new Chart( // инициализируем плагин
		document.querySelector('.chart'), // первым параметром передаем элемент canvas по селектору
		// вторым параметром передаем настройки в виде объекта
		{
			type: 'bar', // тип графика, в данном случае линейный
			data: { // общие данные графика в виде объекта
				labels: ['2020', '2019', '2018', '2017'], // метки по оси X
				datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
					{
						label: '', // название для определенного графика в виде строки
						data: [1, 6, 5, 8], // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
						backgroundColor: [
							'rgba(38, 185, 255, 1)',
							'rgba(46, 230, 255, 1)',
							'rgba(38, 185, 255, 1)',
							'rgba(45, 142, 255, 1)',
						],
					}
				]
			},
			options: {
			} // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
		}
	);
})

const ChartTwo = new Chart(
	document.getElementById('chartTwo'),
	{
		type: 'line',
		data: {
			datasets: [
				{
					label: '',
					data: [0, 10],
					borderColor: '#43E9FF',
				}
			],
			lebels: ['1 квартал', '2 квартал'],
		},
		options: {
		}
	}
);

const pieChart = new Chart(
	document.getElementById('pieChart'),
	{
		type: 'pie',
		data: {
			lebels: ['75%', '25%'],
			datasets: [
				{
					label: '',
					data: [25, 75],
					backgroundColor: [
						'#43E9FF',
						'#656CFF'
					],
					borderColor: [
						'#43E9FF',
						'#656CFF'
					],
				}
			]
		},
		options: {
		}
	}
);
