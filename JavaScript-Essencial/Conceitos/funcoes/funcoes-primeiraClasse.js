// A função de primeira classe significa que a função pode ser atribuida a uma variável, atribuida a uma estrutura de dados seja um Object ou um Array, e ela pode ser passada como um argumento e até retornada em outras funções.

function getName() {
    return 'Franciene Vaz'
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);