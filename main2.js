

//AND (&&): Retorna true somente se ambos os operandos forem verdadeiros. Exemplo: let usuario = "Ana"; let senha = "senha"; if (usuario && senha) { console.log("Acesso autorizado!"); }
//for (var i = 1; i <= 15; i ++){
//    console.log("thiago " + i)
//}


//Exemplo 1 AND / &&
let usuario = "Thiago"
let senha = "abcd"
if (usuario && senha){
console.log ("Acesso Concedido !")
}else{
    console.log (" Acesso Negado !")
}

//Exemplo 2 AND / &&
let documento = "habilitaçao"
let idade = "18"
if (documento && idade){
    console.log ("Pode Dirigir !")
}
//Exemplo 3 AND / &&
var num1 = 10
var num2 = 35
var num3 = 20

if (num1 > num2 && num1 > num3){
    console.log("o primeiro numero é maior")
}
if (num2 > num1 && num2 > num3){
    console.log("o segundo numero é maior")
}
if (num3 > num1 && num3 > num2 ){
    console.log("o terceiro numero é o maior")
}

