let INSS;
let IR;

let salario = 15800;

if (salario <= 1556.94) {
    INSS = salario * 0.08;
} else if (salario <= 2594.92) {
    INSS = salario * 0.09;
} else if (salario <= 5189.82) {
    INSS = salario * 0.11;
} else {
    INSS = 570.88;
};

let baseSalario = salario - INSS;

if (baseSalario <= 1903.98) {
  IR = 0;
} else if (baseSalario <= 2826.65) {
  IR = (baseSalario * 0.075) - 142.80;
} else if (baseSalario <= 3751.05) {
  IR = (baseSalario * 0.15) - 354.80;
} else if (baseSalario <= 4664.68) {
  IR = (baseSalario * 0.225) - 636.13;
} else {
  IR = (baseSalario * 0.275) - 869.36;
};

console.log("O Salário e de  R$" + (baseSalario - IR));