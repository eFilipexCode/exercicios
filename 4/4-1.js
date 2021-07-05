//Desenvolver um algoritmo que efetue a soma de todos os números ímpares que 
//são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.

function calculateSum(limit) {
    let output = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 && i % 2 != 0)
            output += i;
    };

    return output
};

console.log(calculateSum(1) === 0);
console.log(calculateSum(3) === 3);
console.log(calculateSum(50) === 192);
console.log(calculateSum(500));