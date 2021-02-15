# Step 1 : Conception d'un système de suivi des projets

## Objectifs :
* Élaborer les diagrammes des cas d’utilisation.
* Élaborer les digrammes de séquence boite noir.
* Élaborer le digramme de classe.
* Élaborer les digrammes de séquence boite blanche.

## Énoncé :  
Il s'agit de concevoir une application permettant de gérer les projets au sein d'une société de services (développement, étude, …).

Les utilisateurs de l'application (directeur, chefs de projet, comptable, secrétaires, …) auront la possibilité de consulter et mettre à jour les informations aux quelles ils auront accès. Ces informations peuvent concerner un projet en cours ou clôturé. 

Un projet possède les informations suivantes: un code, un nom, une description, l'organisme client, une date de début, une date de fin, un montant et un ensemble de documents techniques. Un projet est géré par un chef.

Un projet est décomposé en phases dont chacune possède: un code, un libellé, une description, une date de début, une date de fin, un ensemble d'employés chargés de la réaliser, un montant à payer à la fin de la phase (un pourcentage du montant du projet), l'état de réalisation (terminée ou non), l'état de facturation (facturée ou non), l'état de paiement (payé ou non). Une phase possède également un ensemble de documents qui constituent les livrables.

Un livrable est caractérisé par: un code, un libellé, une description et le chemin vers un document sur disque. 

Chaque employé possède: un matricule, un nom et prénom, un numéro de téléphone, un email, un login et un mot de passe. Les employés sont classés par profil (technicien, secrétaire, chef de projet, ingénieur, directeur, …).

 Un organisme est caractérisé par: un code, un nom, une adresse, un numéro de téléphone, le nom du contact, un email du contact et une adresse web.

Cette application doit permettre :

 1. A la secrétaire de:

Ajouter et modifier un projet.
N.B: les données saisies ou modifiées sont le nom du projet, la description, l'organisme client, la date de début et la date de fin.

Ajouter et modifier les organismes.
Faire des recherches de projets et avoir les informations qu'elle peut modifier.
 2. Au directeur de:

Modifier toutes les informations d'un projet, en particulier le montant et le chef du projet.
Faire des recherches de projets et avoir toutes les informations.
 3. A l'administrateur de:

Ajouter, modifier et supprimer des utilisateurs (secrétaires, chefs de projet, ingénieurs, techniciens, …).
 4. Au chef de projet de:

Modifier les projets qu'il dirige en les décomposant en phases et en indiquant pour chaque phase: le libellé, la description, la date de début, la date de fin, le pourcentage à payer, les personnes qui vont la réaliser.
Modifier une phase en indiquant les livrables ou son état de clôture.
 5. Au comptable de:

Modifier les états de facturation et de paiement des phases terminées.
Facturer les phases terminées.
Faire des recherches par période pour avoir les phases terminées mains non facturées, les phases facturées mais non payé, les phases payées, … 

## T.A.F :
* Élaborer les diagrammes des cas d’utilisation.
* Élaborer les digrammes de séquence boite noir.
* Élaborer les digrammes de séquence boite blanche.
* Élaborer le digramme de classe.
