// Fichier: fetchCheatSheet.js

// Fonction pour effectuer une requête fetch et récupérer des données JSON
async function fetchData(url) {
  try {
    const response = await fetch(url); // Effectue une requête fetch
    if (!response.ok) {
      // Vérifie si la réponse est correcte
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Parse les données en format JSON
    return data;
  } catch (error) {
    console.error("Fetch error:", error); // Affiche les erreurs éventuelles
  }
}

// Fonction pour afficher les données dans des cartes
function displayDataInCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Vide le conteneur avant d'ajouter les nouvelles cartes
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
    container.appendChild(card);
  });
}

// Fonction pour afficher les données dans des éléments d'input option
function populateSelectOptions(data, selectId) {
  const select = document.getElementById(selectId);
  select.innerHTML = ""; // Vide le select avant d'ajouter les nouvelles options
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    select.appendChild(option);
  });
}

// Fonction pour actualiser la page avec les nouvelles données
async function updatePage(url, cardsContainerId, selectId) {
  const data = await fetchData(url);
  if (data) {
    displayDataInCards(data, cardsContainerId);
    populateSelectOptions(data, selectId);
  }
}

// Exemple d'utilisation
document.addEventListener("DOMContentLoaded", () => {
  const url = "https://example.com/data.json"; // Remplacez cette URL par celle de votre fichier JSON
  const cardsContainerId = "cardsContainer";
  const selectId = "dataSelect";

  // Actualise la page avec les données au chargement
  updatePage(url, cardsContainerId, selectId);

  // Exemple d'actualisation de la page via un bouton
  const refreshButton = document.getElementById("refreshButton");
  refreshButton.addEventListener("click", () => {
    updatePage(url, cardsContainerId, selectId);
  });
});

/*
HTML pour tester le code:
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Cheat Sheet</title>
    <style>
        .card {
            border: 1px solid #ddd;
            padding: 16px;
            margin: 8px;
        }
    </style>
</head>
<body>
    <div id="cardsContainer"></div>
    <select id="dataSelect"></select>
    <button id="refreshButton">Actualiser</button>
    <script src="fetchCheatSheet.js"></script>
</body>
</html>
*/
