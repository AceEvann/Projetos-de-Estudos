var nome = prompt("Qual seu nome? ");

//a Isola o primeiro carácter
var prieiroCar = nome.slice(0,1);

//b Transforma o primeiro carácter maiúsculo
var maiusculoPrimeiroCar = prieiroCar.toUpperCase();

//c Isola o resto do nome
var restoNome = nome.slice(1,nome.lenght);

//d Torna o resto do nome em minúsculo
var lowerCaseRestOfName = restOfName.toLowerCase();

//e Concatenate the first char with the rest of the name
var captalizedName = upperCaseFirstChar + lowerCaseRestOfName;

// Hello, {name}.
alert("Hello, " + captalizedName);
