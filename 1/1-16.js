// XVI -  A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de
//queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou
//presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em
//que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em
//quilos) de queijo, presunto e carne necessários para compra. 

function calc(qtd) {
    const queijosEmKg = ((qtd * 2) * 50) / 1000;
    const presuntosEmKg = (qtd * 50) / 1000;
    const hamEmKg = (qtd * 100) / 1000;
    return `QUEIJO = ${queijosEmKg}KG PRESUNTO = ${presuntosEmKg}KG HAMBURGUER = ${hamEmKg}KG`
};

console.log(calc(1) === 'QUEIJO = 0.1KG PRESUNTO = 0.05KG HAMBURGUER = 0.1KG');
console.log(calc(5) === 'QUEIJO = 0.5KG PRESUNTO = 0.25KG HAMBURGUER = 0.5KG');
console.log(calc(20) === 'QUEIJO = 2KG PRESUNTO = 1KG HAMBURGUER = 2KG');