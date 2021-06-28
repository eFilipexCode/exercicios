// Escreva um programa que pergunte quatro números inteiros, referentes a: 
//Opção, Num1, Num2 e Num3 respectivamente; e mostre:
// + valor de Num1 se a Opção for igual a 1;
// + valor de Num2 se a Opção for igual a 2;
// + valor de Num3 se a Opção for igual a 3.
// Os únicos valores aceitos para Opção são 1, 2 ou 3.

function getSelectedOption(option, a, b, c) {
//    if (option === 1)
//        if (rest[0] < 0 || rest[0] > 3)
//            throw new Error('Entrada inválida.');

	let aux;
	switch (option) {
	   case 1:
		aux = a;
		break;
	   case 2:
		aux = b;
		break;
	   case 3:
		aux = c;
		break;
	   default:
		throw new Error('Entrada Inválida');
	}

    return aux;
};

console.log(getSelectedOption(1, 1, 2, 3) === 1);
console.log(getSelectedOption(2, 1, 2, 3) === 2);
console.log(getSelectedOption(3, 1, 2, 3) === 3);

console.log(getSelectedOption(1, 1, 2, 3) === 9);
console.log(getSelectedOption(2, 1, 2, 3) === 0);
console.error(getSelectedOption(1, 4, 2, 3) === 4);
