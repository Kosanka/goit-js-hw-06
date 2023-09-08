const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Забороняємо стандартну поведінку форми (перезавантаження сторінки)

    const formData = new FormData(loginForm);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    if (!formDataObject.email || !formDataObject.password) {
      alert('Усі поля повинні бути заповнені');
      return;
    }

    console.log(formDataObject);

    loginForm.reset(); // Очищуємо значення полів форми
  });
