![](../bannerdosblocos/trybe-exercicios-bloco06.png)

## Exercicio 06.01 - Parte II: input tag, types e attributes

O objetivo desse exercícios é praticar o conteúdo de formulário criando uma simples tela de login. É solicitado o seguinte:

* Adicione os campos de entrada para email e senha.
* Adicione um checkbox com o texto Lembre-me.
* Adicione um botão com o texto Entrar.
* Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
* Adicione o atributo required para os campos de email e senha.
* Adicione o atributo autocomplete="off" para o campo de email.
* Adicione o atributo autofocus para o campo de email.

## Exercício 06.01 - Parte IV: Entenda o prevent default

O objetivo desse exercício é descobrir e entender a importância desse elemento para previnir que o comportamento padrão de um evento seja executado. É solicitado o seguinte:

* Crie um arquivo HTML index.html
* Crie um arquivo Javascript script.js
* Em seu arquivo HTML:
  * Adicione o script no final do body do HTML
  * Copie os três elementos acima ( a , input type="text" , checkbox ) em sua página
* Em seu arquivo JavaScript:
  * Adicione os seletores solicitados no começo do arquivo
  * Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
  * Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
  * Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. _(dica: para capturar a tecla digitada, utilize o event.key)_
