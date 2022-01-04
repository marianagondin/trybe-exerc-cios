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

## Exercício 06.01 - Criando um formulário de currículo

O objetivo desse exercício é contextualizar aquilo que foi aprendido no dia em uma única atividade. É solicitado o seguinte:

* Crie um arquivo HTML chamado form.html para o formulário.
* Caso julgue necessário, crie estilos CSS para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo styles.css.
* Crie também um arquivo script.js para seu código JavaScript.
* Crie um fieldset para os seguintes dados pessoais:
  * Nome - Texto
    * Limite de 40 caracteres
    * Campo obrigatório
  * Email - Texto
    * Limite de 50 caracteres
    * Campo obrigatório
  * CPF - Texto
    * Limite de 11 caracteres
    * Campo obrigatório
  * Endereço - Texto
    * Limite de 200 caracteres
    * Campo obrigatório
  * Cidade - Texto
    * Limite de 28 caracteres
    * Campo obrigatório
  * Estado - Select
    * Todos os estados do Brasil
    * Utilize estruturas de repetição via JavaScript para gerar as opções
    * Campo obrigatório
  * Tipo - Radio Button
    * Casa, Apartamento
    * Campo obrigatório
* Crie outro fieldset para dados do seu último emprego
  * Resumo do currículo - TextArea
    * Limite de 1000 caracteres
    * Campo obrigatório
  * Cargo - Texto
    * Limite de 40 caracteres
    * Campo obrigatório
  * Descrição do cargo - Texto
    * Limite de 500 caracteres
    * Campo obrigatório
  * Data de início - Texto
    * Verificar o formato da data dd/mm/aaaa.
    * O dia deve ser > 0 e <= 31.
    * O mês deve ser > 0 e <= 12.
    * O ano não pode ser negativo.
    * Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
    * Campo obrigatório
* Logo abaixo do formulário, crie um botão que:
  * Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
  * Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
  * Caso todos os dados sejam válidos, monte uma div com o consolidado dos dados que foram inseridos no formulário.
  * Caso haja algum dado inválido, mostre em uma div uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
* Crie um botão Limpar que limpa todos os campos do formulário e a div com seu currículo também.
