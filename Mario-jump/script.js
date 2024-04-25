const mario = document.querySelector('.mario'); // está acessando a imagem do mario, criada no html, para manipulação aqui no JS.
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    // mario acessa classList e depois acessa o método add
    setTimeout(()=>{
        mario.classList.remove('jump');
        // esse método remove é usado para remover a função jump e ser possível usar novamente o pulo.
    }, 500)
}

const initializeGame = () => { // função para inicializar o jogo, e para isso toda a função de como funciona o jogo deve estar dentro dele
    let score = 0; // variável para manipulação da pontuação.
    let timeElapsed = 0; // vável para o quanto o tempo passa.

    const loop = setInterval(()=>{  // setInterval permite executar um bloco de código repetidamente em intervalos específicos de tempo
        const pipePosition = pipe.offsetLeft;
        //um loop para ser deslocado para a esquerda
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        //getComputedStryle é um comando para pegar o estilo computado na imagem do mario.
        // usado na frente da chamada da string para tentar converter a string de um número em um tipo número.
        console.log(marioPosition);
    
    
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`; // Usado "acento grave", e entender o que é  template literal.
            // usado também para parar o boneco no momento que foi desejado, no caso, próximo ao tubo verde.
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            // usei essa função para poder parar o mario quando ele cair no tubo.
            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
    
            clearInterval(loop); // uso esse comando para finalizar o loop e o processamento dele acabar.
        }
        timeElapsed += 0.1; // incrementando valor na variavel para cada loop feito com sucesso.
        score = Math.floor(timeElapsed); // apenas mandando os valores para score, no entanto, a função, Math.floor garante que seja um numero inteiro.
        document.getElementById('score-value').textContent = score; // mandando o valor de score para o 'score-value' do html e ser apresentado na tela.
    }, 10);

    // Função criada para reiniciar o jogo, precisa estar dentro do da constante de inicialização para ser uma condição de parada.
    const restartGame = () => {
    // Resetar variáveis de pontuação e tempo
    score = 0;
    timeElapsed = 0;

    // Redefinir a posição do Mario
    mario.style.bottom = '0px';

    // Reiniciar a animação do Mario
    mario.classList.remove('jump');
    setTimeout(() => {
        mario.classList.add('jump');
    }, 10);

    // Reiniciar a imagem do Mario
    mario.src = './imagens/mario.gif';

    // Reiniciar a posição dos tubos e a animação
    pipe.style.right = '0px';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear'; // Adicione novamente a animação

    // Reiniciar o loop do jogo
    clearInterval(loop);
    initializeGame(); // Chamar a função de inicialização novamente para reiniciar o loop do jogo
};


const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', () => {
    // Chamar a função de reiniciar o jogo
    restartGame();
});


}

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});
// chamada da função quando o documento estiver pronto.

document.addEventListener('keydown', jump);
// quando precionarmos uma tecla ela vai 'keydown' acontecera a ação do jump





