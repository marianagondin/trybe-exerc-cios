// Função utilizada neste exercício: 
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


// Função reescrita com Arrow Function e Template Literals:
  const testinScope = escopo => {
      let ifScope = 'Não devo ser utilizada fora do meu escopo if.';
      let elseScope = 'Não devo ser utilizada fora do meu escopo else.';

   return escopo ? `${ifScope} Ótimo, fui utilizada no escopo!` : elseScope;
  }

  console.log(testinScope(true));
  console.log(testinScope(false));


// Segunda função utilizada para o próximo exercício:
//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   // Seu código aqui.

//   console.log(oddsAndEvens); // será necessário alterar essa linha 

const oddsAndEvens = () => {
    const numbers = [13, 3, 4, 10, 7, 2];

    return `Os números ${numbers.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`
}

console.log(oddsAndEvens());