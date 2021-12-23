let notaEstudante =67;

if (notaEstudante < 0 || notaEstudante > 100) {
    console.log("ERRO!!! Não foi possível converter a sua nota :c");
} else if (notaEstudante >= 90) {
    console.log("Nota A");
} else if (notaEstudante >= 80) {
    console.log("Nota B");
} else if (notaEstudante >= 70) {
    console.log("Nota C");
} else if (notaEstudante >= 60) {
    console.log("Nota E");
} else {
    console.log("Nota F");
}