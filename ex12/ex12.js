var salario =parseFloat(prompt("Digite o salário atual :"))
var aumento_75 = (0.075)
var aumento_15 = (0.15)
var aumento_22 = (0.0242)
var aumento_27 = (0.0275)

if (salario <= 1903.98) {
    alert("O salario antes do reajuste: R$ " + salario +
        "\nPercentual de aumento aplicado é: 20%" +
        "\nValor do aumento R$ " + (salario * aumento_20) +
        "\nNovo salário após o reajuste R$  " + ((salario * aumento_20) + salario)



    )
    



} else if (salario > 280 && salario <= 700) {
    percentual = 15;
} else if (salario > 700 && salario <= 1500) {
    percentual = 10;
} else if (salario > 1500) {
    percentual = 5;

}

/*
(salario == 280) {
    salario + aumento_20
    alert("O salario antes do reajuste: R$ " + salario +
        "\nPercentual de aumento aplicado é: 20%" +
        "\nValor do aumento R$ " + (salario * aumento_20) +
        "\nNovo salário após o reajuste R$  " + ((salario * aumento_20) + salario))


}



*/