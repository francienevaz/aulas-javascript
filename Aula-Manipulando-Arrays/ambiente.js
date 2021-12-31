// O que são vetores

// como declarar
/*let array = ['string', 1 , true];
console.log(array); */

let saladaDeFrutas = ['maça', 'banana', 'morango', 'laranja', 'abacaxi', 'uva', 'mamão'];

//console.log (saladaDeFrutas);

//forEach()
saladaDeFrutas.forEach(function(item, index){console.log(item, index)});

//push()
saladaDeFrutas.push('kiwi');
console.log(saladaDeFrutas);

//pop()
saladaDeFrutas.pop();
console.log(saladaDeFrutas);

//shift()
saladaDeFrutas.shift();
console.log(saladaDeFrutas);

//unshift()
saladaDeFrutas.unshift('melancia');
console.log(saladaDeFrutas);

//indexOf()
console.log(saladaDeFrutas.indexOf('banana'));

//splice()
saladaDeFrutas.splice(0,4);
console.log(saladaDeFrutas);

//slice()
let novoArray = saladaDeFrutas.slice(0,2);
console.log(novoArray);










