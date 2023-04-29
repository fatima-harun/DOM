// Récupérer tous les boutons "Ajouter au panier"
var boutonsAjouter = document.querySelectorAll('.ajouter-au-panier');

// Ajouter un écouteur d'événements pour chaque bouton "Ajouter au panier"
boutonsAjouter.forEach(function(bouton) {
  bouton.addEventListener('click', function() {
    // Récupérer le nom et le prix de l'article à ajouter
    var article = this.closest('.article');
    var nomArticle = article.querySelector('h2').innerText;
    var prixAritcle = article.querySelector('p').innerText;

    // Appeler la fonction ajouterAuPanier
    ajouterAuPanier(nomArticle, prixAritcle);
  });
});

// Définir la fonction ajouterAuPanier
function ajouterAuPanier(nom, prix) {
  // Récupérer l'élément qui affiche le nombre d'articles dans le panier
  var nombreArticles = document.querySelector('.nombre-articles-panier');

  // Récupérer le nombre actuel d'articles dans le panier
  var nombreArticlesActuel = parseInt(nombreArticles.innerText);

  // Ajouter 1 au nombre d'articles dans le panier
  var nouveauNombreArticles = nombreArticlesActuel + 1;

  // Mettre à jour le nombre d'articles dans l'icône de panier
  nombreArticles.innerText = nouveauNombreArticles;

  // Afficher un message de confirmation
  alert("L'article " + nom + " a été ajouté au panier.");
}

const minusBtns = document.querySelectorAll('.minus');
  const plusBtns = document.querySelectorAll('.plus');
  const qtyInputs = document.querySelectorAll('.num');

  minus.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (qtyInputs[i] > 0) {
        qtyInputs[i]--;
      }
    });
  });

  plus.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      qtyInputs[i]++;
    });
  });

