//Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
//normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
//para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 

function handlePayment(price, method) {
    let finalValue;
    if (method === 1) {
        finalValue = calcDescount(price, 10);
    } else if (method === 2) {
        finalValue = calcDescount(price, 15);
    } else if (method === 3) {
        finalValue = price
    } else if (method === 4) {
        finalValue = calcTaxes(price, 10);
    };
    return finalValue;
};

const calcDescount = (price, descount) => price - (price * (descount / 100));
const calcTaxes = (price, tax) => price + (price * (tax / 100));

console.log(handlePayment(40, 1) === 36);
console.log(handlePayment(40, 2) === 34);
console.log(handlePayment(40, 3) === 40);
console.log(handlePayment(40, 4) === 44);