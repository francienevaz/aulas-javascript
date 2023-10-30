// (() => {})()
// () => {}: Esta é a definição da função arrow. Ela não recebe nenhum argumento, como indicado pelos parênteses vazios (), e executa um bloco de código vazio {}. No contexto de uma função arrow, o => é usado para separar os parâmetros (nesse caso, nenhum) do corpo da função.

//(): Esta parte do código chama a função definida anteriormente. Você a invoca imediatamente usando parênteses, como em (). Como a função não tem parâmetros, você também usa parênteses vazios.

(()=> {
    this.name = 'Arrow function'
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome do objeto em execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName())
})()

(()=> {
    this.name = 'José'

    function fnTradicional() {
        return `Hello ${this.name}!`;
    }

    const obj = {
        name: 'Maria',
        greet: () => {
          console.log(`Olá, ${this.name}`);
        },
        fnTradicional
      };
    
    console.log(obj.fnTradicional()) // retorna Hello Maria!, pois o this referencia o objeto, por ser uma function tradicional
    obj.greet(); // "Olá, José" (o valor de this não se refere ao objeto "obj")
      
})()

//Arrow functions o this é léxico, ou seja, é fixo, consistente e previsível, dependende do contexto, em functions tradicionais o this é mais flexível podendo referênciar outros valores dependendo do contexto onde está inserido.