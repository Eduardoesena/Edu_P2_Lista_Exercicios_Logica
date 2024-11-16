var nota1 = parseFloat(prompt("Digite a primeira nota do aluno"));
var nota2 = parseFloat(prompt("Digite a segunda nota do aluno"));
var media = (nota1+nota2)/2;

if (media ===10){
    alert("APROVADO com Distinção a sua nota é" + media);
    
}
else if (media >=7){
    alert("APROVADO PARABENS, sua nota é " + media);
    
}

else{
    alert("REPROVADO sua nota é " + media)
}
