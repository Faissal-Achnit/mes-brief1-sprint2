// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.



const listeProduits = document.querySelector("#liste-produits");




function afficherProduit(){

produits.forEach((produit) =>  {


   const li = document.createElement("li");

   li.classList.add("produit");

    const div = document.createElement("div");

        const nomProuduit = document.createElement("strong");

      nomProuduit.classList.add("nom-produit");
      
      nomProuduit.textContent = produit.nom;

       const prixProuduit = document.createElement("span");

      prixProuduit.classList.add("prix-produit");
      
      prixProuduit.textContent = produit.prix;

      const supprimer = document.createElement("button");

      supprimer.classList.add("supprimer");
      
      supprimer.textContent = "Retirer";

 
  li.appendChild(div);
 li.appendChild(strong);
 li.appendChild(span);
  li.appendChild(button);


listeProduits.appendChild(li);
})
}

afficherProduit();



