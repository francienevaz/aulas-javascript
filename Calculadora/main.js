function calculadora () {

const operacao = prompt('Escolha uma operação:\n 1-Soma (+)\n 2-Subtração(-)\n 3-Multiplicação (*)\n 4-Divisão Real (/)\n 5-Divisão Inteira (%)\n 6-Potênciação (**)');

if (!operacao || operacao >= 7) {
    alert('Erro - Operação Inválida!');
    calculadora();
} else {   

    let n1 = Number(prompt('Insira um número:'));
    let n2 = Number(prompt('Insira outro número:'));
    let resultado;

    if (!n1 || !n2) {
        alert('Erro - Parâmetros inválidos!')
        calculadora();
    } else {
        function soma () {
            resultado = n1 + n2;
            alert(`${n1}+${n2}= ${resultado}`);
            novaOperação();
        }
        function subtrair () {
            resultado = n1 - n2;
            alert(`${n1}-${n2}= ${resultado}`);
            novaOperação();
        }
        function multiplica () {
            resultado = n1 * n2;
            alert(`${n1}*${n2}= ${resultado}`);
            novaOperação();
        }
        function divide () {
            resultado = n1 / n2;
            alert(`${n1}/${n2}= ${resultado}`);
            novaOperação();
        }
        function restoDaDivisão () {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
            novaOperação();
        }
        function elevado () {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é ${resultado}`);
            novaOperação();
        }
        
            function novaOperação () {
                let opcao = prompt('Deseja continuar: \n 1- Sim \n 2- Não');
        
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Obrigada,e até mais!')
                } else {
                    alert('Por favor escolha uma opção!')
                    novaOperação();
                }
            }
    }

            if (operacao == 1) {
                soma ();
            } else if (operacao == 2) {
                subtrair ();
            } else if (operacao == 3) {
                multiplica ();
            } else if (operacao == 4) {
                divide ();
            } else if (operacao == 5) {
                restoDaDivisão ();
            } else if (operacao == 6) {
                elevado ();
            }
    
        

       /* switch (operacao) {
            case 1:
                soma ();
                break;
        
            case 2:
                subtrair ();
                break;
            case 3:
                multiplica ();
                break;
            case 4: 
                divide ();
                break;
            case 5:
                restoDaDivisão ();
                break;
            case 6:
                elevado ();
                break;                
        } */

}

}


calculadora();