// XI- Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um
//algoritmo para converter este tempo em anos, meses e dias. Assuma que cada mês possui sempre
//30 dias.

function timeConverter(qtdDias) {
    const anos = qtdDias / 360;
    const meses = (qtdDias % 360) / 30;
    const dias = qtdDias % 30;

    return {
        anos: Math.floor(anos),
        meses: Math.floor(meses),
        dias
    };
};

console.log(timeConverter(1000));
console.log(timeConverter(3400));
console.log(timeConverter(720));