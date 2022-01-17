function numerosPares(array) {
    return array.filter((item) => {
        return item % 2 === 0;
    });
}

const arr = [1, 3, 5, 9, 12];

console.log(numerosPares(arr));