// Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são 
 //VERDADEIROS ou FALSOS.

function checkBooleanValues(value1, value2) {
    if (value1 && value2)
        return true;
    else if (!value1 && !value2)
        return false;
};

console.log(checkBooleanValues(true, true));
console.log(checkBooleanValues(false, false));