num1 = 10;
num2 = 19;
num3 = 31;

console.log('Soma: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: ' + (num1 % num2));


if (num1 > num2 && num1 > num3){
    console.log(num1)
}  else if (num2 > num1 && num2> num3){
    console.log(num2)
}
else{
    console.log(num3)
}




let Angulo1 = 50;
let Angulo2 = 50;
let angulo3 = 80;

let soma; 

soma = angula1 + angulo2 + angulo3;

if( angula1 > 0 && angulo2 >0 &&  angulo3> 0){
    if(soma ===180){
        console.log(true)
    } else{
        console.log(false)
    }
}else{console.loge("Angulo invalido")}