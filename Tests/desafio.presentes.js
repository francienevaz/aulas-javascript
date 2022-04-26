/* Papai Noel todo ano pede ajuda aos elfos para coletar todas as cartinhas das crianças e saber com o quê presenteá-las. Porém, não são todas as crianças que enviam as suas cartinhas e, como ele não quer deixar ninguém de fora, decidiu que vai presentear  mesmo quem não enviou a cartinha. Pensando em um gosto geral, decidiu dar um carrinho de brinquedo para os meninos, e uma boneca para as meninas.

Entrada
A primeira linha da entrada possui um inteiro N (0 < N &leq; 1000), que representa o número de crianças que não enviaram sua cartinha para o Papai Noel. As próximas N linhas consistem em duas strings, a primeira é o nome da criança, e a segunda é uma letra, que pode ser ‘M’, para dizer que é um menino, ou ‘F’ se for uma menina.

Saída
A saída consiste em 2 linhas. A primeira linha deve conter o número de carrinhos que o Papai Noel deve fazer, seguido pela palavra “carrinhos”, e na segunda linha, o número de bonecas seguido pela palavra “bonecas”.

 
Exemplo de Entrada	Exemplo de Saída
5
Milena F
Joao M
Rafaela F
Renata F
Felipe M
*/

// TODO
// function gets(arr) {
//     return arr;
// };

// let children = gets();
// let kids;
// let arr = [];

// for (let i = 0; i <= children ; i++) {
//   kids = gets().split(" ");
//   arr.push(kids[i]);
// }
// console.log(arr);
// const boys = arr.filter("M").length;
// const girls = arr.filter("F").length;
// console.log(`${boys} carrinhos \n ${girls} bonecas `);

function participantes (nome, sexo) {
    let crianças = [nome, sexo];
    

    return crianças;
}

console.log(participantes("Joana", "F"));