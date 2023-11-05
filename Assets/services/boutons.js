document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments avec la classe "service__description--bouton"
    const buttons = document.querySelectorAll('.service__description--bouton a');

    // Parcourt chaque bouton et ajoute les écouteurs d'événements
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.innerHTML = "Contactez nous !";
        });

        button.addEventListener('mouseout', function() {
            button.innerHTML = "En savoir plus";
        });
    });
});
