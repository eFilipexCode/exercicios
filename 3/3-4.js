// Um autódromo necessita de um programa para verificar qual o carro mais rápido em uma competição.
// Considerando que dois carros participam da competição, o programa pergunta qual o comprimento da
// pista (em metros) e quanto tempo (em segundos) cada um dos carros levou para percorrer a pista, e
// informa a velocidade do carro mais rápido.

const calculateVelocity = (meters, time) => meters / time;

function handleFastest(meters, time1, time2) {
    if (time1 === time2)
        throw new Error('Ambos têm a mesma velocidade');

    return time1 < time2 
        ? calculateVelocity(meters, time1) 
        : calculateVelocity(meters, time2);
};

console.log(handleFastest(10, 5, 2) === 5);
console.log(handleFastest(500, 5, 10) === 100);
console.log(handleFastest(1500, 10, 11) === 150);

console.log(handleFastest(10, 5, 2) === 2);
console.log(handleFastest(500, 5, 10) === 5);
console.log(handleFastest(1500, 10, 11) === 136.36);
