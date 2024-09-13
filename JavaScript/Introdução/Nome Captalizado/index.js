var nome = prompt("Qual seu nome? ");

//a Isola o primeiro carácter
var prieiroCar = nome.slice(0,1);

//b Transforma o primeiro carácter maiúsculo
var maiusculoPrimeiroCar = prieiroCar.toUpperCase();

//c Isola o resto do nome
var restoNome = nome.slice(1,nome.lenght);

//d Torna o resto do nome em minúsculo
var minusculoResto = restoNome.toLowerCase();

//e Concatena o primeiro carácter com o resto do nome
var nomeCapitalizado = maiusculoPrimeiroCar + minusculoResto;

// Hello, {nome}.
alert("Olá, " + nomeCapitalizado);
