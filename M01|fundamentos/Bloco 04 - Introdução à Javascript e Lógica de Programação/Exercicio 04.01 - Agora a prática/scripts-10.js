const custoProduto = 25;
const vendaProduto = 50;
var impostoProduto = custoProduto * 0.2;

let lucro;

if (custoProduto < 0 || vendaProduto < 0) {
    console.log("ERRO!!! Um dos valor é menor que zero :c");
} 

lucro = [vendaProduto - (custoProduto + impostoProduto)] * 1000;
console.log("Você lucrou " + lucro + " reais!");