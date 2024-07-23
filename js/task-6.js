function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inpEl = document.querySelector('#controls input');
const btnEl = document.querySelector('#controls button');
const secbtnEl = document.querySelector('#controls button:last-of-type');
const divEl = document.querySelector('#boxes');

let width = 30;
let height = 30;

const createBoxes = (amount) => {
  if (amount <= 100 && amount >= 1) {
    const fragmentEl = document.createDocumentFragment();
    for (let index = 0; index < amount; index++) {
      const newElem = document.createElement("div");
      newElem.style.backgroundColor = getRandomHexColor();
      newElem.style.width = `${width + index * 10}px`;
      newElem.style.height = `${height + index * 10}px`;
      fragmentEl.appendChild(newElem);
    }
    divEl.appendChild(fragmentEl);
  }
}

const destroyBoxes = () => {
  divEl.innerHTML = '';
}

btnEl.addEventListener('click', () => {
  destroyBoxes();
  createBoxes(Number(inpEl.value));
});
secbtnEl.addEventListener('click', destroyBoxes);
