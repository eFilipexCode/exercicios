// Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
//Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
//números lidos. O número que encerrará a leitura será zero.
const isEven = n => n % 2 === 0;
const calculateAverage = (sum, total) => total === 0 ? 0 : +(sum / total).toFixed(1);

function getNumbersInfo(arr) {
    let evenSum = 0; // Para calcular a média
    let allSum = 0; // Para calcula a média
    const output = {
        evenQtd: 0,
        oddQtd: 0,
        evenAverage: 0,
        allAverage: 0
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            allSum += arr[i];
            if (isEven(arr[i])) {
                output.evenQtd++;
                evenSum += arr[i];
            } else
                output.oddQtd++;
        } else 
            i = arr.length;
    };

    output.evenAverage = calculateAverage(evenSum, output.evenQtd);
    output.allAverage = calculateAverage(allSum, output.evenQtd + output.oddQtd);
    return output;
};

const test1 = getNumbersInfo([1, 2, 3, -1]);
console.log(
    test1.evenQtd == 1 &&
    test1.oddQtd == 2 &&
    test1.evenAverage == 2 &&
    test1.allAverage == 2
);

const test2 = getNumbersInfo([-1, 1, 4, 9]);
console.log(
    test2.evenQtd == 0 &&
    test2.oddQtd == 0 &&
    test2.evenAverage == 0 &&
    test2.allAverage == 0
);

const test3 = getNumbersInfo([10, 4, 7, 9, 4, 2, 10, 20, 5, -1, 10]);
console.log(
    test3.evenQtd == 6 &&
    test3.oddQtd == 3 &&
    test3.evenAverage == 8.3 &&
    test3.allAverage == 7.9
);