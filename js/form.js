// Пишем форму поиска, которая открывается по клику на иконку
// а закрывается по клику на любое место страницы, кроме самой формы.
// Также, закрыть форму можно по клавише эскейп (Esc) на клавиатуре.
// Для поля ввода поискового запроса добавляем счетчик символов.

'use strict'

const wrap = document.querySelector('.wrap');
const form = document.querySelector(".form");
const text = document.querySelector(".text");
const span = document.querySelector(".text span");

console.log(span);

wrap.addEventListener("click", menu);

function menu(event) {
    if (event.target.closest(".button")) {
        form.classList.toggle("active");
    }
    if (!event.target.closest(".button") && !event.target.closest(".form")) {
        form.classList.remove("active");
    }
}

window.addEventListener("keydown", esc);

function esc(event) {
    if (event.code === "Escape") {
        form.classList.remove("active");
    }
}

form.addEventListener("keyup", textSum);
form.addEventListener("keydown", function(event){
    if (event.repeat) textSum();
});

function textSum() {
    span.innerHTML = form.value.length;
}



const txtItem = document.querySelector('.textarea__item');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = 0;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}