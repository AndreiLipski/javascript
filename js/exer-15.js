const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '20$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
        return 'Цена ниже средней';
    } else {

        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    console.log(copy);
    return copy;
}

transferWaitors(restorantData);
console.log(restorantData);


let a;
function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }
    
    if (n >= 1) {
        a = (n * factorial(n - 1));

        return a;
    } else {
         a = 1;
        return a;
        
    }

}
factorial(4);
console.log(a);
