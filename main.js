//Function for creating a random pin;

function generatePin() {

    let testPin = Math.ceil(Math.random() * 10000);

    let convertedString = testPin.toString();

    if (convertedString.length != 4) {

        return generatePin();
    } else {

        return testPin;
    }
}

//Getting the generated pin;

function getPin() {

    const pinText = document.getElementById('generated-pin').value;
    const pinNum = parseInt(pinText);

    return pinNum;
}

// Event handler for generating pin button;

document.getElementById('generate-btn').addEventListener('click', function () {

    const pin = generatePin();

    document.getElementById('generated-pin').value = pin;
})


//User Input Section;


// function for getting the user input value

function userPin() {

    const inputID = document.getElementById('user-input').value;

    const inputNumber = parseInt(inputID);

    return inputNumber;
}

//Event handler for keypad numbers;


document.getElementById('keypad').addEventListener('click', function (e) {

    let inputField = document.getElementById('user-input');
    let userInputNum;

    if (isNaN(e.target.innerText)) {

        if (e.target.innerText == 'C') {

            inputField.value = '';
        } else if (e.target.innerText == '<') {
            console.log('I don\'t know the solution')
        }
    } else {
        userInputNum = parseInt(inputField.value += e.target.innerText);
    }
});


//Verifying the pin;


document.getElementById('pin-submit').addEventListener('click', function () {

    const generatedPin = getPin();
    const userEntered = userPin();

    if (generatedPin == userEntered) {

        document.querySelector('.notify-matched').style.display = 'block'
        document.querySelector('.notify-unmatched').style.display = 'none'
    } else {

        document.querySelector('.notify-unmatched').style.display = 'block'
        document.querySelector('.notify-matched').style.display = 'none'
    }
})


