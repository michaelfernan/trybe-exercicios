
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