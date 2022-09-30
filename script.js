let parent = document.querySelector('#parent');
let leftTemplate = document.querySelector('#left-template');
let rightTemplate = document.querySelector('#right-template');
let numImages = 50;

for (let i = 0; i < numImages - 1; i += 2) {
    let l = leftTemplate.cloneNode(true);
    let r = rightTemplate.cloneNode(true);
    l.classList.remove('is-hidden');
    r.classList.remove('is-hidden');

    // Set the image and text.
    l.querySelector('img').src = `images/img${i}.jpg`;
    r.querySelector('img').src = `images/img${i + 1}.jpg`;

    console.log(l.querySelector('img').src);
    console.log(r.querySelector('img').src);

    parent.appendChild(l);
    parent.appendChild(r);
}

AOS.init();
