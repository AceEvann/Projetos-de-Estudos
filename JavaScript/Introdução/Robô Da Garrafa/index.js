// Função principal
function pegarGarrafa(dinheiro, custoPorGarrafa) {   
    console.log("sairCasa");
    console.log("moverDireita");
    console.log("moverDireita");
    console.log("moverCima");
    console.log("moverCima");
    console.log("moverCima");
    console.log("moverCima");
    console.log("moverDireita");
    console.log("moverDireita");
    // Console com o pedido inicial
    console.log("Compre " + calculoGarrafas(dinheiro, custoPorGarrafa) + " garrafas de leite.");
    console.log("moverEsquerda");
    console.log("moverEsquerda");
    console.log("moverBaixo");
    console.log("moverBaixo");
    console.log("moverBaixo");
    console.log("moverBaixo");
    console.log("moverEsquerda");
    console.log("moverEsquerda");
    console.log("entrarCasa");

    // Retorna a função calculoTroco
    return calculoTroco(dinheiro, custoPorGarrafa);
}

// Função para saber quantas garrafas poderão ser compradas
function calculoGarrafas(dinheiroInicial, custoPorGarrafa) {

    // Variável que faz a divisão
    var numeroDeGarrafas = Math.floor(dinheiroInicial / custoPorGarrafa);

    // Retorna a variável
    return numeroDeGarrafas;
}


// Função para calcular o troco
function calculoTroco(dinheiroInicial, custoPorGarrafa) {

    // Variável que pega o resto da divisão 
    var troco = dinheiroInicial % custoPorGarrafa;

    // Retorna a variável
    return troco;
}

// Console final
console.log("Olá senhor, aqui está " + calculoGarrafas(dinheiro, custoPorGarrafa) + " suas garrafas e seus " + pegarGarrafa(5, 3) + "R$ de troco.");
