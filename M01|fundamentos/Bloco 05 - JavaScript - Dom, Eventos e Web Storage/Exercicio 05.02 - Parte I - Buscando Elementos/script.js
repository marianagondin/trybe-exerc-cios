const ex1 = document.getElementById("elementoOndeVoceEsta");
console.log(ex1);

const ex2 = document.getElementById("elementoOndeVoceEsta").parentNode;
console.log(ex2);
ex2.style.color = "green";

const ex3 = document.getElementById("primeiroFilhoDoFilho");
console.log(ex3);
ex3.innerText = "Conta uma velha lenda, que um rei, perto da morte, instituiu um prêmio para quem respondesse com mais sabedoria a três perguntas: 1 – Qual o momento mais importante da vida? 2 – Quem era a pessoa mais importante do mundo? 3 – Qual a coisa mais importante a ser feita? Ganhou o prêmio um jovem que respondeu que o momento mais importante da vida é o agora; Que a pessoa mais importante do mundo é justamente a pessoa que está a sua frente; E que a coisa mais importante a ser feita era tratar bem, com dignidade, respeito e bondade, justamente este que está aí, frente a frente com você. A atenção e a importância do outro";

const ex4 = document.getElementById("pai").firstElementChild;
console.log(ex4);

const ex5 = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
console.log(ex5);

const ex6 = document.getElementById("elementoOndeVoceEsta").nextSibling;
console.log(ex6);

const ex7 = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
console.log(ex7);

const ex8 = document.getElementById("pai").childNodes[5];
console.log(ex8);
