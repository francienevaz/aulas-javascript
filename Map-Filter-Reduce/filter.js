function filtraPares (arr) {
    return arr.filter (callback)
}

function callback (item) {
    return item % 2 !== 0;
}

const meuArray = [1,2,5,9,12,14,15,17,19,20];

console.log(filtraPares(meuArray));
