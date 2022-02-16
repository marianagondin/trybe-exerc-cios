![](../bannerdosblocos/trybe-exercicios-bloco10.png)

## Exercício 10.01 - Classes e React 

O objetivo desse exercício é treinar um pouco do que foi aprendido para aplicar em futuras atividades. É solicitado o seguinte:

* Crie um novo projeto utilizando npx create-react-app nome-app.
* Na pasta src, acesse App.js e remova todo o conteúdo da função App, de modo que ela fique exatamente como mostrado na plataforma do Course.
* Na pasta src, crie um arquivo chamado Component.js e, dentro dele, um componente que retorne um _h1_ com o seu nome um paragráfo, _p_, com uma breve descrição sobre você.
* Importe seu componente em App.js de modo que ele seja renderizado na tela quando a aplicação for iniciada, npm start.
* Execute sua aplicação, npm start, e verifique se tudo ocorreu como o esperado.
  
## Exercício 10.01 - Exercícios React

O objetivo desse exercício é praticar todo o conteúdo do dia aplicando alguns componentes em App.js. Foi necessário criar subpastas para que os projetos fossem criados individualmente. É solicitado o seguinte:

* Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app.
* Crie uma lista de tarefas simples seguindo os passos do Course.
* Crie um novo projeto utilizando npx create-react-app.
  * Na pasta src, crie um novo arquivo chamado Header.jsx, que representará o componente Header; 
  * No arquivo Header.jsx, crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
  * No arquivo App.js, importe o componente Header criado anteriormente;
  * Renderize o componente Header no App.js;
  * Na pasta src, crie um novo arquivo chamado Content.jsx, que representará o componente Content;
  * Dentro do arquivo Content.jsx , crie uma classe React chamada Content;
  * Ainda no arquivo Content.jsx, adicione o array conteudos;
  * A classe Content deve renderizar o array conteudos com a utilização da função map, com formato idêntico ao exemplificado no Course;
  * Lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização.
  * Exporte o componente Content;
  * No arquivo App.js, importe o componente Content criado anteriormente;
  * Renderize o componente Content no App.js;
  * Crie um novo arquivo Footer.jsx;
  * No arquivo Footer.jsx, crie uma classe chamada Footer.
  * A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.
  * Importe o componente Footer no app.js.
  * Renderize o componente Footer no app.js.
* **Bônus:** Estilize a aplicação do exercicio 3. Para isso, adicione classes para estilização dos seus componentes de forma que cada conteúdo listado seja um Card. _Utilizei a estilização do gabarito para padronização da atividade._