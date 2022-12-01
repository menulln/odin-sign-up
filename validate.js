const inputElements = document.querySelectorAll('input');

inputElements.forEach( (input) => {
  input.addEventListener('focusout', validateForm);
});

function validateForm(e) {
  const input = e.target;
  if (!(input.validity.valid) && input.value !== "") {
    const errorIcon = input.nextElementSibling;
    const errorMsg = errorIcon.firstChild; 
    if (input.validity.typeMismatch) {
      setInvalid(errorIcon, input);
      setMessage(errorMsg, 'Wrong format. | name@example.com');
      setVisible(errorIcon, errorMsg);
      input.addEventListener('input', (e) => {
        if (input.validity.valid) {
          setValid(errorIcon, input);
          setMessage(errorMsg, 'Valid email');
        } else {
          setInvalid(errorIcon, input);
          setMessage(errorMsg, 'Wrong format. | name@example.com');
        }
      });
    } else if (input.validity.patternMismatch) {

    } else if (input.validity.tooLong) {

    } else if (input.validity.tooShort) {

    }
  }
}

function setValid(icon, input) {
  icon.classList.remove('invalid');
  icon.classList.add('valid');
  input.style.border = '1px solid rgb(88, 209, 77)';
}

function setInvalid(icon, input) {
  icon.classList.remove('valid');
  icon.classList.add('invalid');
  input.style.border = '1px solid rgb(199, 70, 70)';
}

function setMessage(element, message) {
  element.textContent = message;
}

function setVisible(...elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.visibility = 'visible';
  }
}