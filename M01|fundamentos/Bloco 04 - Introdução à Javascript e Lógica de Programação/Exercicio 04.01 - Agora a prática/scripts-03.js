const firstNumber = 264;
const secondNumber = 7;
const thirdNumber = 55;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
     console.log("O maior de três números é o " + firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log("O maior de três números é o " + secondNumber);
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
    console.log ("O maior de três números é o " + thirdNumber);
} else {
    console.log("Não foi possível descobrir o maior de três números :c");
}