/*
Crie um irmão para o elementoOndeVocêEstá
*/ 

let elementFather = document.querySelector("#pai");
let elementBro = document.createElement('section');
let textElementBro = "Atenção2!"
elementBro.innerText = textElementBro;
elementFather.appendChild(elementBro);
console.log(elementFather);

/*
Crie um filho para elementoOndeVoceEsta
*/

let father = document.getElementById("elementoOndeVoceEsta");
let firstChild = document.createElement('section');
father.appendChild(firstChild);
console.log(father);

/*
Crie um filho para primeiroFilhoDoFilho
*/

let dad = document.getElementById("primeiroFilhoDoFilho");
let firstGrandson = document.createElement('section');
dad.appendChild(firstGrandson);
console.log(dad);

/*
A partir desse filho criado, acesse terceiroFilho
*/

let access = firstGrandson.parentElement.parentElement.nextElementSibling;
console.log(access);

