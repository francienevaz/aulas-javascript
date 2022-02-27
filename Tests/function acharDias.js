function acharMinimoDeDias(duracoes) {
    
    for (let i = 0; i < duracoes.length; i++) {
        let duracoes = [];
        let n = duracoes.length;
        let result = parseFloat(duracoes[i]/n);
        
        if (result <= 3.00) {
            console.log(parseInt(result));
        }
    }

}

acharMinimoDeDias([1.9,2,3,4,6]);