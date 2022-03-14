![](../bannerdosblocos/trybe-exercicios-bloco05.png)

## Exercício 05.01 - DOM e seletores

O objetivo deste exercício é trabalhar com os diversos tipos de seletores através do DOM. É solicitado o seguinte:

* Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
* Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
* Por fim, recupere o subtítulo e altere-o também.
* Adicione uma classe igual para os dois parágrafos.
* Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName.
* Altere algum estilo do primeiro deles.
* Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

## Exercício 05.01 - Funções de manipulação do DOM

O objetivo deste exercício é aplicar os conhecimentos na manipulação de elementos do HTML. É solicitado o seguinte:

* Crie uma função que mude o texto na tag p para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
* Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
* Crie uma função que mude a cor do quadrado vermelho para branco.
* Crie uma função que corrija o texto da tag h1.
* Crie uma função que modifique todo o texto da tag p para maiúsculo.
* Crie uma função que exiba o conteúdo de todas as tags p no console.

_Obs: Aqui será modificado elementos já existentes usando apenas as funções aprendidas até então!_

## Exercício 05.02 - Parte I - Buscando elementos

O objetivo deste exercício é trabalhar com propriedades que visam buscar elementos navegando através de outros. É solicitado o seguinte:

* Acesse o elemento elementoOndeVoceEsta.
* Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
* Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
* Acesse o primeiroFilho a partir de pai.
* Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
* Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
* Agora acesse o terceiroFilho a partir de pai.

## Exercício 05.02 - Parte II - Criando elementos

O objetivo desse exercício é criar elementos HTML de maneira dinâmica usando o JavaScript. É solicitado o seguinte:

* Crie um irmão para elementoOndeVoceEsta.
* Crie um filho para elementoOndeVoceEsta.
* Crie um filho para primeiroFilhoDoFilho.
* A partir desse filho criado, acesse terceiroFilho.

## Exercício 05.02 - Parte III - Removendo elementos

O objetivo desse exercício é remover elementos HTML de maneira dinâmica usando o JavaScript. É solicitado o seguinte:

* Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

## Exercício 05.02 - Agora a prática

O objetivo desse exercício é praticar todo o conteúdo aprendido nesse bloco. É solicitado o seguinte:

* Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body.
* Adicione a tag main com a classe main-content como filho da tag body.
* Adicione a tag section com a classe center-content como filho da tag main criada no passo 2.
* Adicione a tag p como filho do section criado no passo 3 e coloque algum texto.
* Adicione a tag section com a classe left-content como filho da tag main criada no passo 2.
* Adicione a tag section com a classe right-content como filho da tag main criada no passo 2.
* Adicione uma imagem com src configurado para o valor <https://picsum.photos/200> e classe small-image . Esse elemento deve ser filho do section criado no passo 5.
* Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6.
* Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
* Adicione a classe title na tag h1 criada.
* Adicione a classe description nas 3 tags h3 criadas;
* Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild().
* Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section.
* Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde.
* Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

## Exercício 05.03 - Conheça o addEventListener

O objetivo desse exercício é aprofundar os conhecimentos sobre essa função nativa do JavaScript, que cria um escutador de eventos em um elemento. É solicitado o seguinte:

* Crie uma função que adicione a classe 'tech' ao elemento 'li' quando for clicado.
* Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech'.
* Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página.
* Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo.

## Exercício 05.03 - Calendário Tryber

O objetivo desse exercício é praticar todo o conteúdo aprendido no bloco. É solicitado o seguinte:

* Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag ul com ID "days".
* Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
* Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
* Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
* Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
* Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
* Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag span contendo a tarefa.
* Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag div com a classe task.
* Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag div referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
* Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
* Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
