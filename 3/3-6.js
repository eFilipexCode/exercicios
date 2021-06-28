// Escreva um programa que pergunte três valores pelo teclado e:
// a) verifique se eles podem compor as medidas dos três lados de um triângulo;
// b) se for triângulo, classifique como equilátero, isósceles ou escaleno.

const isSumGreater = (val1, val2, val3) => val1 + val2 >= val3;

const TriangleClass = {
    isEquilateral(a, b, c) {
        if (a == b == c)
            return 'EQUILATERO';
    },
    isScalene(a, b, c) {
        if (a != b && b != c)
            return 'ESCALENO';
    },
    isIsosceles(a, b, c) {
        if (a == b != c || c == b != a || a == c != b)
            return 'ISOSCELES';
    },
};

const getTriangleClassification = (a, b, c) => {
    return TriangleClass.isEquilateral(a, b, c) || 
           TriangleClass.isScalene(a, b, c) || 
           TriangleClass.isIsosceles(a, b, c);
};

function handleTriangleInfo(a, b, c) {
    if (isSumGreater(a, b, c) && isSumGreater(b, c, a) && isSumGreater(c, b, a))
        return {
            isTriangle: true,
            classification: getTriangleClassification(a, b, c),
        };

    return { isTriangle: false };
};

console.log(handleTriangleInfo(1, 1, 1).classification === 'EQUILATERO');
console.log(handleTriangleInfo(1, 2, 3).classification === 'ESCALENO');
console.log(handleTriangleInfo(5, 5, 9).classification === 'ISOSCELES');

console.log(!handleTriangleInfo(2, 4, 9).isTriangle);