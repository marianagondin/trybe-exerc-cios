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

## Exercício 07.01 - Parte II

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

## Exercício 07.02 - Parte I
O objetivo desse exercício é trabalhar melhor com o fluxo de exceção e entender sua importância. É solicitado o seguinte:
* Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
  * Tente executar a aplicação com um dos valores em branco.
  * Utilize o throw new Error e o bloco try/catch .
  * Imprima o erro no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. 
  * Evite funções que tenham muitas responsabilidades distintas.
* Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.


## Exercício 07.02 - Parte II
O objetivo desse exercício é trabalhar com a utilização de dados para obter informações específicas. É Solicitado o seguinte:
* Complete a função customerInfo para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
* Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

## Exercício 07.02 - Parte III
O objetivo desse exercício é praticar a manipulação de objetos para acesso de dados. É solicitado o seguinte:
* Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
* Crie uma função para mostrar o tamanho de um objeto.
* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.