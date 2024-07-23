const numLiEl = document.querySelector('#categories');
const elOfLi = document.querySelectorAll('.item');

console.log(`Number of categories: ${numLiEl.children.length}`);

elOfLi.forEach(li => {
    const h2OfLi = li.querySelector('h2');
    const numOfEl = li.querySelector('ul');

    console.log(`Category: ${h2OfLi.textContent}`);
    console.log(`Elements: ${numOfEl.children.length}`);
});
