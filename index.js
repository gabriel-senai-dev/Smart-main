// Slide Home page
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-images');
    const totalSlides = slides.children.length;

    // Atualiza o índice atual (loop infinito)
    currentIndex = (index + totalSlides) % totalSlides;

    // Move o carrossel para exibir a imagem correspondente
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Altere automaticamente os slides a cada 3 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000); // 3000ms = 3 segundos