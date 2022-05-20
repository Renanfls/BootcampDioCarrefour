/* 
  Idade em Dias

  Desafio:
  - Você terá o desafio de ler um valor inteiro 
  correspondente à idade de uma pessoa em dias e 
  informe-a em anos, meses e dias

  Obs.: apenas para facilitar o cálculo, considere 
  todo ano com 365 dias e todo mês com 30 dias. Nos 
  casos de teste nunca haverá uma situação que permite 
  12 meses e alguns dias, como 360, 363 ou 364. 

  Entrada:
  - O arquivo de entrada contém um valor inteiro.

  Saída:
  - Imprima a saída conforme exemplo fornecido.
*/


/* 
=====================RESOLUÇÕES==================================
*/

/* Teste #1
---------------------------------------------------------------*/
let totalDeDias = 400;

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 365;

qtdMeses = parseInt(totalDeDias / 30);
totalDeDias = totalDeDias % 30;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

console.log(resultado);



/* Teste #2
---------------------------------------------------------------
let totalDeDias = 800;

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 365;

qtdMeses = parseInt(totalDeDias / 30);
totalDeDias = totalDeDias % 30;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

console.log(resultado);
*/


/* Teste #3
---------------------------------------------------------------
let totalDeDias = 30;

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 365;

qtdMeses = parseInt(totalDeDias / 30);
totalDeDias = totalDeDias % 30;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

console.log(resultado);
*/