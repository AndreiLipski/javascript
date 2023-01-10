'use strict'

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) == 'string') {
        let b = str.split('');
        let c = b.reverse();
        let d = c.join('');
        console.log(d);
    } else {
        const a = 'Ошибка!';
        return a;
    }
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';

    if (arr.length == 0) {
        str = 'Нет доступных валют';
        console.log(str);
        return str;
    } else {
        str = 'Доступные валюты:\n';
    }

    arr.forEach(function(curr, i){
        if(curr !== missingCurr) {
            str += `${curr}\n`;
        }
    })
    console.log(str);
}
let g =[];
availableCurr(g);