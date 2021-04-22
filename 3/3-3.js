// Escreva um programa que pergunte quatro números inteiros, referentes a: 
//Opção, Num1, Num2 e Num3 respectivamente; e mostre:
// + valor de Num1 se a Opção for igual a 1;
// + valor de Num2 se a Opção for igual a 2;
// + valor de Num3 se a Opção for igual a 3.
// Os únicos valores aceitos para Opção são 1, 2 ou 3.

function getSelectedOption(option, ...rest) {
    if (option === 1)
        if (rest[0] < 0 || rest[0] > 3)
            throw new Error('Entrada inválida.');

    return rest[option - 1];
};

console.log(getSelectedOption(1, 1, 2, 3) === 1);
console.log(getSelectedOption(2, 1, 2, 3) === 2);
console.log(getSelectedOption(3, 1, 2, 3) === 3);

console.log(getSelectedOption(1, 1, 2, 3) === 9);
console.log(getSelectedOption(2, 1, 2, 3) === 0);
console.log(getSelectedOption(1, 4, 2, 3) === 0);