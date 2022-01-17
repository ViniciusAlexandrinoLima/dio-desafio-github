// Com This

const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};


function mapComThis(array, thisArg) {
    return array.map(function (item ) {
        return item * this.value;
    }, thisArg);
}

const numeros = [1, 2];

console.log('this -> maca', mapComThis(numeros, maca));
console.log('this -> laranja', mapComThis(numeros, laranja));



// sem This

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];
console.log(mapSemThis(nums));