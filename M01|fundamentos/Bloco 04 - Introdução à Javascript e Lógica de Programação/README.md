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

## Exercício 04.01 - Agora a prática!!

O objetivo desse exercício é fazer onze pequenos programas trabalhando com todo o conteúdo aprendido nesse bloco de uma única vez, desde a lógica condiciona e operadores aritméticos até a lógica dos operadores lógicos. É solicitado o seguinte:

1. Faça cinco programas, um para cada operação aritmética básica. O programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

   * Adição (a + b)
   * Subtração (a - b)
   * Multiplicação (a * b)
   * Divisão (a / b)
   * Módulo (a % b)

2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
   * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
   * Um ângulo será considerado inválido se não tiver um valor positivo.

6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  * Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
  * Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
  * Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
  * Exemplo: bishop (bispo) -> diagonals (diagonais)

7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
  * Porcentagem >= 90 -> A
  * Porcentagem >= 80 -> B
  * Porcentagem >= 70 -> C
  * Porcentagem >= 60 -> D
  * Porcentagem >= 50 -> E
  * Porcentagem < 50 -> F

  * O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
  
8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
  **Bônus:** use somente um if.

9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
  **Bônus:** use somente um if.

10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

* Atente que, sobre o custo do produto, incide um imposto de 20%.
* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
* O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    - valorCustoTotal = valorCusto + impostoSobreOCusto
    - lucro = valorVenda - valorCustoTotal (lucro de um produto)

11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

* A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    * **INSS (Instituto Nacional do Seguro Social)**
      - Salário bruto até R$ 1.556,94: alíquota de 8%
      - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
      - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
      - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    * **IR (Imposto de Renda)**
      - Até R$ 1.903,98: isento de imposto de renda
      - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
      - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
      - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
      - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
  **Exemplo:** Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
  - O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
  - Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
  - Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    - R$ 2.670,00: salário com INSS já deduzido;
    - 7.5%: alíquota de imposto de renda;
    - R$ 142,80 parcela a se deduzir do imposto.
  - Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
  - O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
  **RESULTADO: R$ 2.612,55**

    **Dica:** que tal identificar as alíquotas com variáveis de nomes explicativos?

## Exercícios 04.02 - Arrays (Listas)

O objetivo desse exercício é entender melhor o conceito de armazenar mais de um valor em uma mesma variável, criando um array e o manipulando da maneira que for necessária. É solicitado o seguinte:

* Obtenha o valor "Serviços" do array menu;
* Procure o índice do valor "Portfólio" do array menu
* Adicione o valor "Contato" no final do array menu

## Exercício 04.02 - For

O objetivo desse exercício é trabalhar com o loop for de modo a executar blocos de códigos inúmeras vezes. É solicitado o seguinte:

* Utilize o for para imprimir os elementos da lista groceryList com o console.log()

## Exercício 04.02 - For/of

O objetivo desse exercício é consolidar ainda mais o conhecimento sobre essa nova funcionalidade do JavaScript, que itera arrays e objetos. É solicitado o seguinte:

* Utilize o for/of para imprimir os elementos da lista names com o console.log()

## Exercício 04.02 - Agora a prática

O objetivo desse exercício é aprofundar os conhecimentos aprendidos no bloco. Serão sete exercícios utilizando um único array como base. É solicitado o seguinte:

* Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
* Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
  - A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
* Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
* Utilizando for , descubra qual o maior valor contido no array e imprima-o;
* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
* Utilizando for , descubra qual o menor valor contido no array e imprima-o;
* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

## Exercício 04.02 - Bônus

O objetivo deste exercício é introduzir o conteúdo de introdução ao algoritmo de ordenação Bubble Sort, de modo a praticá-lo após a leitura de um artigo sobre o assunto. É solicitado o seguinte:

* Ordene o array numbers em ordem crescente e imprima seus valores;
* Ordene o array numbers em ordem decrescente e imprima seus valores;
* Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

## Exercício 04.03 - Agora a prática

O objetivo desse exercício é praticar a lógica de programação e criação de algoritmos práticos e de fácil interpretação para aprofundar os conhecimentos sobre o assunto. É solicitado o seguinte:

* Crie um algoritmo que retorne a fatorial de 10.
* Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
* Considere o array de strings do exercício e escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
* Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

## Exercicio 04.03 - Bônus

O objetivo desse exercício é trabalhar com um exercício que exige mais da lógica de programação. É solicitado o seguinte:

* Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
* Agora inverta o lado do triângulo. 
* Depois, faça uma pirâmide com n asteriscos de base.
* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.
* Faça um programa que diz se um número definido numa variável é primo ou não.

## Exercício 04.04 - Objetos 

O objetivo deste exercício é fixar o conteúdo sobre estruturas ou coleções compostas por pares chave-valor, os chamados objetos. É solicitado o seguinte:

* Crie um objeto player contendo as variáveis listadas no exercício.
* Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
* Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
* Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
* Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".