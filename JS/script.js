    "use strict";
	function calculate() {
		//Pesquisa os elementos de entrada e saída no documento
		let amount = document.getElementById("amount");
		let apr = document.getElementById("apr");
		let years = document.getElementById("years");
		let zipcode = document.getElementById("zipcode");
		let payment = document.getElementById("payment");
		let total = document.getElementById("total");
		let totalinterest = document.getElementById("totalinterest");
		
		/*Obtém  entrada do usuário através dos elementos de entrada. Presume que tudo isso é válido.
		Converte os juros de porcentagem para decimais e converte a taxa anual para taxa mensal. Converte o período de pagamento em anos para o número de pagamentos mensais.
		*/
		let principal = parseFloat(amount.value);
		let interest = parseFloat(apr.value) / 100 / 12;
		let payments = parseFloat(years.value) * 12;
		
		//agora calcula o valor do pagamento mensal
		let x = Math.pow(1 + interest, payments) // o método pow() calcula potências
		let monthly = (principal*x*interest)/(x-1);

		//Se o resultado é um número finito, a entrada do usuário estava correta e temos resultados significativos para exibir
		if(isFinite(monthly)) {
			//Preenche os campos de saída, arredondando para 2 casas decimais
			payment.innerHTML= monthly.toFixed(2);
			total.innerHTML = (monthly*payments).toFixed(2);
			totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);

			//Salva a entrada do usuário para que possamos recuperá-la na próxima vez que ele visitar.
			save(amount.value, apr.value, years.value, zipcode.value);
		}
		//Anúncio  localiza e exibe financeiras locais, mas ignora erros de rede 
		try{
			getLenders(amount.value, apr.value, years.value, zipcode.value);
		}
		catch(e) {/* e ignora esses erros*/}
		//Por fim, traça o gráfico do saldo devedor , dos juros e dos pagamentos do capital
		chart(principal, interest, monthly, payments);
	} else {
		//o resultado foi NAN ou infinito, o que significa que a entrada estava incompleta ou era inválida
		//apaga qualquer saída exibida anteriormente
		payment.innerHTML= "";
		total.innerHTML = "";
		totalinterest.innerHTML = "";
		chart(); // sem argumentos, apaga o gráfico
		
	}