
var ano = parseInt(prompt("Digite um ano para verificar se é bissexto:"));


if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(ano + " é um ano bissexto.");
} else {
    alert(ano + " não é um ano bissexto.");
}
