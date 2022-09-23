let parent = document.querySelector('#parent');
let leftTemplate = document.querySelector('#left-template');
let rightTemplate = document.querySelector('#right-template');

for (let i = 0; i < 10; i++) {
    let l = leftTemplate.cloneNode(true);
    let r = rightTemplate.cloneNode(true);
    l.classList.remove('is-hidden');
    r.classList.remove('is-hidden');
    parent.appendChild(l);
    parent.appendChild(r);
}

AOS.init();
