![](../bannerdosblocos/trybe-exercicios-bloco01.png)

## Exercício 01.03 - Parte 1
O objetivo dessa atividade é trabalhar a criação de diretórios e arquivos utilizando comandos básicos no terminal. É solicitado o seguinte: 

* Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
* Crie um arquivo de texto com o nome trybe.txt .
* Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt
* Renomeie o arquivo trybe.txt .
* Dentro de unix_tests , crie um novo diretório chamado backup .
* Mova o arquivo trybe_backup.txt para o diretório backup .
* Dentro de unix_tests , crie um novo diretório chamado backup2 .
* Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
* Apague a pasta backup .
* Renomeie a pasta backup2 para backup .
* Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
* Apague o diretório backup .
* Limpe o terminal.

*Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :*

1. Internet
2. Unix
3. Bash
4. HTML
5. CSS
6. JavaScript
7. React
8. SQL

* Mostre na tela as 5 primeiras skills do arquivo skills.txt .
* Mostre na tela as 4 últimas skills do arquivo skills.txt .
* Apague todos os arquivos que terminem em .txt .

## Exercício 01.03 - Parte 2

O objetivo dessa atividade é trabalhar a manipulação e busca de arquivos de texto utilizando comandos básicos no terminal. É solicitado o seguinte:

* Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl: *O link do arquivo está disponível no próprio exercício do [Course](https://app.betrybe.com/course)*
* Mostre todo o conteúdo do arquivo countries.txt na tela.
* Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .
* Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .
* Busque por Brazil no countries.txt .
* Busque novamente por brazil , mas agora utilizando o lower case.
  
  *Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.*

* Busque pelas frases que não contenham a palavra fox .
* Conte o número de palavras do arquivo phrases.txt .
* Conte o número de linhas do arquivo phrases.txt .
* Crie os arquivos empty.tbt e empty.pdf .
* Liste todos os arquivos do diretório unix_tests .
* Liste todos os arquivos que terminem com txt .
* Liste todos os arquivos que terminem com tbt ou txt .
* Acesse o manual do comando ls .

## Exercício 01.04 - Parte 1

O objetivo dessa atividade é trabalhar a entrada e saída de dados de um arquivo utilizando comandos básicos no terminal. É solicitado o seguinte:

* Navegue até a pasta unix_tests ;
* Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.
* Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
* Conte quantas linhas tem o arquivo skills2.txt .
* Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.
* Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
* Conte o número de linhas que contêm as letras br .
* Conte o número de linhas que não contêm as letras br.
* Adicione dois nomes de países ao final do arquivo phrases2.txt .
* Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
* Ordene o arquivo bunch_of_things.txt .

## Exercício 01.04 - Parte 2

O objetivo dessa atividade é trabalhar as permissões de usuário que damos a um arquivo utilizando comandos básicos no terminal. É solicitado o seguinte:

* Navegue até a pasta unix_tests ;
* Rode o comando ls -l e veja quais as permissões dos arquivos;
* Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;
> Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
* Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;
> Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
* Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .
> Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt



## Exercício 01.04 - Parte 3

O objetivo dessa atividade é trabalhar com diversos processos no terminal utilizando comandos básicos. É solicitado o seguinte:

* Liste todos os processos;
* Agora use o comando sleep 30 & ;
* Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;
* Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;
* Crie um processo em background que rode o comando sleep por 300 segundos.
* Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
> Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.
* Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
> Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.
* Retome a execução do processo sleep 100 em background com o comando bg .
* Termine a execução de todos os processos sleep ~~(mate os processos)~~ .
  
## Exercício 01.04 - Parte 4

O objetivo dessa atividade bônus é conhecer alguns comandos legais e divertidos no terminal. É solicitado o seguinte:

* Se você utiliza o Linux , abra o terminal e execute o comando sudo apt-get install cmatrix , ou para pessoas usuárias de macOS , utilize no terminal brew install cmatrix . Depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;
* No sistema Linux , execute o comando sudo apt-get install fortune , ou no macOS brew install fortune , e após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;
* Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;
* Execute o comando sudo apt-get install sl em um terminal Linux , ou brew install sl em um terminal macOS . Após a instalação, execute o comando sl . Agora tente sl -F ;
* No sistema Linux , execute o comando sudo apt-get install cowsay , ou brew install cowsay no macOS . Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;
* Descubra os fatores primos usando o comando factor e em seguida o número 42 ;
* Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .
* Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅