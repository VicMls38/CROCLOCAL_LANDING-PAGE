let currentSlide = 0;

function updateSlidePosition() {
    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (totalSlides === 0) return; // S'il n'y a pas de slides, rien à faire

    // Calculer la largeur de la slide active et le container
    const slideWidth = slides[0].offsetWidth;
    const containerWidth = document.querySelector('.slider-container').clientWidth;
    const slideMargin = 10; // Marge entre les slides

    // Calculer l'offset pour centrer la slide active
    const offset = (containerWidth - slideWidth) / 2;
    
    // Ajuster le déplacement du slider en tenant compte des marges
    const translateX = -(currentSlide * (slideWidth + slideMargin * 2)) + offset;

    slider.style.transform = `translateX(${translateX}px)`;
}

// Fonction pour changer la diapositive
function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Calcul du nouvel index
    currentSlide += direction;

    // Revenir au début ou à la fin si on dépasse les limites
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateSlidePosition();
}

// Initialiser la position du slider
updateSlidePosition();

// Recalculer la position lors du redimensionnement de la fenêtre
window.addEventListener('resize', updateSlidePosition);
