![](../bannerdosblocos/trybe-exercicios-bloco04.png)

## Exercicio 04.01 - Variáveis

O objetivo desse exercício é entender o conceito de variáveis e constantes, convenção de nomenclatura Camel Case e o uso do plugin Code Runner no VS Code. É solicitado o seguinte:

* Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
* Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
* Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
* Utilize o console.log() para imprimir as constantes e variáveis que você criou.
* Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
* Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 

## Exercício 04.01 - Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

O objetivo desse exercício é aprender a utilizar o operador _typeof_, além de criar algumas variáveis para praticar as diversas maneiras de se trabalhar com elas através do Code Runner. É solicitado o seguinte:

* Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail.
* Experimente executar o comando console.log(typeof patientAge) e veja o que acontece!
* Experimente também trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação.
* Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
* Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar ~~sempre~~ o console.log() para imprimir as variáveis e checar os resultados das operações!
* Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

## Exercicio 04.01 - Condições If e Else

O objetivo desse exercício é criar estruturas condicionais com os operadores aprendidos. É solicitado o seguinte:

* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
* Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
  - Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
  - Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
  - Se a nota for menor que 60, imprima "Você foi reprovada(o)"
* Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
* Altere o valor da nota para verificar se as condições que você implementou funcionam;

## Exercício 04.01 - Operadores Lógicos

O objetivo desse exercício é trabalhar com os operadores lógicos afim de nos familiarizar com o conceito de cada uma. É solicitado o seguinte para cada operador:

* Operador AND
  - Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
  - Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
  - Implemente condicionais para que:
    - Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
    - Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
    - Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
    - Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
    - Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
  - Agora imprima a variável message fora das suas condições.

* Operador OR:
  - Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
  - Implemente condicionais para que:
    - Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
    - Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

_Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo._

## Exercício 04.01 - Switch e Case


O objetivo desse exercício é praticar os conhecimentos sobre essa segunda forma de criar estruturas de condicionar antes de partir para a série de exercícios. É solicitado o seguinte:

* Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada';
* Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default , imprima a mensagem de 'não se aplica'.