// Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

function oddNumbersBetweenInterval(min, max) {
    const output = [];
    let arrIndex = 0;
  for (let i = min; i < max; i++)  {
    if (i % 2 !== 0) {
        output[arrIndex] = i;
        arrIndex++;
    };
  };

  return output;
};

console.log(oddNumbersBetweenInterval(100, 200));