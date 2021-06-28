// Escreva um programa que pergunte três valores distintos e os imprima em ordem crescente.

const getMin = (a, b) => (a < b ? a : b);
const getMax = (a, b) => (a > b ? a : b);

function orderNumbers(a, b, c) {
  const least = getMin(getMin(a, b), c);
  const greater = getMax(getMax(a, b), c);
  const middle =
    (a != least && a != greater ? a : false) ||
    (b != least && b != greater ? b : false) ||
    (c != least && c != greater ? c : false);

  return {
    least,
    middle,
    greater,
  };
}

test1 = orderNumbers(2, 1, 3); 
console.log(JSON.stringify(test1) === JSON.stringify({least: 1, middle: 2, greater: 3 }));

test2 = orderNumbers(-1, 1, 0);
console.log(JSON.stringify(test2) === JSON.stringify({ least: -1, middle: 0, greater: 1 }));

test3 = orderNumbers(30, 50793, 6);
console.log(JSON.stringify(test3) === JSON.stringify({ least: 6, middle: 30, greater: 50793 }));
