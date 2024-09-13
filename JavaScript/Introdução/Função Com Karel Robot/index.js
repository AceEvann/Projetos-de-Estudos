//Baseado no Stanford Karel

//1 Mover para o topo
function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }

 // Função criada para mover para frente quatro vezes e evitar redundância
 function moverQuatroVezes(){
    move();
    move();
    move();
    move();
 }

 //2 Linha diagonal
 function main(){
    putBeeper();
    zigZag();
    zigZag();
    zigZag();
    zigZag();
 }
 
 // F unção criada para colocar os beepers em uma linha diagonal
 function zigZag(){
    turnLeft();
    move();
    turnRight();
    move();
    putBeeper();
 }

 //3 Padrão xadrez
 function main(){
    moveAndBeep();
    toTheLeft();
    beepAndMoove();
    toTheRight();
    moveAndBeep();
    toTheLeft();
    beepAndMoove();
    toTheRight();
    moveAndBeep();
 }
 
// Função para virar a esquerda
 function virarEsquerda(){
    turnLeft();
    move();
    turnLeft();
 }
 
// Função para virar a direita
 function virarDireita(){
    turnRight();
    move();
    turnRight();
 }
 
// Função para colocar três beepers em uma linha
 function moverBipar(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }

// Função para colocar dois beepers em uma linha
 function biparMover(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
