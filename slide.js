const sliders = {
    slider1: { index: 0 },
    slider2: { index: 0 },
    slider3: { index: 0 }
};

function updateSlider(sliderId) {
    const wrapper = document.getElementById(`${sliderId}-wrapper`);
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth + 8;
    const offset = (wrapper.offsetWidth / 2) - (slideWidth / 2) - (sliders[sliderId].index * slideWidth);

    slider.style.transform = `translateX(${offset}px)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === sliders[sliderId].index);
    });
}

function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    sliders[sliderId].index = (sliders[sliderId].index + direction + slides.length) % slides.length;
    updateSlider(sliderId);
}

window.addEventListener('load', () => {
    // força índice 0 para todos sliders na inicialização
    Object.keys(sliders).forEach(sliderId => {
        sliders[sliderId].index = 0;
    });

    requestAnimationFrame(() => {
        Object.keys(sliders).forEach(updateSlider);
    });
});

window.addEventListener('resize', () => {
    requestAnimationFrame(() => {
        Object.keys(sliders).forEach(updateSlider);
    });
});

// Ao clicar na imagem, abre no modal
document.querySelectorAll('.slide img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Fecha modal ao clicar fora da imagem
window.addEventListener('click', function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
