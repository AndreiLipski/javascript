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



const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
let arrNew = [];
let c;
function sortStudentsByGroups(arr) {

    arr.sort();
    
    for( let i = 3; i <= arr.length; arr.length - 3) {
        
        let b = arr.splice(0, 3);
        arrNew.push(b);
    }

    c = arr.join(', ');
    
}

sortStudentsByGroups(students);

console.log(arrNew);
console.log(`Оставшиеся студенты: ${c}.`);