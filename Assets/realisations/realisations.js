
document.addEventListener('DOMContentLoaded', function() {
    // Déclaration des données à afficher 
    const realisations = [
        {
            "type": "Artiste partenaire",
            "title": "Laylow",
            "img": "laylow.jpg",
            "description": "Tournée 2022 - 2023 - 2024",
        },
        {
            "type": "Artiste partenaire",
            "title": "47ter",
            "img": "47ter.jpg",
            "description": "Concert à la sirène",
        },
        {
            "type": "Artiste partenaire",
            "title": "Kekra",
            "img": "kekra.jpg",
            "description": "Tournée 2022 - 2023",
        },
         {
            "type": "Artiste partenaire",
            "title": "Tiakola",
            "img": "Tiakola.jpg",
            "description": "Tournée 2023 - 2024",
        },
        {
            "type": "Installation d'écran géants",
            "title": "Stade Rochelais",
            "img": "staderochelais.jpg",
            "description": "Finale TOP14 2022",
        },
        {
            "type": "Festival partenaire",
            "title": "Francofolies",
            "img": "francofolies.jpg",
            "description": "De 2020 à aujourd'hui",
        },
        {
            "type": "Festival partenaire",
            "title": "Urban Electro Night",
            "img": "urbanelectronight.jpg",
            "description": "Edition 2023",
        },
    ];

  // Récupération du conteneur où les divs "realisation card" seront ajoutées
  const realisationsContainer = document.querySelector('.realisations__cards');

  // Récupération du dropdown
  const dropdown = document.getElementById('categorie');

  // Fonction pour afficher ou masquer les realisation cards en fonction du type sélectionné
  function filtrerRealisations(selectedType) {
    document.querySelectorAll('.realisationcard').forEach(function(realisationCard) {
        const typeElement = realisationCard.querySelector('.realisationcard__type');

        if (selectedType === '' || typeElement.textContent === selectedType) {
            realisationCard.style.display = 'flex';
        } else {
            realisationCard.style.display = 'none';
        }
    });
}


  // Parcours du tableau et création dynamique des éléments HTML
  realisations.forEach(function(realisation) {
      // Création de la div "realisation card"
      const realisationCard = document.createElement('div');
      realisationCard.classList.add('realisationcard');
      realisationCard.setAttribute('data-type', realisation.type);

      // Création des éléments à l'intérieur de la "realisation card"
      const typeElement = document.createElement('p');
      typeElement.classList.add('realisationcard__type');
      typeElement.textContent = realisation.type;

      const imgElement = document.createElement('img');
      imgElement.classList.add('realisationcard__img');
      imgElement.src = 'Assets/realisations/' + realisation.img; // Assurez-vous que le chemin d'accès est correct

      const descriptionContainer = document.createElement('div');
      descriptionContainer.classList.add('realisationcard__description');

      const titleElement = document.createElement('h3');
      titleElement.classList.add('realisationcard__description--titre');
      titleElement.textContent = realisation.title;

      const dateElement = document.createElement('p');
      dateElement.classList.add('realisationcard__description--date');
      dateElement.textContent = realisation.description;

      // Ajout des éléments à la "realisation card"
      descriptionContainer.appendChild(titleElement);
      descriptionContainer.appendChild(dateElement);

      realisationCard.appendChild(typeElement);
      realisationCard.appendChild(imgElement);
      realisationCard.appendChild(descriptionContainer);

      // Ajout de la "realisation card" au conteneur principal
      realisationsContainer.appendChild(realisationCard);

      // Extraction des types et injection dans le dropdown
      const existingOptions = Array.from(dropdown.options).map(option => option.value);

      // Ajout du type seulement si ce n'est pas déjà dans la liste
      if (!existingOptions.includes(realisation.type)) {
          const newOption = document.createElement('option');
          newOption.value = realisation.type;
          newOption.textContent = realisation.type;
          dropdown.appendChild(newOption);
      }
  });

  // Gestionnaire d'événements pour le changement de valeur dans le dropdown
  dropdown.addEventListener('change', function() {
      // Réinitialiser l'affichage avant de filtrer
      if (dropdown.value !== '') {
        console.log("Changement type détecté", dropdown.value);
        filtrerRealisations(dropdown.value);
      }
      else{
        filtrerRealisations('');
      }
  });
});
