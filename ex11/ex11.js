var salario = parseFloat(prompt("Digite o salario do colaborador "))
var aumento_20 = (0.2)
var aumento_15 = (0.15)
var aumento_10 = (0.1)
var aumento_5 = (0.05)

if (salario == 280) {
    alert("O salario antes do reajuste: R$ " + salario +
        "\nPercentual de aumento aplicado é: 20%" +
        "\nValor do aumento R$ " + (salario * aumento_20) +
        "\nNovo salário após o reajuste R$  " + ((salario * aumento_20) + salario))


} else if (salario >= 281 && salario <= 700) {
    alert("O salario antes do reajuste: " + salario +
        "\nPercentual de aumento aplicado é: 15%" +
        "\nValor do aumento " + (salario * aumento_15) +
        "\nNovo salário após o reajuste: " + ((salario + (salario * aumento_15))))


} else if (salario >= 701 && salario <= 1500) {
    alert("O salario antes do reajuste: " + salario +
        "\nPercentual de aumento aplicado é: 10%" +
        "\nValor do aumento " + (salario * aumento_10) +
        "\nNovo salário após o reajuste: " + (salario + (salario * aumento_10)))

} else if (salario >= 1501) {
    alert("O salario antes do reajuste: " + salario +
        "\nPercentual de aumento aplicado é: 5%" +
        "\nValor do aumento " + (salario * aumento_5) +
        "\nNovo salário após o reajuste: " + (salario + (salario * aumento_5)))
} else {
    alert("Verifique o valor digitado" +
        "\n O valor tem quer ser maior ou igual a R$ 280,00"

    )
}


/*
alert(
    "O salário antes do reajuste: " + salario + 
    "\nPercentual de aumento aplicado é: " + percentualAumento + "%" + 
    "\nNovo salário após o reajuste: " + novoSalario
);

*/