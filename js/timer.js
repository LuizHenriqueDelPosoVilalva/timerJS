let sec = 0
let min = 0
let hor = 0
let timer;
const relogio = document.querySelector(".relogio")

function iniciar() {
    if(!timer) {
        timer = setInterval(run, 1000)
    }
}

function run() {
    relogio.innerHTML = textoApresentacao()
    sec ++
    if (sec == 60) {
        sec = 0
        min++
    }

    if (min == 60) {
        min = 0
        hor++
    }

    if (hor == 24) {
        hor = 0
    }
}

function textoApresentacao(){
    return (hor < 10? "0" + hor: hor) + ":" + (min< 10? "0" + min: min) + ":" + (sec < 10? "0" + sec: sec)
}

function parar() {
    clearInterval(timer)
    timer = false
}

function resetar() {
    parar()
    sec = 0
    min = 0
    hor = 0
    relogio.innerHTML = `${hor}0:${min}0:${sec}0`
}