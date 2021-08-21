// Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

function oddNumbersBetweenInterval(min, max) {
    const sequenceArray = [];
    let sum = 0;
    let arrIndex = 0;
    for (let i = min; i <= max; i++)  {
      if (i % 2 !== 0) {
          sequenceArray[arrIndex] = i;
          arrIndex++;
          sum += i;
      };
    };

  return {
    sequence: sequenceArray,
    sum
  };
};

console.log(oddNumbersBetweenInterval(0, 1).sum === 1);
console.log(oddNumbersBetweenInterval(1, 5).sum === 9);
console.log(oddNumbersBetweenInterval(100, 200).sum === 7500);