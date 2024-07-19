//que pasa si es jugador contra jugador... pendiente

const rock = 1
const paper = 2
const scissor = 3

let shiftCpu = 0

const btnRock = document.getElementById("rock")
const btnpaper = document.getElementById("papper")
const btnscissor = document.getElementById("scissor")

btnRock.addEventListener("click", chooseRock)
btnpaper.addEventListener("click", choosePaper)
btnscissor.addEventListener("click", chooseScissor)

const getRandomNumber =  (min, max)  => Math.round(Math.random() * (max - min) + min)

function chooseRock () {
    document.getElementById("shift-user").textContent = "Usuario eligio Piedra"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    return rock
}

function choosePaper () {
    document.getElementById("shift-user").textContent = "Usuario eligio Papel"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    return paper
}

function chooseScissor () {
    document.getElementById("shift-user").textContent = "Usuario eligio Tijera"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    return scissor
}

function chooseCpu(){
    let shiftCpu = getRandomNumber(1,3)

    if (shiftCpu === rock) {
        shiftCpu = rock
        return "La CPU eligio Piedra"
    }
    else if (shiftCpu=== paper) {
        shiftCpu = paper
        return "La CPU eligio Papel"
    }
    else { shiftCpu = scissor 
        shiftCpu = scissor
        return "La CPU eligio Tijeras"
    }
    
}
