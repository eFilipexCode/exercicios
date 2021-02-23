// XXI - A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml,
//garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade
//de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou. 

function calcLitros(tipo1, tipo2, tipo3) {
    const qtd1 = tipo1 * 350;
    const qtd2 = tipo2 * 600;
    const qtd3 = tipo3 * 1000;
    const somaTotalEmLitros = (qtd1 + qtd2 + qtd3) / 1000;
    return Number(somaTotalEmLitros.toFixed(2));
};

console.log(calcLitros(1, 1, 1) === 1.95);
console.log(calcLitros(6, 9, 3) === 10.5);
console.log(calcLitros(7, 40, 38) === 64.45);