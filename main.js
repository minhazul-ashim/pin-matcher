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


// Event handler for generating pin button;

document.getElementById('generate-btn').addEventListener('click', function () {

    const pin = generatePin();

    document.getElementById('generated-pin').value = pin;
})


//User Input Section;




