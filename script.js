let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.getElementById("slider");
    const totalSlides = document.querySelectorAll(".slide").length;

    // Calculer le nouvel index
    currentSlide += direction;

    // Si on dépasse la dernière slide, on revient à la première
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    // Si on dépasse la première slide en allant à gauche, on va à la dernière
    else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Appliquer la transformation pour afficher la slide correspondante
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
