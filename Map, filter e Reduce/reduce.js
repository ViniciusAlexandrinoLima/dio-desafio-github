// 1º parte
function somaDeNumeros(array) {
   return array.reduce(function(prev, current) {
        return prev + current;
    })
}

const array = [1, 2];

console.log(somaDeNumeros(array));


// 2º parte

const lista = [{
    name: 'sabao',
    preco: 30
},
{
    name: 'cereal',
    preco: 12
},
{
    name: 'pasta de dente',
    preco: 10
},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));