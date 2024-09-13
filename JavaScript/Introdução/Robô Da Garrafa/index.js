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
    // Console com o pedido
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

// Função para saber quantas garrafas serão compradas
function calculoGarrafas(dinheiroInicial, custoPorGarrafa) {

    // Faz a divisão do dinheiro inicial pelo custo das garrafas
    var numeroDeGarrafas = Math.floor(dinheiroInicial / custoPorGarrafa);

    // Retorna a variável numeroDeGarrafas
    return numeroDeGarrafas;
}


// Função para calcular o troco
function calculoTroco(dinheiroInicial, custoPorGarrafa) {

    // Pega o resto da divisão do dinheiro inicial pelo custo das garrafas
    var troco = dinheiroInicial % custoPorGarrafa;

    // Retorn  variável troco
    return troco;
}

// Console final
console.log("Olá senhor, aqui está " + calculoGarrafas(dinheiro, custoPorGarrafa) + " suas garrafas e seus " + pegarGarrafa(5, 3) + "R$ de troco.");
