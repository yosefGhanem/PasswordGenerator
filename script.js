// Resources to help
// https://www.w3schools.com/charsets/ref_html_ascii.asp

// fromCharCode : static method returns a string created from the specified sequence of UTF-16 code units.

// https://shorturl.at/kCKU8

// That's id's of all for auto gen#1
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// this is an object that has these keys
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number :getRandomNumber,
    Symbol :getRandomSymbol
}

// copy to clipboard
clipboardEl.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    // if no password return nothing
    if(!password){ return }
    
    textarea.value = password
    document.body.appendChild(textarea)
    // select everything in the text area
    textarea.select()
    document.removeChild()
    alert('Password copied to clipboard!')
})

// for auto gen#2
generateEl.addEventListener('click', ()=> {
    // + to convert a string to int
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    // pass all this info "booleans" + length
    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
    
})

// for auto gen#3
function generatePassword(lower,upper,number,symbol,length){
    // represents the password generated
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    //console.log(typesCount) //prints number of checked
    
    // if any element is false, remove from the array
    const typesArr = [{lower}, {upper},{number}, {symbol}].filter(item => Object.values(item)[0])
    // console.log(typesArr) 
    //>> now displays true elements only

    // if nothing checked return nothing
    if(typesCount ===0){
        return ''
    }

    // create a password
    for(let i = 0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            // console.log(type)
            // it's gonna be a random number, symbol ..etc
            
            // get the function for number, symbol, lower, upper based on randomFunc above
            const funcName = Object.keys(type)[0]
            // console.log(funcName)
            
            // pass the funcName
            generatedPassword +=randomFunc[funcName]()
            // gonna end up with random lower, upper, number, symbol 

        })
    }
    
    // length is 20 bydefualt
    const finalPassword = generatedPassword.slice(0, length)
    // finally moves to resultEl.innerText above
    return finalPassword
}

function getRandomLower(){
    //multiply any number up to 26
    //26 characters in alphabets
    //now to get a random number
    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper(){
    // now to get random uppercase
    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber(){
    return String.fromCharCode(
        Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    // Make these spicific symbols
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    // Get random number in here
    return symbols[Math.floor(Math.random()*symbols.length)]
}

// console.log(getRandomLower())
// console.log(getRandomUpper())
// console.log(getRandomNumber())
// console.log(getRandomSymbol())

// Dealing with dom now