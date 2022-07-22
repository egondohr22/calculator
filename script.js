let resetScreenBool = false
let first = ''
let second = ''
let currentOperation = null

const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.op')
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#clearBtn')
const deleteBtn = document.querySelector('#deleteBtn')
const dotBtn = document.querySelector('#dot')
const upScreen = document.querySelector('#up')
const botScreen = document.querySelector('#bot')

equalBtn.addEventListener('click', evaluate)
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteS)
dotBtn.addEventListener('click', dot)

numberBtns.forEach(element => {
    element.addEventListener('click', () => {
        if(botScreen.textContent === '0') resetScreen()
        botScreen.textContent += element.textContent
        //console.log('hi')
    })
})
operatorBtns.forEach(element => {
    element.addEventListener('click', () => setOperation(element.textContent))
}) 

function resetScreen() {
    botScreen.textContent = ''
    resetScreenBool = false
}

function clear() {
    botScreen.textContent = '0'
    upScreen.textContent = ''
    first = ''
    second = ''
    currentOperation = null
}
function deleteS() {
    botScreen.textContent = botScreen.textContent.slice(0, -1)
    if(botScreen.textContent == '') botScreen.textContent = '0'
}
function dot() {
    botScreen.textContent += '.'
}
function setOperation(operator) {
    if(currentOperation !== null) evaluate()
    first = botScreen.textContent
    currentOperation = operator
    upScreen.textContent = `${first} ${operator}`
    resetScreen()
}

function evaluate() {
    if(resetScreenBool) return
    second = botScreen.textContent
    upScreen.textContent += ` ${botScreen.textContent}`
    botScreen.textContent = Math.round(operate(currentOperation, first, second) * 1000) / 1000
    
    resetScreenBool = true
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return a+b
        case '-':
            return a-b
        case '*':
            return a*b
        case '/':
            if(b == 0) return null
            return a/b
        default:
            return null
    }
}