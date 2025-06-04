# Blindtest - Compteur de points

![](/src/images/blindtest_score.png "Blindtest Score App")

## Installation et exécution sous Windows

Ce guide explique comment installer et exécuter l'application "Blindtest - Compteur de points" sur un système Windows.

### Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

1.  **Node.js** : Vous pouvez télécharger et installer Node.js à partir du site officiel : [https://nodejs.org/](https://nodejs.org/)
    *   Pendant l'installation, assurez-vous de cocher l'option "Add to PATH" pour que Node.js soit accessible depuis l'invite de commandes.
2.  **npm** : npm est installé automatiquement avec Node.js. Vous pouvez vérifier si npm est installé en ouvrant l'invite de commandes et en tapant `npm -v`.

### Étapes d'installation

1.  **Télécharger le code source** :
    *   Téléchargez le code source de l'application dans un dossier de votre choix (dézipper si besoin).

2.  **Ouvrir l'invite de commandes** :
    *   Ouvrez l'invite de commandes (cmd.exe) en recherchant "invite de commandes" dans le menu Démarrer.

3.  **Naviguer vers le dossier du projet** :
    *   Utilisez la commande `cd` pour naviguer vers le dossier où vous avez téléchargé le code source. Par exemple :
        ```
        cd C:\Users\VotreNom\Documents\blindtest_score
        ```

4.  **Installer les dépendances** :
    *   Exécutez la commande suivante pour installer les dépendances du projet :
        ```
        npm install
        ```
    *   Cette commande va lire le fichier `package.json` et installer toutes les bibliothèques nécessaires (React, Vite, etc.).

### Exécution de l'application

1.  **Démarrer le serveur de développement** :
    *   Après avoir installé les dépendances, exécutez la commande suivante pour démarrer le serveur de développement :
        ```
        npm run dev
        ```
    *   Cette commande va démarrer un serveur local et afficher une URL dans l'invite de commandes (par exemple, `http://localhost:5173/`).

2.  **Ouvrir l'application dans le navigateur** :
    *   Ouvrez votre navigateur web (Chrome, Firefox, Edge, etc.) et entrez l'URL affichée dans l'invite de commandes : http://127.0.0.1:5173
    *   L'application "Blindtest - Compteur de points" devrait maintenant être visible et fonctionnelle dans votre navigateur.

### Utilisation de l'application

*   **Ajouter des joueurs** : Entrez le nom d'un joueur dans le champ "Nom du joueur" et appuyez sur Entrée ou cliquez sur le bouton "Ajouter un joueur".
*   **Incrémenter/Décrémenter les scores** : Utilisez les boutons "+" et "-" à côté du nom de chaque joueur pour ajuster leurs scores.
*   **Réinitialiser les scores** : Cliquez sur le bouton "Réinitialiser les scores" pour remettre tous les scores à zéro sans supprimer les joueurs.
*   **Afficher le podium** : Cliquez sur le bouton "Podium" pour afficher le classement final des joueurs sous forme de tableau. Cliquez à nouveau pour masquer le tableau.

### Notes

*   Assurez-vous que le serveur de développement (lancé avec `npm run dev`) est en cours d'exécution pendant que vous utilisez l'application. Si vous fermez l'invite de commandes, le serveur s'arrêtera et l'application ne sera plus accessible dans votre navigateur.
*   Si vous rencontrez des problèmes lors de l'installation ou de l'exécution, vérifiez que vous avez bien suivi toutes les étapes et que vous avez installé les prérequis correctement.
