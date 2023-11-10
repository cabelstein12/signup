function matchPassword(){
    let password = document.getElementById('password').value;
    let passwordConfirmation = document.getElementById('password_confirmation').value;
    if (passwordConfirmation !== password) {
        // Create a div element for the error message
        let errorMessage = document.createElement('div');
        errorMessage.textContent = 'Passwords do not match!';
        errorMessage.style.color = 'red';

        // Insert the error message after the password confirmation input
        let passwordConfirmationInput = document.getElementById('password_confirmation');
        passwordConfirmationInput.parentNode.insertBefore(errorMessage, passwordConfirmationInput.nextSibling);
    }
}

let inputNames = document.querySelectorAll('input[type="text"]');
let namePattern = /^[A-Za-z]+$/;
inputNames.forEach((input) => {
    input.setAttribute('pattern', namePattern.source);
})

let inputs = Array.from(document.querySelectorAll('input'));
let labels = Array.from(document.querySelectorAll('label'))

inputs.forEach((input) => {
    input.addEventListener('keyup', () => {
            let label = labels[inputs.indexOf(input)];
        if(input.value.length > 0){
            // console.log(inputs.indexOf(input))
            label.style.fontSize = '0.75em';
            label.style.top = '-18%';
            label.style.transition = '0.2s linear'
        } else {
            label.style.fontSize = '1em';
            label.style.top = 'initial';
        }
        if(input.checkValidity()){
            input.style.borderColor ='initial';
        }
        else{
            input.style.borderColor = 'red';
        }

    })
})

