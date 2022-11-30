const inputElements = document.querySelectorAll('input');

inputElements.forEach( (input) => {
  input.addEventListener('focusout', (e) => {
    if (!(input.validity.valid) && input.value !== "") {
      if (input.validity.typeMismatch) {
        const errorIcon = input.nextElementSibling;
        const errorMsg = errorIcon.firstChild; 
        errorMsg.textContent = 'Wrong format. | name@example.com';
        errorIcon.style.visibility = 'visible';
        errorMsg.style.visibility = 'visible';
        input.style.border = '1px solid rgb(199, 70, 70)';
      } else if (input.validity.patternMismatch) {

      } else if (input.validity.tooLong) {

      } else if (input.validity.tooShort) {

      }
    }
  })
});
