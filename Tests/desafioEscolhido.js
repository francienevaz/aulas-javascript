//TODO: Complete os espaços em branco com uma solução possível para o problema.
let line = gets();
let matricula;

for(let i = 0; i < line; i++ ){
  line = gets();
  line = line.split(" ")
  if(parseFloat(line[1]) >= 8){
    matricula = parseInt(line[0]);
    print(matricula);
  } else {
  print("Minimum note not reached")
}
}

let nAlunos = parseInt(gets());
let nMatricula;
let nota;

for(let i = 0; i <= nAlunos; i++) {
    nAlunos = gets();
    nAlunos = nAlunos.split(" ");
    nota[i] = parseFloat(nAlunos[1]);
    if( nota < 8) {
        console.log("Minimum note not reached")
    } else if (nota >= 8) {
        nMatricula[i] = parseInt(nAlunos[0]);
        console.log(nMatricula);
    }
}