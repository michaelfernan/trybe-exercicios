
let angulo1 = 50;
let angulo2 = 50;
let angulo3 = 90;

 

soma = (angulo1 + angulo2 + angulo3);

if( angulo1 > 0 && angulo2 >0 &&  angulo3> 0){
    if(soma === 180){
        console.log(true)
    } else{
        console.log(false)
    }
}else{console.loge("Angulo invalido")}




let peca = 'Peão';

switch (peca.toLowerCase()) {
case 'torre':
    console.log('Torre: Se movimenta em Horizontal e vertical.');
    break;
case 'bispo':
    console.log('Bispo: Se movimenta em  diagonais.');
    break;
case 'rei':
    console.log('Rei: Se movimenta em ma casa para qualquer direção.');
    break;
case 'rainha':
    console.log('Rainha:  Se movimenta em diagonal, horizontal e vertical.');
    break;
case 'peão':
    console.log("Peão:  Movimenta em uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
case 'cavalo':
    console.log('Cavalo:  Se movimenta  em "L" pode pular sobre as peças.');
    break;
default:
    console.log('Escolha uma peça válida!');
};


let num1 = 11;
let num2 = 19;
let num3 = 31;


if (num1 %2 ===0 || num2 %2 ===0|| num3 %2 ===0){
    console.log(true)
}else{
    console.log(false)
}