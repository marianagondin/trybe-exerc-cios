const anguloA = 45;
const anguloB = 90;
const anguloC = 45;

if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log("ERROR XoX");
} else if (anguloA + anguloB + anguloC == 180) {
    console.log(true);
} else {
    console.log(false);
}