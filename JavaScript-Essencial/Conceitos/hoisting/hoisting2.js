// é uma boa prática declarar a função antes de usar ela

function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}
fn();