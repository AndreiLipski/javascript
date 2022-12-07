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