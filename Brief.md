## Mots Clés 

Environnement de développement, serveur web, HTML, JavaScript, CSS, PHP, MYSQL

## Objectif 

L'objectif de ce *Brief* est de ce familiariser avec le langage PHP Niveau Basic.
La création de l’environnement de développement est le point de départ de ce *brief* : réussir l’installation de l’environnement AMP (pour Apache, MySQL, PHP, ces composants sont distribués avec WampServer), configurer l’environnement de développement intégré. Ensuite, démarrer la construction du site et réaliser ses premières lignes en PHP !

## Sujet 

* L'entreprise WeDev est spécialisée dans le développement logiciel. Elle souhaite gèrer les connaissances de ses développeurs à l'aide d'une application Web.
* Vous êtes chargés de réaliser cette application.

## Réalisation

1. Inscription
    * Créer une page HTML avec un formulaire permettant d'enregistrer les développeurs. Ce formulaire doit permettre de saisir le nom, le prénom et l'adresse mail de chaque développeur.
    * Ecrire un programme PHP qui est appelé lors de la soumission du formulaire précédent et qui enregistre les informations dans la table developpeurs de la base de données.

2. Affichage
    * Ecrire un autre programme PHP permettant d'afficher la liste des développeurs (nom et prénom) dans l'ordre alphabétique du nom des développeurs.

3. Enregistrement des technologies
    * Il s'agit d'écrire un programme PHP qui affiche un formulaire permettant de saisir les connaissances de chaque développeur.
    * Pour chacune des technologies (HTML, CGI, JavaScript, AJAX et PHP), le niveau est un entier compris entre 0 (aucune connaissance) et 5 (expert) ou la valeur -1 qui correspond à "niveau inconnu".
    * Vous devez écrire un autre programme PHP appelé lors de la soumission de ce formulaire pour enregistrer les informations dans la table technos

4. Extensions
    * liste des experts HTML
    * liste des développeurs ayant un niveau inconnu au moins
    * liste des développeurs dont un niveau au moins est insuffisant (c'est-à-dire inférieur ou égal à 3).
    * des statistiques (nombre total de développeurs, nombre d'experts par domaine, nombre d'experts multidomaines...)
    * liste des développeurs ayant suivi une formation
    * etc selon votre imagination

## Conception et Modélisation

1. UML

    * Élaborer le diagrammes de cas d’utilisation.
    * Élaborer le digrammes de séquence.
    * Élaborer le digramme de classe.

2. Database

    * A partir de MPD vous devez créer la base de données et les tables en utilisant les requêtes SQL .
    * Cette base contient trois tables :
        * une table developpeurs avec 4 champs : id, un entier (en mode auto-incrément) qui identifie un développeur, nom, prenom et email qui caractérisent son nom, son prénom et son adresse mail
        * une table technos avec 6 champs : le champ id clef externe sur la table précédente et les champs html, cgi, js, ajax et php qui sont tous des entiers caractérisant le niveau de connaissance du dévelopeur associé à l'identifiant id.
        * une table formations avec 3 champs : le champ id clef externe sur la table developpeurs, le champ techno qui identifie une technologie et un champ date.

## Durée

* 5 jours

## Livrable

* Kanban Board (Github / Jira)
* Les diagrammes UML
* Un fichier contenant les requêtes SQL
* Lien de l'application (Repo Github)



