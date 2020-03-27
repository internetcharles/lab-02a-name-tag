console.log('hello')
const pTag = document.getElementById('name');
const pInput = document.getElementById('nameEntry');

pTag.textContent = 'your name';


// when i click a button

// i want the name to change to 'Lady Gaga' and make the text 'red'
// get my button from the dom
const myButton = document.getElementById('my-button')

// changes name with click of button

myButton.addEventListener('click', function() {

    // Says value must be greater than zero

    if(pInput.value.length === 0) {
        pInput.value = 'Change your name';
    }
    pTag.textContent = pInput.value;
    console.log('Changed the name to ' + pInput.value + ' !', Date.now());
})

// This listens for an enter key input

pInput.addEventListener("keyup", function() {
    if (event.keyCode === 13)  {
        pTag.textContent = pInput.value;
        console.log('Changed the name to ' + pInput.value + '!', Date.now());
    }
})
