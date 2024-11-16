
var turno = prompt("Em que turno você estuda? Digite:" +
    "\nM - Matutino"+
    "\nV - Vespertino" +
    "\nN - Noturno");


if (turno === "M" || turno === "m") {
    alert("Bom dia!");
} else if (turno === "V" || turno === "v") {
    alert("Boa tarde!");
} else if (turno === "N" || turno === "n") {
    alert("Boa noite!");
} else {
    alert("Valor inválido!");
}
