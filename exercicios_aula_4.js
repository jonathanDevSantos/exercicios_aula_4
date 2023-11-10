/// Desafio 1

const numero = Number(prompt("informe um numero:"));

if(numero % 2 == 0){
  console.log("Numero é par!");
} else{
  console.log("Numero é impar!");
}

/// Desafio 2

const nota = parseFloat(prompt("informe a nota:"));

if(nota >= 90){
  console.log("Aprovado com mérito!!!");
}
else if(nota >= 70){
  console.log("Aprovado!");
} else{
  console.log("Reprovado");
}

/// Desafio 3

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

const MaiorNumero;

if(numero1 >= numero2 && numero1 >= numero3){
    maiorNumero = numero1;
}
else if(numero2 >= numero1 && numero2 >= numero3){
    maiorNumero = numero2;
} else{
    maiorNumero = numero3;
}

/// Desafio 4

const lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));

if(lado1 === lado2 && lado2 === lado3){
    console.log("O triângulo é equilátero.");
} else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("O triângulo é isósceles.");
} else{
    console.log("O triângulo é escaleno.");
}

/// Desafio 5

const ano = parseInt(prompt("Digite um ano:"));

if(ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)){
    console.log("Ano bissexto.");
} else{
    console.log("Não é um ano bissexto.");
}

/// Desafio 6

const idade = parseInt(prompt("Digite a sua idade:"));

if(idade >= 18){
    console.log("Pode comprar bebidas alcoólicas.");
} else{
    console.log("Não pode comprar bebidas alcoólicas.");
}

/// ternario

const idade = parseInt(prompt("Digite a sua idade:"));

console.log(idade >= 18 ? "Pode comprar bebidas alcoólicas." : "Não pode comprar bebidas alcoólicas.");


/// Desafio 7

const numero = parseInt(prompt("Digite um número:"));

switch (numero % 2){
    case 0:
        console.log("É par");
        break;
    case 1:
        console.log("É ímpar");
        break;
    default:
        console.log("O número não é inteiro.");
}

/// Desafio 8

const letra = prompt("Digite uma letra:").toLowerCase();

switch (letra){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
}

/// Desafio 9

const mes = prompt("Digite o nome de um mês:").toLowerCase();

switch (mes){
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        console.log("Inverno");
        break;
    case 'março':
    case 'abril':
    case 'maio':
        console.log("Primavera");
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        console.log("Verão");
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        console.log("Outono");
        break;
    default:
        console.log("Mês inválido");
}