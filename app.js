//que pasa si es jugador contra jugador... lloro

const rock = 1
const paper = 2
const scissor = 3

let shiftMachine = 0
let shiftUser = 0

let countUser = 0
let countMachine = 0

const btnRock = document.getElementById("rock")
const btnpaper = document.getElementById("papper")
const btnscissor = document.getElementById("scissor")
const result = document.getElementById("result")
const pointUser = document.getElementById("point-user")
const machinePoint = document.getElementById("point-machine")


btnRock.addEventListener("click", chooseRock)
btnpaper.addEventListener("click", choosePaper)
btnscissor.addEventListener("click", chooseScissor)

const getRandomNumber =  (min, max)  => Math.round(Math.random() * (max - min) + min)

function chooseRock () {
    document.getElementById("shift-user").textContent = "Usuario eligio Piedra"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    shiftUser = rock
    result.textContent = validateWinner()
    pointUser.textContent = "" + countUser
    machinePoint.textContent = "" + countMachine
    countWinner()
}

function choosePaper () {
    document.getElementById("shift-user").textContent = "Usuario eligio Papel"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    shiftUser = paper
    result.textContent = validateWinner()
    pointUser.textContent = "" + countUser
    machinePoint.textContent = "" + countMachine
    countWinner()
}

function chooseScissor () {
    document.getElementById("shift-user").textContent = "Usuario eligio Tijera"
    document.getElementById("shift-cpu").textContent = chooseCpu()
    shiftUser = scissor
    result.textContent = validateWinner()
    pointUser.textContent = "" + countUser
    machinePoint.textContent = "" + countMachine
    countWinner()
}

function chooseCpu(){
    let shiftCpu = getRandomNumber(1,3)

    if (shiftCpu === rock) {
        shiftMachine = rock
        return "La CPU eligio Piedra"
    }
    else if (shiftCpu=== paper) {
        shiftMachine = paper
        return "La CPU eligio Papel"
    }
    else {
        shiftMachine = scissor
        return "La CPU eligio Tijeras"
    }
    
}

function validateWinner(){
    if (shiftUser === shiftMachine){
        return "Empate"
    }
    else if ((shiftUser === rock && shiftMachine === scissor) ||
    (shiftUser === paper && shiftMachine === rock) ||
    (shiftUser === scissor && shiftMachine === paper)){
    countUser ++
    return "Usuario gana"
    }
    else {
    countMachine ++
    return "CPU gana"
    }
}

function countWinner(){
    if (countUser == 3){
        alert ("Usuario Gana juego")
        shiftUser = 0
        shiftMachine = 0
    }
    else if (
        countMachine == 3)
        alert ("CPU gana juego")
        shiftUser = 0
        shiftMachine = 0
    
}