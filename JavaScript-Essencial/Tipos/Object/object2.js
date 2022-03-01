const user = {
    name: 'Franciene',
    lastName: 'Vaz'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedade do objeto user:', Object.values(user));

//Retornando um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Franciene Vaz'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));


//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Franciene'};
Object.seal(person);

person.name = 'Franciene Vaz';
delete person.name;
person.age = 26;

console.log('\nVariavel person após alterações:', person)
