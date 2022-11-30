const inputElements = document.querySelectorAll('input');

inputElements.forEach( (input) => {
  input.addEventListener('focusout', (e) => {
    if (!(input.validity.valid) && input.value !== "") {
      const errorIcon = input.nextElementSibling;
      const errorMsg = errorIcon.firstChild; 
      if (input.validity.typeMismatch) {
        errorMsg.textContent = 'Wrong format. | name@example.com';
        errorIcon.classList.remove('valid');
        errorIcon.classList.add('icon');
        errorIcon.style.visibility = 'visible';
        errorMsg.style.visibility = 'visible';
        input.style.border = '1px solid rgb(199, 70, 70)';

        input.addEventListener('input', (e) => {
          if (input.validity.valid) {
            input.style.border = '1px solid rgb(88, 209, 77)';
            errorIcon.classList.remove('icon');
            errorIcon.classList.add('valid');
            errorMsg.textContent = 'Valid email';
          }
        });
      } else if (input.validity.patternMismatch) {

      } else if (input.validity.tooLong) {

      } else if (input.validity.tooShort) {

      }
    }
  })
});
