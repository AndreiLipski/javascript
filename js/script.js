'use strict'

// alert("Hello");

// let name = prompt("Как тебя зовут?");
// alert(`Тебя зовут ${name}`);

// let confirmResult = confirm("Хочешь учиться?");
// console.log(confirmResult);

// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const headElement = document.head;
// console.log(headElement);

// const bodyElement = document.body;
// console.log(bodyElement);

// const firstChildNode = bodyElement.childNodes;
// // console.log(firstChildNode);

// for (let e of firstChildNode) {
//     console.log(firstChildNode);
// }

// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);

// const elemsOne = document.querySelectorAll('.main_p');
// console.log(elemsOne);

// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo[2]);

// const elem = document.getElementById('a4');
// console.log(a4);

// const a = document.querySelector('.main_p');
// a.classList.add('activ');

// /ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
<div data-say-hi="yes">Привет!</div>

// Задача №2.
// Получить в переменную элемент с текстом Йончи
<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>

// Задача №4.
// Куда добавится <li>Текст</li> ?

// JS
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>
*/
// const a = document.body;
// const elem = a.querySelectorAll('[data-say-hi="yes"]');
// const b = elem[0];
// console.log(b);
// console.log(b.getAttribute('data-say-hi'));

// const body = document.body;
// console.log(body);
// const elem = document.getElementsByClassName('like');
// console.log(elem);
// const nameL = body.querySelectorAll('.like');
// console.log(nameL);


// Задача №1.
// Узнать ширину полосы прокрутки

// // Задача №2.
// Заставьте браузер прокрутиться на 100px сверху
// спустя секунду после открытия страницы

// // Задача №3.
// Получите координаты любых трех элементов на странице
// const bodyWidth = b.clientWidth;
// console.log(bodyWidth);

// const windowWidth =window.innerWidth;
// console.log(windowWidth);
// let widthScroll = windowWidth - bodyWidth;
// console.log(widthScroll);

// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// const mainElementHeight = mainElement.clientHeight;

// console.log(mainElementWidth);
// console.log(mainElementHeight);

// function scrollTop () {

// 	// alert('Привет');
// }
// let c = b.scrollTop;
// setTimeout(scrollTop, 1000);
// console.log(c);
// function sayHi() {
// 	alert('Привет');
// }
  
// setTimeout(sayHi, 1000);

// const block = document.querySelector('.lesson__item');
// function scroll(){
// 	window.scrollTo(100, 0);
// }

// function a (){
// 	window.scrollTo(0, 100);
// }

// setTimeout(a, 1000);

// const a = document.querySelector('.lesson__title');
// const b = document.querySelector('.lesson__item');
// const c = document.querySelector('.lesson__block');

// const aTop = a.getBoundingClientRect().top;
// const bTop = b.getBoundingClientRect().top;
// const cTop = c.getBoundingClientRect().top;

// const aT = aTop + window.pageYOffset;

// console.log(aT);

// function areYouPlayingBanjo(name) {
// 	let a = name[0];
// 	if (a == 'R' || a == 'r') {
// 		return(`${name} plays banjo`);
// 	} else {
// 		return(`${name} does not play banjo`);
// 	}
// 	// return name;
//   }

//   areYouPlayingBanjo('Rob');

//   function digitize(n) {
// 	let a = Array.from(n.toString(), Number);

// 	return a.reverse();
//   }

//   digitize(3676879809);

// function oddOrEven(array) {
// 	let a = [1, 2, 3, 4, 5, 6];
// 	let sum = a.reduse(function(previousevalue, item, index , array){
// 		return item + previousevalue;
		
// 	}, 0);
// 	console.log(sum);
//  }

// oddOrEven();

// let arr = [4, 6, 8, 2];

// let result = array.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);

// console.log(result);
// if (result == 0) {
// 	return('even');
// } else if (result != 0) {
// 	let a = result % 2;
// 		if (a == 0) {
// 			return('even');
// 		} else {
// 			return('add');
// 		}
// }

// Пишем форму поиска, которая открывается по клику на иконку
// а закрывается по клику на любое место страницы, кроме самой формы.
// Также, закрыть форму можно по клавише эскейп (Esc) на клавиатуре.
// Для поля ввода поискового запроса добавляем счетчик символов.