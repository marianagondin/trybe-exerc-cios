const notaPessoaCandidata = 100;

if (notaPessoaCandidata >= 80) {
    console.log('Parabéns, vocês foi aprovada(o)!')
} else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Você foi reprovada(o)')
}