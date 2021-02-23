// XI- Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um
//algoritmo para converter este tempo em anos, meses e dias. Assuma que cada mês possui sempre
//30 dias.

function timeConverter(dias) {
    const ano = (dias / 365);
    const meses = (dias / 30) - (ano.toFixed(0) * 12).toFixed(0);
    const diasRestantes = dias - ((meses.toFixed(0) * 30) + (ano.toFixed(0) * 365));

    return `${ano.toFixed(0)} ano(s) ${meses.toFixed(0)} mes(es) e ${diasRestantes.toFixed(0)} dia(s)`;
};

console.log(timeConverter(365) === '1 ano(s) 0 mes(es) e 0 dia(s)');
console.log(timeConverter(396) === '1 ano(s) 1 mes(es) e 1 dia(s)');
console.log(timeConverter(400) === '1 ano(s) 1 mes(es) e 5 dia(s)');

console.log(timeConverter(1200) === '3 ano(s) 4 mes(es) e 0 dia(s)')
console.log(timeConverter(365));