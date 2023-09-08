 const input = document.querySelector('#validation-input');
  const requiredLength = parseInt(input.getAttribute('data-length'), 10); 

  input.addEventListener('input', () => {
    if (input.value.length === requiredLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });

