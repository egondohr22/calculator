let resetScreenBool = false
let first = ''
let second = ''
let currentOperation = null

const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.op')
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#clearBtn')
const deleteBtn = document.querySelector('#deleteButton')
const dotBtn = document.querySelector('#dot')
const upScreen = document.querySelector('#up')
const botScreen = document.querySelector('#bot')

// equalBtn.addEventListener('click', compute)
// clearBtn.addEventListener('click', clear)
// deleteBtn.addEventListener('click', deleteS)
// dotBtn.addEventListener('click', dot)

numberBtns.forEach(element => {
    element.addEventListener('click', () => {
        botScreen.textContent += element.textContent
        //console.log('hi')
    })
})
operatorBtns.forEach(element => {
    element.addEventListener('click', setOperation(button.textContent))
}) 

function resetScreen() {
    botScreen.textContent = ''
    resetScreenBool = false
}
function compute() {

}
function clear() {

}
function deleteS() {

}
function dot() {

}
function setOperation(operator) {
    if(currentOperation !== null) evaluate()
    first = botScreen.textContent
    currentOperation = operator
    upScreen.textContent = `${first} ${operator}`
    resetScreenBool = true
}

function evaluate() {
    second = botScreen.textContent
}