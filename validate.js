const inputElements = document.querySelectorAll('input');
const passwordConfirm = document.querySelector('#password-confirm');
const submitButton = document.querySelector('.submit-button');

inputElements.forEach( (input) => {
  input.addEventListener('focusout', validateForm);
});

passwordConfirm.addEventListener('focusout', validatePassword);

submitButton.addEventListener('click', validateSubmit);

function validateSubmit(e) {
  inputElements.forEach( (input) => {
    if (input.validity.valueMissing) {
      const errorIcon = input.nextElementSibling;
      const errorMsg = errorIcon.firstChild; 
      setError(errorIcon, errorMsg, input, 'valueMissing');
      e.preventDefault();
      input.addEventListener('input', validateForm);
    }
    if (!(input.validity.valid)) {
      e.preventDefault();
    }
  });
}

function validateForm(e) {
  const input = e.target;
  if (!(input.validity.valid) && input.value !== "") {
    const errorIcon = input.nextElementSibling;
    const errorMsg = errorIcon.firstChild; 
    if (input.validity.typeMismatch) {
      setError(errorIcon, errorMsg, input, 'typeMismatch');
    } else if (input.validity.patternMismatch) {
      setError(errorIcon, errorMsg, input, 'patternMismatch');
    } else if (input.validity.tooLong) {
      setError(errorIcon, errorMsg, input, 'tooLong');
    } else if (input.validity.tooShort) {
      setError(errorIcon, errorMsg, input, 'tooShort');
    } 
  }
}

function validatePassword(e) {
  const password = document.querySelector('#password');
  if (!(passwordConfirm.value === password.value)) {
    const errorIcon = passwordConfirm.nextElementSibling;
    const errorMsg = errorIcon.firstChild; 
    setInvalid(errorIcon, passwordConfirm);
    setMessage(errorMsg, 'Passwords do not match.');
    setVisible(errorIcon, errorMsg);
    passwordConfirm.addEventListener('input', (e) => {
      if (passwordConfirm.value === password.value) {
        setValid(errorIcon, passwordConfirm);
        setMessage(errorMsg, 'Valid input.');
      } else {
        setInvalid(errorIcon, passwordConfirm);
        setMessage(errorMsg, 'Passwords do not match.');
      }
    });
  }
}

function setError(icon, message, input, type) {
  const errorMessage = (type === 'typeMismatch') ? 'Wrong format. | name@example.com'
                     : (type === 'patternMismatch') ? 'Invalid character found.'
                     : (type === 'tooLong') ? 'Too many characters.'
                     : (type === 'tooShort') ? 'Please enter at least 8 characters.'
                     : (type === 'valueMissing') ? 'This field is required.'
                     : 'Invalid';
  setInvalid(icon, input);
  setMessage(message, errorMessage);
  setVisible(icon, message);
  input.addEventListener('input', (e) => {
    if (input.validity.valid) {
      setValid(icon, input);
      setMessage(message, 'Valid input.');
    } else {
      setInvalid(icon, input);
      setMessage(message, errorMessage);
    }
  });
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