//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log`Quantidade de letras: ${textSize}`;

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas por delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text', 'texto');
console.log('\nSubustituição de valor:', replaceText);

//Retorna a 'fatia' de um valor
const lastChar = 'Text'.slice(-2);
console.log('\nAs duas últimas letras de uma String', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da String da primeira letra menos a última letra', allWithoutLastChar);

const secondToEnd  = 'Texto'.slice(1);
console.log('\nValor da String da segunda letra até a última:', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);