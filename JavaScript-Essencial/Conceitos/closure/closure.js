// Closure também conhecido como escopo Lexico, é a capacidade de uma função lembrar onde ela foi criada. Escopo Global e Local, a 'var' não repeita blocos, e não é boa prática utiliza-la... a 'let' é um escopo local, ou seja não funciona se for chamada fora de onde foi criada, e a 'const' é global e imutável - se criada como objeto dá para alterar os valores.

function init() {
    const example = 'Essa variável';

    return function() {
        console.log(`1 - O valor da variável de exemplo é ${example}`);
        
        return function() {
            console.log(`2 - O valor da variável de exemplo é ${example}`);

            return function() {
                console.log(`3 - O valor da variável de exemplo é ${example}`)
            }
        }
    }
}
const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();