![](../bannerdosblocos/trybe-exercicios-bloco07.png)

## Exercício 07.01 - Parte I

O objetivo desse exercício é entender o quão prático é trabalhar com template literals e arrow functions. É solicitado o seguinte:

* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
  * Modifique a estrutura da função para que ela seja uma arrow function.
  * Modifique as concatenações para template literals.
  * Copie o código mostrado no Course.
* Copie o código mostrado no Course e faça uma função que retorne o array oddsAndEvens em ordem crescente.
  * Utilize template literals para que a chamada console.log(oddsAndEvens aliado ao seu código); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
  * **Bônus (opcional)**: tente fazer o mesmo exercício utilizando o método sort.**Spoiler**: É possível realizar uma função que ordene qualquer array de números.

## Exercício 07.02 - Parte II

O objetivo desse exercício é praticar o que foi aprendido sobre let, const, arrow functions, template literals e ternary operator:

* Crie uma função que receba um número e retorne seu fatorial.
  * Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 x 3 x 2 x 1 = 24.
  * Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.
* Crie uma função que receba uma frase e retorne qual a maior palavra.
* Crie uma página que contenha:
  * Um botão ao qual será associado um event listener;
  * Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
  * Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
* Crie um código JavaScript com a seguinte especificação:
  * Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
  * Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.
  * Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
