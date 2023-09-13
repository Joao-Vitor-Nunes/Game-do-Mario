const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump') /*adicionada a class jump no mario*/ 

    setTimeout(() => {
        mario.classList.remove('jump') /*remove a class jump, (para dar reset no pulo) */
    }, 500)

}


const loop = setInterval(() => {

    const pipe_position = pipe.offsetLeft;
    const mario_position = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(mario_position)

    

    if (pipe_position <= 145 && mario_position < 105 && pipe_position >  0) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipe_position}px `

        mario.style.animation = 'none'
        mario.style.bottom = `${mario_position}px`

        mario.src = '/imagens/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '70px'

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump) /*quando pressionar a tecla*/