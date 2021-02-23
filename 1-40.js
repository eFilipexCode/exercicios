function pythagoras(c1, c2) {
    const hyp = Math.pow(c1, 2) + Math.pow(c2, 2);
    return hyp;
};

console.log(pythagoras(2, 3) == 13);
console.log(pythagoras(2, 5) == 29);
console.log(pythagoras(12, 21) == 585);

console.log(pythagoras(3, 9) == 92);
console.log(pythagoras(4, 12) == 170);
console.log(pythagoras(30, 40) == 2555);
