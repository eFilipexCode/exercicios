// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, 
// imprimindo o resultado. 

function printMessage(value) {
    console.log(value);
};


function handleNumberInput(integer) {
    let value;

    if (integer > 0)
        return value = integer * 2;
    else if (integer < 0)
        return value = integer * 3;

    printMessage(value);
};

console.log(handleNumberInput(2) === 4);
console.log(handleNumberInput(7) === 14);
console.log(handleNumberInput(1234) === 2468);

console.log(handleNumberInput(-1) === -3);
console.log(handleNumberInput(-3) === -9);
console.log(handleNumberInput(-5) === -15);