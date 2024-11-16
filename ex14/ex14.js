var nota01=parseFloat(prompt("Digite a primrira nota do aluno: "))
var nota02=parseFloat(prompt("Digite a segunda nota do aluno: "))
var res =(nota01+nota02)/2

if (res>=9 && res<=10) {
    alert(" Você esta aprovado e a sua nota final é A" )
    
}else if (res>= 7.5 && res<= 9) {
        alert(" Você esta aprovado e a sua nota final é B")
} 
else if (res>= 6 && res<= 7.5) {
        alert(" Você esta aprovado e a sua nota final é C" )
} 
else if (res>= 4 && res<=6) {
        alert(" Você esta aprovado e a sua nota final é D" )
} 
else if (res>= 4 && res<=0) {
        alert(" Você esta aprovado e a sua nota final é E" )
} 
else {
    alert("Por favor verifique as NOTAS digitadas.")
}

