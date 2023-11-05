
document.addEventListener('DOMContentLoaded', function() {
    // Déclaration des données à afficher 
    const slides = [
        {
            "date": "Août 2023",
            "title": "Palmfest 2023",
            "cover": "Palmfest.jpg",
            "description": "Fournisseur majeur son, lumière, vidéo",
        },
        {
            "date": "Tour 2021-2022-2023",
            "title": "Disiz",
            "cover": "disiz.jpg",
            "description": "Fournisseur principal son, lumière et vidéo",
        },
        {
            "date": "Septembre 2023",
            "title": "Contours Clichy",
            "cover": "contours.jpg",
            "description": "Fournisseur principal son, lumière et vidéo",
        }
    ];

    console.log(slides);

    // Déclaration des EventsListener

    const leftArrow = document.querySelector('.slider__arrow--left');
    const rightArrow = document.querySelector('.slider__arrow--right');
    const dotsContainer = document.querySelector('.slider__dots');

    // Initialise la variable de diapositive actuelle à zéro
    let currentSlideIndex = 0;
    updateSlide(currentSlideIndex);

    // Fonction qui prends en argument la numéro de la slide demandée et actualise le visuel
    function updateSlide(index) {
        const slide = slides[index]; // On parcourt le tableau de slides et on se place à l'index demandé
        const bannerImg = document.querySelector('.slider__image'); // On récupère l'image de la diapositive actuelle
        const tagTitle = document.querySelector('.slider__description--nom'); // On récupère la tagligne de la diapositive actuelle
        const tagDate = document.querySelector('.slider__description--date');
        const tagDescription = document.querySelector('.slider__description--description');

        bannerImg.src = `Assets/Slider/${slide.cover}`; // Modification de l'image en récupérant la slide de l'index demandé
        tagTitle.innerHTML = slide.title; // Modification de la tag line de facon similaire
        tagDate.innerHTML = slide.date;
        tagDescription.innerHTML = slide.description;

        // Mettre à jour la classe dot_selected pour correspondre à l'image affichée.
        const dots = document.querySelectorAll('.dot'); // Selectionne tous les dots
        dots.forEach((dot, dotIndex) => { // Parcours les dots
            dot.classList.toggle('dot_selected', dotIndex === index); // Applique les dot selected au dot avec le bon index. Toggle retire aussi le point selectionné avant
        });
    }

    // Création automatique des dots en JS selon nombre de slides à afficher.

    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');// Dot était déja défini dans le css
        if (index === 0) {
            dot.classList.add('dot_selected'); // Dot selected était déja defini dans le css
        }
        dotsContainer.appendChild(dot); // Défini chaque dot comme un élément enfant du dot container --> Le dots du html
    });

     // Fonctione qui actualise le diporama lors du clic sur flèche gauche
     leftArrow.addEventListener('click', () => { 
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // utilisation des modulos pour le retour automatique si dépassement 
        updateSlide(currentSlideIndex); // Appel de la fonction d'actualisation du visuel une fois le bon index calculé
    });

     // Fonctione qui actualise le diporama lors du clic sur flèche droit
    rightArrow.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;// utilisation des modulos pour le retour automatique si dépassement
        updateSlide(currentSlideIndex); // Appel de la fonction d'actualisation du visuel une fois le bon index calculé
    });

    // Définir une fonction pour passer à la diapositive suivante automatiquement
    function autoSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlide(currentSlideIndex);
    }

    // Définir un intervalle pour appeler la fonction autoSlide toutes les 4 secondes
    const intervalId = setInterval(autoSlide, 4000);

});