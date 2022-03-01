const myNumber = 15.6401;

//Transformar número em String
const numberAsString = myNumber.toString();
console.log('\nNúmero transformado em String:', typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//Transforma uma string em Float
console.log('\nString parseada para float:', parseFloat('15.89'));

//Transforma uma string em int
console.log('\nString parseada para int:', parseInt('15.67'));