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
// Console com a resposta final
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
}

    // Retorna a função calculoTroco
    return calculoTroco(dinheiro, custoPorGarrafa);
}

// Função 
function calculoGarrafas(dinheiroInicial, custoPorGarrafa) {

    var numeroDeGarrafas = Math.floor(dinheiroInicial / custoPorGarrafa);

    return numeroDeGarrafas;
}

function calculoTroco(dinheiroInicial, custoPorGarrafa) {
    var troco = dinheiroInicial % custoPorGarrafa;
    return troco;
}


console.log("Olá senhor, aqui está " + calculoGarrafas(dinheiro, custoPorGarrafa) + " suas garrafas e seus " + pegarGarrafa(5, 3) + "R$ de troco.");
