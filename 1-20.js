//XX - Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. Faça
//um algoritmo para calcular quantos novelos de lã ela gasta por blusa. 

function calcularNovelos(qtdBlusas, novelos) {
    const novelosUsados = qtdBlusas / novelos;
    return novelosUsados.toFixed(1);
};

console.log(calcularNovelos(3, 3) == 1);
console.log(calcularNovelos(50, 10) == 5);
console.log(calcularNovelos(23457, 2450) == 9.6);