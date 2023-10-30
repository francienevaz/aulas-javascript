function fn (){
    return 'Code here'
}

const arrowFn = () => 'Code here'; //se não houver mais comandos a serem atribuidos a essa função, basta deixa-la assim, essa é a forma mais simplificada da arrow function, o return fica implícito
const arrowFn2 = () => {
    //mais de uma expressão é necessário abrir um bloco e chamar o return
    return 'Code here'
}

// Funções são objetos
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log(fn.prop)

//Receber Parâmetros
const logValue = value => console.log(value);
logValue('Valor passado por parâmetro');

const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn)

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // executará a função fn 
handleFnExecution() // Não executará a fn

// Outra versão da função controlExec:

function controlFnExecFunction(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}