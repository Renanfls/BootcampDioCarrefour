/* Exercicio 1 
--------------------------------------------------------------------
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    // Retorna um array
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

console.log(nums);

*/

/* Exercicio 2
--------------------------------------------------------------------
function mapSemThis(arr) {
    // Cria um novo array com a multiplicação do array recebido anteriormente
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);

*/

/* Exercicio 3
--------------------------------------------------------------------
function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
    // return item % 2 !=== 0; Filtra números que não sejam pares
}

const meuArray = [1, 23, 40, 55, 60, 3, 2, 4];

console.log(filtraPares(meuArray));

*/

/* Exercicio 4
--------------------------------------------------------------------
function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr));

*/

/* Exercicio 5
--------------------------------------------------------------------*/
const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    }
];

const saldoDisponivel = 100;

function calculaSlado(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSlado(saldoDisponivel, lista));