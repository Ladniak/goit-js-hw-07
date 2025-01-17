function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const butEl = document.querySelector('button');
const spanEl = document.querySelector('.color')

const onChangeColorBtn = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
}

butEl.addEventListener('click', onChangeColorBtn);