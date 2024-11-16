
var preco1 = parseFloat(prompt("Digite o preço do primeiro produto:"));
var preco2 = parseFloat(prompt("Digite o preço do segundo produto:"));
var preco3 = parseFloat(prompt("Digite o preço do terceiro produto:"));


if (preco1 < preco2 && preco1 < preco3) {
    alert("Você deve comprar o primeiro produto, que custa R$" + preco1);
} else if (preco2 < preco1 && preco2 < preco3) {
    alert("Você deve comprar o segundo produto, que custa R$" + preco2);
} else if (preco3 < preco1 && preco3 < preco2) {
    alert("Você deve comprar o terceiro produto, que custa R$" + preco3);
} else {
    alert("Há produtos com preços iguais. Escolha qualquer um dos mais baratos.");
}



