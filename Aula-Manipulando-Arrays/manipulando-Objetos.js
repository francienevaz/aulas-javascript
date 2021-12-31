let pet = {
    nome: 'Chloe',
    animal: 'Gato',
    sexo: 'Fêmea',
    idade: '3 anos',
    raca: 'Siamês',
    brinquedo: 'bolinha',
    olhos: 'azuis',
    endereco: 'r. Profº Oscar Campliglia',
    aniversario: 'Janeiro'
}

//console.log(typeof(pet));
//console.log(pet.raça);
//console.log(pet);
//console.log(pet.nome);

/*var cat = pet.nome;
var brinquedoPreferido = pet.brinquedo;
var type = pet.raca;
var corDosOlhos = pet.olhos;
var local = pet.endereco;
var age = pet.idade;
var birth = pet.aniversario;

console.log(brinquedoPreferido);
*/

//Outra forma de desestruturação:

var {animal, nome, idade, sexo} = pet;
console.log(animal, nome, idade, sexo);






