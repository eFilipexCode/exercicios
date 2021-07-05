//Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
//estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.

function getInterval(n) {
    if (n >= 0 && n <= 25)
        return 'firstInterval';
    else if (n >= 26 && n <= 50)
        return 'secondInterval';
    else if (n >= 51 && n <= 75)
        return 'thirdInterval';
    else if (n >= 76 && n <= 100)
        return 'fourthInterval';
    else return;
};

function getIntervalsFromArray(arr) {
    const output = {
        firstInterval: 0,
        secondInterval: 0,
        thirdInterval: 0,
        fourthInterval: 0
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            return output;

        const interval = getInterval(arr[i]);
        if (interval)
            output[interval]++;
    };

    return output;
};

const test1 = getIntervalsFromArray([1, 2, 3, -1]);
console.log(
    test1.firstInterval == 3 &&
    test1.secondInterval == 0 &&
    test1.thirdInterval == 0 &&
    test1.fourthInterval == 0
);

const test2 = getIntervalsFromArray([-1, 2, 3, -1]);
console.log(
    test2.firstInterval == 0 &&
    test2.secondInterval == 0 &&
    test2.thirdInterval == 0 &&
    test2.fourthInterval == 0
);

const test3 = getIntervalsFromArray([0, 1, 26, 51, 76]);
console.log(
    test3.firstInterval == 2 &&
    test3.secondInterval == 1 &&
    test3.thirdInterval == 1 &&
    test3.fourthInterval == 1
);