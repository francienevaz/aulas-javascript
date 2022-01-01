
function gets (n1, n2) {
    let res = n1**n2;      
    
    if (n1%2 == 0 && n2%2 == 0) {
        console.log(`${n1}^${n2}=${res} `);
    } else {
        console.log('é número ímpar!')
    }
}


gets(5, 1);