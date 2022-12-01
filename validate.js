const inputElements = document.querySelectorAll('input');
const passwordConfirm = document.querySelector('#password-confirm');

inputElements.forEach( (input) => {
  input.addEventListener('focusout', validateForm);
});

passwordConfirm.addEventListener('focusout', (e) => {
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
        setMessage(errorMsg, 'Valid.');
      } else {
        setInvalid(errorIcon, passwordConfirm);
        setMessage(errorMsg, 'Passwords do not match.');
      }
    });
  }
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
          setMessage(errorMsg, 'Valid.');
        } else {
          setInvalid(errorIcon, input);
          setMessage(errorMsg, 'Wrong format. | name@example.com');
        }
      });
    } else if (input.validity.patternMismatch) {
      setInvalid(errorIcon, input);
      setMessage(errorMsg, 'Invalid character found.');
      setVisible(errorIcon, errorMsg);
      input.addEventListener('input', (e) => {
        if (input.validity.valid) {
          setValid(errorIcon, input);
          setMessage(errorMsg, 'Valid.');
        } else {
          setInvalid(errorIcon, input);
          setMessage(errorMsg, 'Invalid character found.');
        }
      });
    } else if (input.validity.tooLong) {
      setInvalid(errorIcon, input);
      setMessage(errorMsg, 'Too many characters.');
      setVisible(errorIcon, errorMsg);
      input.addEventListener('input', (e) => {
        if (input.validity.valid) {
          setValid(errorIcon, input);
          setMessage(errorMsg, 'Valid.');
        } else {
          setInvalid(errorIcon, input);
          setMessage(errorMsg, 'Too many characters.');
        }
      });
    } else if (input.validity.tooShort) {
      setInvalid(errorIcon, input);
      setMessage(errorMsg, 'Please enter at least 8 characters.');
      setVisible(errorIcon, errorMsg);
      input.addEventListener('input', (e) => {
        if (input.validity.valid) {
          setValid(errorIcon, input);
          setMessage(errorMsg, 'Valid.');
        } else {
          setInvalid(errorIcon, input);
          setMessage(errorMsg, 'Please enter at least 8 characters.');
        }
      });
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