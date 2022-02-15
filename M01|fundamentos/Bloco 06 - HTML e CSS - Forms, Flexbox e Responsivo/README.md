![](../bannerdosblocos/trybe-exercicios-bloco06.png)

## Exercício 06.01 - Parte II: input tag, types e attributes

O objetivo desse exercício é praticar o conteúdo de formulário criando uma simples tela de login. É solicitado o seguinte:

* Adicione os campos de entrada para email e senha.
* Adicione um checkbox com o texto Lembre-me.
* Adicione um botão com o texto Entrar.
* Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
* Adicione o atributo required para os campos de email e senha.
* Adicione o atributo autocomplete="off" para o campo de email.
* Adicione o atributo autofocus para o campo de email.

## Exercício 06.01 - Parte IV: Entenda o prevent default

O objetivo desse exercício é descobrir como funciona o prevent default e visualizar na prática como ele previne que o comportamento padrão de um evento seja executado. É solicitado o seguinte:

* Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método preventDefault para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
* Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
* Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. _Dica: para capturar a tecla digitada, utilize o event.key._

## Exercício 06.01 - Criando um formulário para concorrer a uma viagem

O objetivo desse exercício é criar um formulário bem completo para desenvolver todo o aprendizado do conteúdo do dia. É solicitado o seguinte:

![](../bannerdosblocos/estrutura-exemplo-exercicio6.1.png)

* O formulário deverá permitir que o usuário insira os seguintes campos:
  * Nome Completo:
    * Limitado entre 10 e 40 caracteres.
  * E-mail:
    * Limitado entre 10 e 50 caracteres.
  * Destino Preferido:
    * 4 opções: Cidade, Campo, Praia, Montanhas.
  * Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
    * Limite de 500 caracteres.
  * Qual a melhor data para realizar sua viagem?
  * Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
  * Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
* Crie um botão para enviar as informações preenchidas.
* Interrompa o comportamento padrão do botão submit utilizando o método preventDefault.
* Crie um botão que limpe as informações contidas nos campos;