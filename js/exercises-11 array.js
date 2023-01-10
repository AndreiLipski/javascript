'use strict'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const f = [];

function showFamily(arr) {
    if(arr.length == 0) {
        const a = 'Семья пуста';
        return a;

    } else {
        const name = arr.join(' ');
        const nameFamily = `Семья состоит из: ${name}`;
        return nameFamily;
    }
}
showFamily(family);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item, i, arr){
        let a = item.toLowerCase();
        console.log(a);
    })
}

standardizeStrings(favoriteCities);