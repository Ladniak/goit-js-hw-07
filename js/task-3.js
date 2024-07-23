const fieldEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onFieldInput = (event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === "") {
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = event.currentTarget.value;
    }
}

fieldEl.addEventListener('input', onFieldInput);
