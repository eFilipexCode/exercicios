// Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá 
// calcular e mostrar :
// a. A menor altura do grupo;
// b. A maior altura do grupo;

function getTallestAndShortestHigh(arr) {
    let shortest = arr[0]; 
    let highest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        shortest > arr[i] ? shortest = arr[i] : shortest;
        highest < arr[i] ? highest = arr[i] : highest;
    };

    return [
        shortest, 
        highest
    ]
};

const test1 = getTallestAndShortestHigh([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log(test1[0] === 1 && test1[1] === 15);

const test2 = getTallestAndShortestHigh([15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1]);
console.log(test2[0] === 1 && test2[1] === 15);

const test3 = getTallestAndShortestHigh([20, 22, 33, 74, 53, 46, 35, 88, 19, 10, 11, 11, 11, 145, 157]);
console.log(test3[0] === 10 && test3[1] === 157);