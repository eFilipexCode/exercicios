function calc(birthYear, year) {
    const years = year - birthYear;
    const months = years * 12;
    const days = years * 365;
    const weeks = years * 52;

    return `${years}, ${months}, ${days}, ${weeks}`;
}

console.log(calc(2002, 2021) === '19, 228, 6935, 988');
console.log(calc(1945, 2021) === '76, 912, 27740, 3952');
console.log(calc(1918, 2021) === '103, 1236, 37595, 5356');

console.log(calc(2002, 2021) !== '18, 228, 37595, 721');
console.log(calc(1918, 2021) !== '12, 1236, 37595, 721');
console.log(calc(1945, 2021) !== '76, 1230, 36595, 721');
