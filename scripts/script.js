//Fistly we have value of output equals to ''. It's a string. 
//Next step is adding values from buttons to output as string
//When button of some operation is pressed code remebers output and make output field empty
//When button '=' is pressed operation with existing output and value from the memory is done

//take from html document element with id "output"
let output = document.getElementById('output');
let cats = document.getElementById('logo-img')
//make variables for operation(=,-,*,/) and number for further actions
let firstNum = '';
let secondNum = '';
let operation = '';
let currentValue = '';

let onBtn = document.getElementById('on-off')
output.style.backgroundColor = "gray"
onBtn.onclick = () => {
    if (output.style.backgroundColor === "white") {
        output.style.backgroundColor = "gray"
        cats.pause()
    }
    else if (output.style.backgroundColor === "gray") {
        output.style.backgroundColor = "white"
        cats.play()
        calculate()
    }
}

let ce = document.getElementById('ce')
ce.onclick = () => {
    firstNum = '';
    secondNum = '';
    output.value = '';
    operation = '';
    currentValue = '';
}


function calculate() {
    //take from html pseudo array (all buttons with class='btn-primary')
    firstNum = '';
    secondNum = '';
    output.value = '';
    operation = '';
    currentValue = '';
    let listButtons = document.getElementsByClassName('digits');
    //for elements in listButtons
    for (let i = 0; i < listButtons.length; i++) {
        //if text in the button digit or '.' add in to value of output (as string)
        listButtons[i].onclick = () => {
            currentValue += listButtons[i].innerText
            if (currentValue === '0') {
                if (output.value != '') {
                    if (operation === '') {
                        output.value += currentValue;
                        firstNum += currentValue;
                    }
                    else {
                        output.value += currentValue;
                        secondNum += currentValue;
                    }
                }
            }
            else if (currentValue === '.') {
                if (operation === '' && firstNum.indexOf('.') === -1 || operation !== '' && secondNum.indexOf('.') === -1)
                    if (operation === '') {
                        output.value += currentValue;
                        firstNum += currentValue;
                    }
                    else {
                        output.value += currentValue;
                        secondNum += currentValue;
                    }
            }
            else if (currentValue < 10 && currentValue > 0) {
                if (operation === '') {
                    output.value += currentValue;
                    firstNum += currentValue;
                }
                else {
                    output.value += currentValue;
                    secondNum += currentValue;
                }
            }
            else if (currentValue === '+' || currentValue === '-' || currentValue === '*' || currentValue === '/') {
                output.value += currentValue;
                if (operation === '+') firstNum = Number(firstNum) + Number(secondNum)
                else if (operation === '-') firstNum = Number(firstNum) - Number(secondNum)
                else if (operation === '*') firstNum = Number(firstNum) * Number(secondNum)
                else if (operation === '/') firstNum = Number(firstNum) / Number(secondNum);
                secondNum = ''
                operation = currentValue;
            }
            currentValue = '';
        }
    }

    //Block for button '='
    let btnEqual = document.getElementById('equal')
    btnEqual.onclick = () => {
        if (operation === '+') output.value = Number(firstNum) + Number(secondNum)
        else if (operation === '-') output.value = Number(firstNum) - Number(secondNum)
        else if (operation === '*') output.value = Number(firstNum) * Number(secondNum)
        else if (operation === '/') output.value = Number(firstNum) / Number(secondNum)
        firstNum = output.value;
        secondNum = '';
        operation = '';
    }
}