const alphabetical = []
for (let i = 65; i <= 122; i++) {
    if (i > 90 && i < 97) {
        continue
    } else {
        alphabetical.push(String.fromCharCode(i))
    }
}
// console.log(alphabetical)

const symbolic = []
for (let i = 33; i <= 126; i++) {
    if (i > 47 && i < 58) {
        continue
    } else if (i > 64 && i < 91) {
        continue
    } else if (i > 96 && i < 123) {
        continue
    } else {
        symbolic.push(String.fromCharCode(i))
    }
}
// console.log(symbolic)

const numbers = []
for (let i = 48; i <= 57; i++) {
    numbers.push(String.fromCharCode(i))
}
// console.log(numbers)

const passwordElOne = document.getElementById('password-el-one')
const passwordElTwo = document.getElementById('password-el-two')
const generateBtn = document.getElementById('generate-btn')
const symbolCheck = document.getElementById('symbol-check')
const numberCheck = document.getElementById('number-check')
const slider = document.getElementById('char-range')
const charAmtEl = document.getElementById('char-amt-el')
const scoreEl = document.getElementById('score-el')
let sliderValue = Number(slider.value)
charAmtEl.textContent = sliderValue

updateScore()

symbolCheck.addEventListener('change', updateScore)
numberCheck.addEventListener('change', updateScore)

slider.addEventListener('input', function() {
    sliderValue = Number(this.value)
    charAmtEl.textContent = sliderValue
    updateScore()
})

generateBtn.addEventListener('click', getPasswords)
passwordElOne.addEventListener('click', function() {
    copy(this.textContent)
})
passwordElTwo.addEventListener('click', function() {
    copy(this.textContent)
})

function generatePassword() {
    let password = ""
    if (symbolCheck.checked && numberCheck.checked) {
        var characters = alphabetical.concat(symbolic, numbers)
    } else if (symbolCheck.checked && !numberCheck.checked) {
        var characters = alphabetical.concat(symbolic)
    } else if (!symbolCheck.checkd && numberCheck.checked) {
        var characters = alphabetical.concat(numbers)
    } else {
        var characters = alphabetical
    }
    for (let i = 0; i < sliderValue; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

function getPasswords() {
    passwordElOne.textContent = generatePassword()
    passwordElTwo.textContent = generatePassword()
}

function copy(text) {
  navigator.clipboard.writeText(text)
}

function updateScore() {
    if (sliderValue > 15 && numberCheck.checked && symbolCheck.checked) {
        scoreEl.textContent = 'Strong'
    } else if (sliderValue > 15 && !numberCheck.checked || !symbolCheck.checked) {
        scoreEl.textContent = 'Good'
    } else if (sliderValue < 16 && sliderValue > 11) {
        scoreEl.textContent = 'Good'
    } else if (sliderValue < 12 && sliderValue > 6) {
        scoreEl.textContent = 'Weak'
    } else if (sliderValue < 7) {
        scoreEl.textContent = 'Bad'
    }
}

