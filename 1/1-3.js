// III - A padaria Hotpão vende uma certa quantidade de pães franceses 
// e uma quantidade de broas a cada dia. Cada pãozinho custa R$ 0,12 
// e a broa custa R$ 1,50. Ao final do dia, o dono quer saber quanto 
// arrecadou com a venda dos pães e broas (juntos), e quanto 
//deve guardar numa conta de poupança (10% do total arrecadado). 
//Você foi contratado para fazer os cálculos para o dono. Com base nestes 
//fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular
//os dados solicitados. 

function calcDinheiro(paes, broas) {
    const dinheiroDosPaes = paes * 0.12;
    const dinheiroDasBroas = broas * 1.50;
    const totalArrecadado = dinheiroDosPaes + dinheiroDasBroas;

    // Saída: valor com os 10% já investidos

    const totalAInvestir = (totalArrecadado.toFixed(2) * 10) / 100;
    const totalFinal = totalArrecadado - totalAInvestir;
    return totalFinal.toFixed(2);
};

console.log(calcDinheiro(10, 13) == 18.63);
console.log(calcDinheiro(4, 12) == 16.63);
console.log(calcDinheiro(120, 57) == 89.91);

console.log(calcDinheiro(10, 13) != 18.63);
console.log(calcDinheiro(4, 12) != 16.63);
console.log(calcDinheiro(120, 57) != 89.91);