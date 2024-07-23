const formEl = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();

    const emailEl = formEl.elements.email.value.trim();
    const passwordEl = formEl.elements.password.value.trim();

    if (emailEl === '' || passwordEl === '') {
        alert('All form fields must be filled in');
        return;
    }
    
    const formData = {
        email: formEl.elements.email.value,
        password: formEl.elements.password.value,
    };
    console.log(`Email: ${formData.email}\nPassword: ${formData.password}`);

    formEl.reset();
}

formEl.addEventListener('submit', onFormSubmit);


