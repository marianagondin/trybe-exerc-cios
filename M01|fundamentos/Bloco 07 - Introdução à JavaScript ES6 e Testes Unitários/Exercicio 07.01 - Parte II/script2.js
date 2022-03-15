// Função 1 : Escreva uma função que vai receber uma string como parâmetro. 
// Sua função deverá procurar pela letra x em uma string qualquer que você 
// determinar e substituir pela string que você passou como parâmetro. 
// Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

function findXandReplace (string) {
  const phrase = 'Tryber x aqui! Tudo bem?';
  const result = phrase.replace('x', `${ string }`);

  const languages = ['HTML', 'CSS', ' JavaScript'];
  const scresult = languages.sort((a, b) => a - b);

  return `${ result } Minhas principais habilidades são ${ scresult }. #GoTrybe`;
}

findXandReplace('Mariana');