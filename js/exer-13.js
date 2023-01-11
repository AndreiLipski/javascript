const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {

    let b = 0;

    data.shops.forEach(element => {
        let a = Number(element.width * element.length * data.height);
            b += a;

    });
    let c = b * data.moneyPer1m3;

    if(c > data.budget){
        return 'Бюджета недостаточно';
    } else {
        return 'Бюджета достаточно';
    }

}   

isBudgetEnough(shoppingMallData);

