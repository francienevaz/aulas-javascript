// Na tipagem dinamica não é necessário especificar o tipo da variável no momento da sua criação, o compilador no momento de execução, a partir do momento que você atribuir um valor a variável é que o compilador vai tipar a variável. Isso é chamado de inferência de tipo.

var myVar = 30; // typeOf Number
 myVar = 'Text'; // typeOf String

 console.log(myVar);