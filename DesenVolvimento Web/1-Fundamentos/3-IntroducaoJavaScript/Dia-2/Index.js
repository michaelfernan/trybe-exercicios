const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma= 0;
for ( let index =0; index < numbers.length; index +=1){

    soma += numbers[index];
    console.log(numbers[index])
};
console.log(soma)


let media = (soma / numbers.length);

console.log(media);


if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
  } else {
    console.log('O valor da média aritmética é menor ou igual a 20');
  };

  let maiorNun = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNun) {
        maiorNun = numbers[index];
    }
  };
  
  console.log(maiorNun);

let = impar =0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impar += 1;
    }
  };
  if (impar === 0) {
    console.log('Não a valores ímpar ');
  } else {
    console.log(impar);
  };