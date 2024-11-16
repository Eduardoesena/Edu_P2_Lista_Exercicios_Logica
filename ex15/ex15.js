var l1=parseFloat(prompt("Digite o comprimento de um dos lados: "))
var l2=parseFloat(prompt("Digite o comprimento de um dos lados: "))
var l3=parseFloat(prompt("Digite o comprimento de um dos lados: "))

if (l1==l2 && l2==l3) {
    alert("Essa medida forma um Equilatero")
} 
else if(l1!=l2 && l2!=l3){
    alert("Essa medida forma um Escaleno")    
}
else {
    alert("Essa medida forma um Isósceles")    
}