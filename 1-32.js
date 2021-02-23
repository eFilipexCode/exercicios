// XXXII - Faça um algoritmo que receba o peso de uma pessoa em quilos, calcule e mostre esse peso
//em gramas. 

function conversorDeGramas(kg) {
    // quilo = 1000
    const gramas = kg / 1000;
    return gramas.toFixed(3);
};

console.log(conversorDeGramas(3) == 0.003);
console.log(conversorDeGramas(12.5) == 0.013);