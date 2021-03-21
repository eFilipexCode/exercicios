// aça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
//estado civil seja “CASADA”, solicitar o tempo de casada (anos). 

function printMessage(string) {
    console.log(string);
};

function formatData(name, sex, status) {
    return {
        name: name.toUpperCase(),
        sex: sex.toUpperCase(),
        status: status.toUpperCase()
    };
}

function handleData(nameInput, sexInput, statusInput) {
    const { name, sex, status } = formatData(nameInput, sexInput, statusInput);
    if (sex === 'F' && status === 'CASADA') {
        printMessage(`Sra. ${name}, digite o tempo (em anos), do casamento:`);
        return true;
    } else {
        return false;
    }
};

handleData('Marcela', 'f', 'casada');
handleData('andreia', 'F', 'casada');
handleData('MARTA', 'F', 'casaDA');

console.log(handleData('Marcelo', 'm', 'solteiro'));
console.log(handleData('MARTA', 'F', 'solteira'));
console.log(handleData('Selma', 'F', 'SOLTEIRA'));