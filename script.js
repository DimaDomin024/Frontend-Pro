const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slide = document.querySelector('#slide');
const dotsContainer = document.querySelector('#dots');

const images = [
    './pict/1.jpg',
    './pict/2.jpg',
    './pict/3.jpg',
    './pict/4.jpg',
    './pict/5.jpg',
    './pict/6.jpg',
    './pict/7.jpg',
    './pict/8.jpg',
    './pict/9.jpg'
];

let i = 0;
images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    dot.addEventListener('click', () => {
        i = index;
        render();
    });
    dotsContainer.appendChild(dot);
});

function render() {
    slide.innerHTML = '';
    const img = document.createElement('img');
    img.src = images[i];
    slide.appendChild(img);

    prev.classList.toggle('not-active', i === 0);
    next.classList.toggle('not-active', i === images.length - 1);

    document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === i);
    });
}

next.addEventListener('click', () => {
    if (i < images.length - 1) {
        i++;
        render();
    }
});

prev.addEventListener('click', () => {
    if (i > 0) {
        i--;
        render();
    }
});

render();