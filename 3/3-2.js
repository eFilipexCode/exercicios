const calculateDelta = (a, b, c) => b ** 2 - 4 * a * c;

function calculateRoots(a, b, delta) {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);

  if (delta == 0) return { x1 };

  return {
    x1,
    x2: (-b - Math.sqrt(delta)) /  (2 * a),
  };
}

function handleBhaskara(a, b, c) {
  const delta = calculateDelta(a, b, c);

  if (delta < 0) throw new Error("Delta < 0. Logo, não há raízes reais.");

  return calculateRoots(a, b, delta);  
}

/* console.log(
  handleBhaskara(0, 2, -9).x1 === 1
); */

console.log(instanceof Infinity);
