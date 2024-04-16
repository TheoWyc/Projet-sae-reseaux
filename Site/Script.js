const premiumLink = document.getElementById('test');

premiumLink.addEventListener('click', function(event){
	// Sélection de l'élément contenant toutes les musiques
	const musiquesContainer = document.querySelector('.Musiques');

	// Compteur pour suivre le nombre d'éléments de musique sur la même ligne
	let count = 0;

	// Parcours de tous les éléments de musique
	const musiques = document.querySelectorAll('.music');
	musiques.forEach(musique => {
		// Incrémente le compteur
		count++;
		// Si on a déjà trois éléments sur la même ligne, on les réinitialise
		if (count > 3) {
			count = 1; // Réinitialise le compteur
		}
	});

	// Ajoute un saut de ligne pour passer à la ligne suivante
	console.log(count)
	if (count >= 2) {
		musiquesContainer.appendChild(document.createElement('br'));
	}

	// Création d'un nouvel élément div pour la musique
	const nouvelleMusique = document.createElement('div');
	nouvelleMusique.classList.add('music');

	// Création de l'élément image
	const imgElement = document.createElement('img');
	imgElement.setAttribute('src', './images/lebousepidi.webp');
	imgElement.setAttribute('height', '100');
	imgElement.setAttribute('width', '100');

	// Création de l'élément div pour les informations de la musique
	const infosDiv = document.createElement('div');
	infosDiv.classList.add('infos');

	// Création de l'élément paragraphe pour le nom de l'artiste
	const youtubeurPara = document.createElement('p');
	youtubeurPara.classList.add('Youtubeur');
	youtubeurPara.textContent = 'Lebouseuh ft Pidi';

	// Création de l'élément paragraphe pour le titre de la musique
	const titrePara = document.createElement('p');
	titrePara.classList.add('Titre');
	titrePara.textContent = 'Les boss';

	// Ajout des éléments dans leur parent respectif
	infosDiv.appendChild(youtubeurPara);
	infosDiv.appendChild(titrePara);
	nouvelleMusique.appendChild(imgElement);
	nouvelleMusique.appendChild(infosDiv);

	// Ajout de la nouvelle musique à la liste des musiques
	musiquesContainer.appendChild(nouvelleMusique);
});