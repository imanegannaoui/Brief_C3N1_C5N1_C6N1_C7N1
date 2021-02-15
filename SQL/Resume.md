## Gestion des bases de données

| Description | Requête | 
|----------|:-------------:| 
| Créer une BD  (sur Cogito nomDeLaDB = tixxx)| CREATE  DATABASE  nomDeLaBD | 
| Afficher les bases de données existantes	| SHOW  DATABASES |
| Utiliser une base de données	 | USE nomBD |
| Effacer une base de données	 | DROP  DATABASE  nomDeLaBD |

## Gestion des tables

| Description | Requête | 
|----------|:-------------:| 
| Créer une BD  (sur Cogito nomDeLaDB = tixxx)  | CREATE  DATABASE  nomDeLaBD; | 
| Afficher les bases de données existantes      | SHOW  DATABASES; | 
| Utiliser une base de données                  | USE nomBD; | 
| Effacer une base de données                   | DROP  DATABASE  nomDeLaBD; | 
| Créer une table                               | CREATE TABLE  nomDeLaTable (nomDeLaColonne   TypeDeValeurs   AttributDesValeurs, nomDeLaColonne   TypeDeValeurs   AttributDesValeurs,  …    ); |
| Afficher les tables existantes                | SHOW  TABLES; | 
| Afficher la structure d'une table             | DESCRIBE  nomDeLaTable; | 
| Modifier une table                            | ALTER TABLE  nomDeLaTable
RENAME AS nouveauNomDeLaTable; | "
"|  | ALTER TABLE  nomDeLaTable
ADD nomDeLaColonne   TypeDeValeurs; | "
"|  | ALTER TABLE  nomDeLaTable
CHANGE nomDeLaColonne  nouveauNomDeLaColonne   TypeDeValeurs; | "
"|  | ALTER TABLE  nomDeLaTable
DROP COLUMN nomDeLaColonne; | "
| Effacer une table | DROP  TABLE  nomDeLaTable; | 
"| Ajouter des données | INSERT INTO nomDeLaTable
VALUES  (valeur1,  valeur2, …); | "
"|  | INSERT  INTO nomDeLaTable  (nomDeLaColonne1, nomDeLaColonne2, ...)
VALUES  (valeur1,  valeur2,  …); | "
"| Afficher des données | SELECT nomDeLaColonne1, nomDeLaColonne2,  ...
FROM  nomDeLaTable
WHERE certainnesColonnes=CertainesValeurs
GROUP BY  nomDeLaColonne
ORDER BY  nomDeLaColonne   AttributD'ordre; | "
"| Mises à jour de données | UPDATE  nomDeLaTable
SET  nomDeLaColonne1=valeur1, nomDeLaColonne2=valeur2, …
WHERE certainnesColonnes=CertainesValeurs; | "
| Modifier l’affichage du nom de colonne | SELECT … FROM … AS  nomAlias; | 
| Recherche d'un pattern. (Retourne ici ce qui commence par ‘a’) | SELECT … FROM … WHERE … LIKE ‘a%’; | 
"| Effacer des données | DELETE  FROM nomDeLaTable  WHERE
certainnesColonnes=CertainesValeurs; | "
