// 1. Palíndromos
function palindromo (word) {
    let inverse = word.split('').reverse().join('');
    if(word === inverse) {
        return true;
    } else {
        return false;
    }
}

// 2. Array maior

function maiorValor (array) {
    let valorMax = 0;
    for (let i in array) {
        if (array[valorMax] < array[i]) {
            valorMax = i;
        }
    }

    return valorMax;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]))

// 3. Array menor

function menorValor (array) {
    let valorMin = 0;
    for (let i in array) {
        if (array[valorMin] > array[i]) {
            valorMin = i;
        }
    }

    return valorMin;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

// 4. Array de nomes

function theBiggestName (name) {
    let maiorNome = name[0];
    for (let i in name) {
        if (maiorNome.length < name[i].length) {
            maiorNome = name[i];
        }
    }

    return maiorNome;
}

console.log(theBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5. Números que se repetem - Gabarito da Trybe:

function maisRepetido(numeros) {
    let num = {};
  
    for (let index = 0; index < numeros.length; index += 1) {
      let valor = numeros[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// 6.

function fatorialSomada (numbers) {
    let somaNumerica = 0;
    for (let i = 1; i <= numbers; i += 1) {
        somaNumerica = somaNumerica + i;
    }

    return somaNumerica;
}

console.log(fatorialSomada(5));

// 7. Fim das palavras - Gabarito da Trybe:

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }


  console.log(verificaFimPalavra('trybe', 'be'));
  console.log(verificaFimPalavra('joaofernando', 'fernan')); 