const calculateDelta = (a, b, c) => (b ** 2) - (4 * a * c);

function calculateRoots(a, b, delta) {
    return {
        x1: (-b + Math.sqrt(delta)) / 2 * a,
        x2: (-b - Math.sqrt(delta)) / 2 * a,
    };
};

function handleBhaskara(a, b, c) {
    const delta = calculateDelta(a, b, c);

    if (delta < 0)
        throw new Error('Delta < 0. Logo, não há raízes reais.');

    const roots = calculateRoots(a, b, delta);

    if (roots.x1 === roots.x2)
        return { x1: roots.x1, x2: null };

    return roots;
};

console.log(handleBhaskara(1, 8, -9).x1 === 1 && handleBhaskara(1, 8, -9).x2 === -9);
console.log(handleBhaskara(1, 12, -13).x1 === 1 && handleBhaskara(1, 12, -13).x2 === -13);
console.log(handleBhaskara(1, 2, 1).x1 === -1 && handleBhaskara(1, 2, 1).x2 === null);

console.log(handleBhaskara(1, 8, -9).x1 === 1 && handleBhaskara(1, 8, -9).x2 === 9);
console.log(handleBhaskara(1, 12, -13).x1 === 1 && handleBhaskara(1, 12, -13).x2 === 13);
console.log(handleBhaskara(1, 2, 1).x1 === -1 && handleBhaskara(1, 2, 1).x2 === 1);