function validaArray(array, number) {
    try {
    if(!array && !number) throw new ReferenceError('Envie os parâmetros!');

    if(typeof array !== 'object') throw new TypeError('Array precisa ser do tipo object!');

    if(typeof number !== 'number') throw new TypeError('Number precisa ser do tipo number!');

    if(array.length !== number) throw new RangeError('Tamanha inválido!');
    
    return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um referenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log(`Tipo de erro não esperado ${e}`);
        }
    }
}

console.log(validaArray());