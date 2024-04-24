const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    // mario acessa classList e depois acessa o método add
    setTimeout(()=>{
        mario.classList.remove('jump');
        // esse método remove é usado para remover a função jump e ser possível usar novamente o pulo.
    }, 500)
}

const loop = setInterval(()=>{
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

}, 10);

document.addEventListener('keydown', jump);
// quando precionarmos uma tecla ela vai 'keydown' acontecera a ação do jump

// COmentario teste





