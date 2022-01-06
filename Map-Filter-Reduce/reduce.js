/*function somaNumeros (arr) {
   return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
        
    }, 0);
}

const arr = [1,3];

console.log(somaNumeros(arr));
*/

const lista = [
    {
        name: 'sabao em po',
        preco: 12,
    },
    { 
        name: 'cereal',
        preco: 24,
    },
    {
        name: 'toalha de banho',
        preco: 79,
    }
]

const saldoDisponivel = 150;

function calculaSaldo (saldoDisponivel, lista) {
    return lista.reduce(function(prev,current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
    
}

console.log(calculaSaldo(saldoDisponivel, lista));

