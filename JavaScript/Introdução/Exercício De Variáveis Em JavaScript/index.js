function test() {
    var a = "3";
    var b = "8";
    
/***********Não altere o código acima 👆*******/
    // Cria uma variável para guardar o valor de a
    var c = a;

    // Altera o valor de a pelo b
    a = b;

    // Altera o valor de b pelo antigo valor de a
    b = c;
/***********Não mude o código abaixo 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
