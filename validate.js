const inputElements = document.querySelectorAll('input');

inputElements.forEach( (input) => {
  input.addEventListener('focusout', (e) => {
    if (!(input.validity.valid) && input.value !== "") {
      if (input.validity.typeMismatch) {

      } else if (input.validity.patternMismatch) {

      } else if (input.validity.tooLong) {

      } else if (input.validity.tooShort) {
        
      }
    }
  })
});
