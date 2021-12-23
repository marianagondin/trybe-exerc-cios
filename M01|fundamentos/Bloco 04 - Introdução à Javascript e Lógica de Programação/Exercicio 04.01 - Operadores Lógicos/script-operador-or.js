var weekDay = "sexta-feira";

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else if (weekDay == "sábado" || weekDay == "domingo") {
    console.log("FINALMENTE, descanso merecido UwU")
} else {
    console.log(undefined)
}

// Bônus: Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo.

var gymDays = ["segunda-feira","quarta-feira","sexta-feira"];
var todayIs = "domingo";
var isGymDay;

if (todayIs == "segunda-feira" || todayIs == "quarta-feira" || todayIs == "sexta-feira") {
    isGymDay = true;
    console.log ("Hoje é " + todayIs + ", então bora malhar!!!")
} else if (todayIs == "terça-feira" || todayIs == "quinta-feira" || todayIs == "sábado" || todayIs == "domingo") {
    isGymDay = false;
    console.log("Hoje é " + todayIs + ", então pode descansar =D")
} else {
    isGymDay = undefined;
    console.log("Não entendi a qual dia da semana você se refere. Poderia repetir?")
}