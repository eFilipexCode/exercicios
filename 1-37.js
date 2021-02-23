// XXXVII - Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário. 

function tabuada(n) {
    for (i = 0; i < 10; i++) {
        console.log(`${n} x ${i + 1} = ${n * (i + 1)}`);
    };
};

tabuada(3);