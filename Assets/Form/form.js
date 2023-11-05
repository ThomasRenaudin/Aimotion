document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Afficher le popup
    alert('Votre message a bien été envoyé');
    console.log('formulaire envoyé');

    // Réinitialiser les champs du formulaire
    document.getElementById('nom').value = '';
    document.getElementById('persopro').value = ''; // Remettre la valeur par défaut
    document.getElementById('telephone').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('message').value = '';
});