// déclaration de variable, lien avec fichier JSON
var data = liste;
var container = document.getElementById("container");

// on réalise une boucle qui va pour chaque élève lui créer une place dans le tableau, lui attribuer un identifiant et afficher son nom en majuscules
for(i=0; i<data.length; i++){
	
	var lis = document.createElement("li");
	lis.setAttribute("id",i);
	document.getElementById("container").appendChild(lis).innerHTML = data[i].nom.toUpperCase();
	container.appendChild(lis);

// on gère l'évènement clic
		lis.onclick = function(element){
		detail(element.target.getAttribute('id'));
		};
};

// on réalise une fonction qui va vider le contenu du document puis qui va créer une liste vide et qui va remplacer le titre (au clic)
	function detail(id){
	window.document.getElementById("container").remove();
	var body = document.getElementsByTagName('body');
	var tableau = document.createElement('ul');
	body.item(0).appendChild(tableau);
	var titre = document.getElementsByTagName('h1');
	titre[0].innerHTML = 'Détails sur cet élève';



// on affiche une balise "li" par information que l'on veut récupérer et on la remplit en précisant de quoi il s'agit
	var sonNom	= document.createElement('li');
	sonNom.innerHTML = 'nom :  ' + data[id].nom.toUpperCase();
	sonNom.style.fontSize ='30px';
	tableau.appendChild(sonNom);
	var sonPrenom	= document.createElement('li');
	sonPrenom.innerHTML = 'prénom :  ' + data[id].prénom.toUpperCase();
	sonPrenom.style.fontSize ='30px';
	tableau.appendChild(sonPrenom);
	var sonAge	= document.createElement('li');
	sonAge.innerHTML = 'age :  ' + data[id].age;
	sonAge.style.fontSize ='30px';
	tableau.appendChild(sonAge);
	var saVille	= document.createElement('li');
	saVille.innerHTML = 'ville :  ' + data[id].ville;
	saVille.style.fontSize ='30px';
	tableau.appendChild(saVille);
	var sonJavascript = document.createElement('li');
	sonJavascript.innerHTML = 'connais JS :  ' + data[id].javascript;
	sonJavascript.style.fontSize ='30px';
	tableau.appendChild(sonJavascript);
	var sonSiteFavori = document.createElement('li');
	sonSiteFavori.innerHTML = 'site favori :  ' + data[id].fav_web;
	sonSiteFavori.style.fontSize ='30px';
	tableau.appendChild(sonSiteFavori);
	var raisonSiteFavori = document.createElement('li');
	raisonSiteFavori.innerHTML = 'pourquoi ce(s) site(s) :  ' + data[id].fav_web_why;
	raisonSiteFavori.style.fontSize ='30px';
	tableau.appendChild(raisonSiteFavori);
	var sonAppFavorite = document.createElement('li');
	sonAppFavorite.innerHTML = 'application favorite :  ' + data[id].fav_app;
	sonAppFavorite.style.fontSize ='30px';
	tableau.appendChild(sonAppFavorite);
	var raisonAppFavorite = document.createElement('li');
	raisonAppFavorite.innerHTML = 'pourquoi cette application :  ' + data[id].fav_app_why;
	raisonAppFavorite.style.fontSize ='30px';
	tableau.appendChild(raisonAppFavorite);
	var avantIfa = document.createElement('li');
	avantIfa.innerHTML = 'avant de venir à l\'IFA :  ' + data[id].before_ifa;
	avantIfa.style.fontSize ='30px';
	tableau.appendChild(avantIfa);
	var raisonIfa = document.createElement('li');
	raisonIfa.innerHTML = 'pourquoi l\'IFA :  ' + data[id].why_ifa;
	raisonIfa.style.fontSize ='30px';
	tableau.appendChild(raisonIfa);
	var mail = document.createElement('li');
	mail.innerHTML = 'mail :  ' + data[id].contact_mail;
	mail.style.fontSize ='30px';
	tableau.appendChild(mail);

}
// pour revenir au choix de l'élève pour le moment il faut actualiser la page
