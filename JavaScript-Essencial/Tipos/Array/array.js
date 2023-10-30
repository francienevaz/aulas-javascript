const users = ['Gabriel', 'Emily', 'Pedro'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Gabriel',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Emily',
        age: 28,
        gender: gender.WOMAN
    },
    {
        name: 'Pedro',
        age: 27,
        gender: gender.MAN
    },
]

//Retornar a quantidade de itens de um array
console.log(users.length); //3
//Verificar se é array
console.log(Array.isArray(persons)); //true
//Iterar sobre os itens da array
persons.forEach(person => {
    console.log(`${person.name}, ${person.age} anos`);
})
//Filtrar a array
let filteredPersons = persons.filter(person => person.gender === gender.MAN)
console.log(filteredPersons);
//Retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person
})

console.log(`\n Pessoas com a adição do curso:`, personsWithCourse);
//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age //a array retornou um number
}, 0)

console.log(`\n Soma das idades das pessoas`, totalAge);

//Juntando operações
const totalEvenAges = persons
                            .filter(person => person.age %2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);
console.log('\n Soma de idades das pessoas que possuem idade par', totalEvenAges)

