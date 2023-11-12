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
	
	// Salva a entrada do usuário como propriedades do objeto localstorage. Esse recurso de armazenamento não vai funcionar em alguns navegadores (o Firefox, por exemplo), se você executar o exemplo a partir de um arquivo local://URL. Contudo irá funcionar com o HTTP.
	function save(amount, apr, years, zipcode) {
		if (window.localstorage){ // Só executa se o navegador suportar
			localStorage.loan_amount = amount;
			localStorage.loan_apr= apr;
			localStorage.loan_years = years;
			localStorage.loan_zipcode = zipcode;
			
		}
	}

	//Tenta restaurar os campos de entrada automaticamente quando o documento é carregado pela primeira vez
	window.onload = function () {
		// Se o navegador suporta localStorage e temos alguns dados armazenados
		if (window.localstorage && localStorage.loan_amount){ 
			document.getElementById("amount").value = localStorage.loan_amount;
			document.getElementById("apr").value = localStorage.loan_apr;
			document.getElementById("years").value = localStorage.loan_years;
			document.getElementById("zipcode").value = localStorage.loan_zipcode;			
		}
	};

	//Passa a entrada do usuário para um script no lado do servidor que (teoricamente) pode retornar
	// uma lista de links para financeiras locais interessadas em fazer empréstimos. Este exemplo não contém uma implementação real desse serviço de busca de financeiras. Mas se o serviço existisse, essa função funcionaria com ele.

	function getLenders(amount, apr, years, zipcode){
		//Se o navegador não suportar o objeto XMLHttpResquest, não faz nada
		if (!window.XMLHttpRequest) return;
		// Localizao elemento para exibir a lista de financeiras
		let ad = document.getElementById("lenders");
		if (!ad) return; //Encerra se não há ponto de saída
		// Codifica a entrada do usuário como parâmetros de consulta em um URL
		let url = "getLenders.php" +	//Url do serviço mais dados do usuário na string de consulta
			"?amt=" + encondeURIComponent(amount) +
			"&apr=" + encondeURIComponent(apr) + 
			"&yrs=" + encondeURIComponent(years) + 
			"&zip=" + encondeURIComponent(zipcode);
		// Busca o conteúdo desse URL usando o objeto XMLHttpRequest
		let req = new XMLHttpRequest();  //Inicia um novo pedido 
		req.open("GET", url) // Um pedido GET da Http para o url
		req.send(null); //Envia um pedido sem corpo
		
	}