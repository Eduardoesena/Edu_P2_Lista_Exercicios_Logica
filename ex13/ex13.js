var dia_da_semana =parseFloat(prompt("Digite um numero:" +
    "\n 1-Domingo" +
    "\n 2-Segunda" +
    "\n 3-Terça" +
    "\n 4-Quarta"+
    "\n 5-Quinta"+
    "\n 6-Sexta"+
    "\n 7-Sadado"
))

if (dia_da_semana === 1) {
    alert("Esse numero representa Domingo. ")
    
} else if(dia_da_semana === 2){
    alert("Esse numero representa Segunda. ")
}
else if(dia_da_semana === 3){
    alert("Esse numero representa Terça. ")
}
else if(dia_da_semana === 4){
    alert("Esse numero representa Quarta. ")
}
else if(dia_da_semana === 5){
    alert("Esse numero representa Quinta. ")
}
else if(dia_da_semana === 6){
    alert("Esse numero representa Sexta. ")
}
else if(dia_da_semana === 7){
    alert("Esse numero representa Sabado. ")
}
else{
    alert("Verifique o numero digitado!")
}

