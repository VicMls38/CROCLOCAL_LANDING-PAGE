document.addEventListener('DOMContentLoaded', function () {
    new Splide('#avis-carousel', {
      type: 'loop',              // Boucle infinie
      perPage: 1,                // Un seul élément visible à la fois
      focus: 'center',           // Centrer l'élément actif
      gap: '1rem',               // Espacement entre les slides
      padding: { left: '10rem', right: '10rem' }, // Padding à gauche et à droite pour le "Side Padding"
      arrows: true,              // Affichage des flèches de navigation
      pagination: false,         // Désactivation de la pagination
      breakpoints: {
        600: {
          perPage: 1,
          padding: { left: '2rem', right: '2rem' }, // Padding réduit pour les petits écrans
        },
      },
    }).mount();
  });
  