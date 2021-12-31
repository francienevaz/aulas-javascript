let count = 0;

let currentNumberWrapper = document.getElementById('#currentNumber');

function increment() {
    count++;
    currentNumberWrapper.innerHTML = count;
}

function decrement() {
    count--;
    currentNumberWrapper.innerHTML = count;
}


/* var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/
