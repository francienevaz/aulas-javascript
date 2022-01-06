/*
function gets (n1, n2) {
    let res = n1**n2;      
    
    if (n1%2 == 0 && n2%2 == 0) {
        console.log(`${n1}^${n2}=${res} `);
    } else {
        console.log('é número ímpar!')
    }
}


gets(5, 1);
*/

/* function gets () {
    let n1 = 0;
    let n2 = 2;
    let res;
    if (n1%2 == 0 && n2%2== 0) {
        res = Number(n1**n2);
        for (let i = n1; i < 10; i++) {
            console.log(`${i}^${n2}=${res}`)
        }
    } else {
        console.log('é ímpar!')
    }
}

gets();*/
/*
let valor1 = parseInt(25);
let valor2 = parseInt(100);
let valor3 = parseFloat(5.50);

let salario = parseFloat(valor2 * valor3);
let sal = salario.toFixed(2);
//let sal2 = salario.toLocaleString('en-US', { style: 'currency', currency: 'USD'});
console.log('NUMBER = ' + valor1);
console.log('SALARY = ' + 'U$ ' + sal);
*/
/*
const arr = [1,2,3,4,5,6];
var length = arr.length;
for (var i = 0; i < length; i++) {
    console.log(arr[i]);  
}*/
/*
const frase = ['L','I','F','E',"'",'S','','N','O','T','','A','','P','R','O','B','L','E','M','','T','O','','B','E','','S','O','L','V','E','D','.']
function leiaMe (n) {
    
    for(n = 0; n < frase.length; n++){
        console.log(frase[n]);
    }
}
leiaMe();
*/


const frase = ['L','I','F','E',"'",'S','','N','O','T','','A','','P','R','O','B','L','E','M','','T','O','','B','E','','S','O','L','V','E','D','.']
function leiaMe (n) {
  
  for (let i = 0; i <= frase.length; i++) {
    return console.log(frase[n]);
  }
}


console.log(frase[1]);
leiaMe([30]);