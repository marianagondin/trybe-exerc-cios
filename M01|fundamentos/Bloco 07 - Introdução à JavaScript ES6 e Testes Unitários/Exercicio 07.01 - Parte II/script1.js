// Função 1
const fatorial = (n) => {
    return (n === 0 || n === 1) ? 1 : n * fatorial(--n);
}

console.log(fatorial(7));


// Função 2
const maiorPalavra = phrase => phrase.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
