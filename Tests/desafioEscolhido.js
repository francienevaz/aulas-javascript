//TODO: Complete os espaços em branco com uma solução possível para o problema.
// let line = gets();
// let matricula;

// for(let i = 0; i < line; i++ ){
//   line = gets();
//   line = line.split(" ")
//   if(parseFloat(line[1]) >= 8){
//     matricula = parseInt(line[0]);
//     print(matricula);
//   } else {
//   print("Minimum note not reached")
// }
// }

// const gets = (() => {
//   let array = [ 3, 
//     1000, 5,
//     1001, 10,
//     1002, 6];
//   return array;
// });

// let nAlunos = parseInt(gets());
// let nMatricula;
// let nota;

// for(let i = 0; i <= nAlunos; i++) {
//     nAlunos = gets();
//     nAlunos = nAlunos.split(" ");
//     nota = parseFloat(nAlunos[1]);
//     if( nota < 8) {
//         console.log("Minimum note not reached")
//     } else if (nota >= 8) {
//         nMatricula = parseInt(nAlunos[0]);
//         console.log(nMatricula);
//     }
// }

// Solução
//TODO: Complete os espaços em branco com uma solução possível para o problema.
let nAlunos = parseInt(gets());
let nMatricula = Array(nAlunos);
let nota = Array(nAlunos);

for (i = 0; i < nAlunos; i++) {
let aluno = gets().split(' ');
 nMatricula[i] = parseInt(aluno[0]);
 nota[i] = parseFloat(aluno[1]);
}
let notaMax = nota.reduce( (a, b) => {
 return Math.max(a, b);
});
for (i = 0; i < nAlunos; i++) {
 if (notaMax < 8) {
console.log('Minimum note not reached');
 break;
 } else if (nota[i] === notaMax) {
console.log(nMatricula[i]);
 }
}

