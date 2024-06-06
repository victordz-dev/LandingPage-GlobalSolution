const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

let currentIndex = 0;
let slideInterval;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;

    slides[currentIndex].classList.add('active');
}

function startCarousel() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000);
}

function stopCarousel() {
    clearInterval(slideInterval);
}

window.onload = startCarousel;

document.querySelector('.carousel').addEventListener('mouseover', stopCarousel);

document.querySelector('.carousel').addEventListener('mouseout', startCarousel);

