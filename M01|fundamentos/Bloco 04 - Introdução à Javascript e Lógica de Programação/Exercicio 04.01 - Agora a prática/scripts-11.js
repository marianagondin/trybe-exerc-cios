const salarioBruto = 3600.00;
let salarioLiquido;
var salarioBase;
let iNSS;
let iR;

if (salarioBruto <= 1556.94) {
    iNSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1559.95 && salarioBruto <= 2594.92) {
    iNSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    iNSS = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.82) {
    iNSS = 570.88;
} else {
    iNSS = undefined;
}

salarioBase = salarioBruto - iNSS;

if (salarioBase <= 1903.98) {
    iR = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    iR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    iR = (salarioBase * 0.15) -354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    iR = (salarioBase * 0.225) - 636.13;
} else if (salarioBase >= 4664.68) {
    iR = (salarioBase * 0.275) - 869.36;
} else {
    iR = undefined;
}

salarioLiquido = salarioBase - iR;
console.log("O salário líquido a ser recebido é de R$" + salarioLiquido);



