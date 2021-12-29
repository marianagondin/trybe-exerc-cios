let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.
for (let contador = 0; contador < numbers.length; contador+=1) {
    console.log(numbers[contador]);
}

// 2.
let resultSoma = 0;
for (let soma = 0; soma < numbers.length; soma +=1) {
    resultSoma += numbers[soma];
}
console.log(resultSoma);

// 3.
let somaParaMedia = 0;
for (let contadorParaMedia = 0; contadorParaMedia < numbers.length; contadorParaMedia += 1) {
    somaParaMedia += numbers[contadorParaMedia];
}

let mediaAritmetica = somaParaMedia / numbers.length;
console.log(mediaAritmetica);

// 4.
for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] > 20) {
        console.log("Valor maior que 20");
    } else {
        console.log("Valor menor ou igual a 20");
    }
}

// 5.


let higherNumber = numbers[0];

for (let indiceMaior = 1; indiceMaior < numbers.length; indiceMaior += 1) {
  if (numbers[indiceMaior] > higherNumber) {
    higherNumber = numbers[indiceMaior];
  }
}

console.log(higherNumber);

// 6.


let resultImpar = 0;
let resultPar = 0;

for (let indiceImpar = 0; indiceImpar < numbers.length; indiceImpar += 1) {
    if(numbers[indiceImpar]%2 === 0) {
        resultPar.push;
    } else {
        resultImpar.push;
    }
}

if (resultImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(resultImpar);
}

// 7. 


let smallestNumber = numbers[0];

for (let indiceMenor = 1; indiceMenor < numbers.length; indiceMenor += 1) {
  if (numbers[indiceMenor] < smallestNumber) {
    smallestNumber = numbers[indiceMenor];
  }
}

console.log(smallestNumber);

// 8.

let numbersCreated = [];
for (let index = 1; index <= 25; index +=1) {
    numbersCreated.push(index);
}
console.log(numbersCreated);

// 9.

for (let divisao = 0; divisao < numbersCreated.length; divisao += 1) {
    console.log(numbersCreated[divisao] / 2);
}