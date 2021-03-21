// -  Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se 
//somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se 
//atribuir o resultado para uma variável C e mostrar seu conteúdo na tela

function addOrMultiplyNumbers(a, b) {
    let c;

    if (a === b) {
        c = a + b;
        return c;
    } else {
        c = a * b;
    };

    return c;
};

console.log(addOrMultiplyNumbers(2, 2) === 4);
console.log(addOrMultiplyNumbers(3, 3) === 6);
console.log(addOrMultiplyNumbers(8, 8) === 16);

console.log(addOrMultiplyNumbers(3, 9) === 27);
console.log(addOrMultiplyNumbers(8, 6) === 48);
console.log(addOrMultiplyNumbers(9, 2) === 18);