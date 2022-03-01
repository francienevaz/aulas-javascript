let user = {
    name: 'Franciene Vaz'
};

//Alterando a propriedade de um objeto
//console.log(user);

user.name = 'Lucas';
//console.log(user);
user['name']='Bruno';

//console.log(user);
const prop = 'name';
user[prop] = 'Moana';

//console.log(user);

//Criando uma propriedade
user.lastName = 'Toledo Rocha';

//console.log(user);
//Deletando uma propriedade
delete user.name;

console.log(user);