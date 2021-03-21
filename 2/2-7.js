//Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, 
// imprimir o resultado desta operação. 

function handleOperations(value) {
    let sum;
    if (value % 2 === 0)
        sum = value + 5;
    else 
        sum = value + 8;

    return sum;
};

function printMessage(value) {
    console.log(value);
};

console.log(handleOperations(5) === 13);
console.log(handleOperations(6) === 11);
console.log(handleOperations(7) === 15);