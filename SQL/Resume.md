<table>
    <thead>
        <tr>
            <th>Gestion</th>
            <th>Description</th>
            <th>Requête</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=5>Connexion et exécution de script</td>
        </tr>
        <tr>
            <td>Connexion à MySQL (via la console unix)</td>
            <td>mysql ‐u nomUsager ‐p</td>
        </tr>
        <tr>
            <td>Quitter MySQL</td>
            <td>QUIT;</td>
        </tr>
        <tr>
            <td>Exécuter un script .sql (le chemin, lorsque nécessaire, peut être
                en mode absolu ou relatif. En mode relatif, le point de référence est le répertoire actif lors de la
                connexion à MySQL)</td>
            <td>SOURCE chemin/nomDuFichier.sql;</td>
        </tr>
        <tr>
            <td>Annuler une commande en cours de frappe</td>
            <td>\c</td>
        </tr>
        <tr>
            <td rowspan=6>Gestion des bases de données</td>
        </tr>
        <tr>
            <td>Créer une BD (sur Cogito nomDeLaDB = tixxx)</td>
            <td>CREATE DATABASE <i>nomDeLaBD</i>;</td>
        </tr>
        <tr>
            <td>Afficher les bases de données existantes</td>
            <td>SHOW DATABASES;</td>
        </tr>
        <tr>
            <td>Utiliser une base de données</td>
            <td>USE <i>nomBD;</i></td>
        </tr>
        <tr>
            <td>Effacer une base de données</td>
            <td>DROP DATABASE <i>nomDeLaBD;</i></td>
        </tr>
        <tr>
            <td>Effacer une base de données</td>
            <td>DROP DATABASE <i>nomDeLaBD;</i></td>
        </tr>
        <tr>
            <td rowspan=9>Gestion des tables</td>
        </tr>
        <tr>
            <td>Créer une table</td>
            <td>CREATE TABLE <i>nomDeLaTable
                    (nomDeLaColonne TypeDeValeurs AttributDesValeurs, nomDeLaColonne TypeDeValeurs AttributDesValeurs, …
                    );</i></td>
        </tr>
        <tr>
            <td>Afficher les tables existantes</td>
            <td>SHOW TABLES;</td>
        </tr>
        <tr>
            <td>Afficher la structure d'une table</td>
            <td>DESCRIBE <i>nomDeLaTable;</i></td>
        </tr>
        <tr>
            <td rowspan=4>Modifier une table</td>
        </tr>
        <tr>
            <td>ALTER TABLE <i>nomDeLaTable</i>
                ADD <i>nomDeLaColonne TypeDeValeurs;</i></td>
        </tr>
        <tr>
            <td>ALTER TABLE <i>nomDeLaTable</i>
                CHANGE <i>nomDeLaColonne nouveauNomDeLaColonne TypeDeValeurs;</i></td>
        </tr>
        <tr>
            <td>ALTER TABLE <i>nomDeLaTable</i>
                DROP COLUMN <i>nomDeLaColonne;</i></td>
        </tr>
        <tr>
            <td>Effacer une table</td>
            <td>DROP TABLE <i>nomDeLaTable;</i></td>
        </tr>
        <tr>
            <td rowspan=9>Gestions des données</td>
        </tr>
        <tr>
            <td rowspan=3>Ajouter des données</td>
        </tr>
        <tr>
            <td>INSERT INTO <i>nomDeLaTable</i>
                VALUES (valeur1, valeur2, …);</td>
        </tr>
        <tr>
            <td>INSERT INTO <i>nomDeLaTable (nomDeLaColonne1, nomDeLaColonne2, ...)</i>
                VALUES (valeur1, valeur2, …);</td>
        </tr>
        <tr>
            <td>Afficher des données</td>
            <td>SELECT <i>nomDeLaColonne1, nomDeLaColonne2, ...</i>
                FROM <i>nomDeLaTable</i>
                WHERE <i>certainnesColonnes=CertainesValeurs</i>
                GROUP BY <i>nomDeLaColonne</i>
                ORDER BY <i>nomDeLaColonne AttributD'ordre;</i>
            </td>
        </tr>
        <tr>
            <td>Mises à jour de données </td>
            <td>UPDATE <i>nomDeLaTable</i>
                SET <i>nomDeLaColonne1=valeur1, nomDeLaColonne2=valeur2, …</i>
                WHERE <i>certainnesColonnes=CertainesValeurs;</i>
            </td>
        </tr>
        <tr>
            <td>Modifier l’affichage du nom de colonne</td>
            <td>SELECT … FROM … AS <i>nomAlias;</i></td>
        </tr>
        <tr>
            <td>Recherche d'un pattern. (Retourne ici ce qui commence par ‘a’) </td>
            <td>SELECT … FROM … WHERE … LIKE ‘a%’;</td>
        </tr>
        <tr>
            <td>Effacer des données </td>
            <td>"DELETE FROM <i>nomDeLaTable</i>
                WHERE <i>certainnesColonnes=CertainesValeurs;</i></td>
        </tr>
        <tr>
            <td rowspan=7>Types de valeurs</td>
        </tr>
        <tr>
            <td>Entiers, Flottant, Double</td>
            <td>INT, FLOAT, DOUBLE</td>
        </tr>
        <tr>
            <td>Chaîne de caractères à longueur variable</td>
            <td>VARCHAR(nombreDeCaractère)</td>
        </tr>
        <tr>
            <td>Liste</td>
            <td>ENUM('élément1', 'élément2', …)</td>
        </tr>
        <tr>
            <td>Date (format aaaa‐mm‐jj)</td>
            <td>DATE</td>
        </tr>
        <tr>
            <td>Heure (format hh:mm:ss)</td>
            <td>TIME</td>
        </tr>
        <tr>
            <td>Date et Heure (mis à jours lorsque l'enregistrement est modifié)</td>
            <td>TIMESTAMP</td>
        </tr>
        <tr>
            <td rowspan=7>Attribut des valeurs</td>
        </tr>
        <tr>
            <td>Le champ ne peut pas être laissé vide</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>Le champ peut être laissé vide</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>Valeurs positives</td>
            <td>UNSIGNED</td>
        </tr>
        <tr>
            <td>Assignation automatique d'une valeur</td>
            <td>AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>Clé primaire</td>
            <td>PRIMARY KEY</td>
        </tr>
        <tr>
            <td>Valeurs par défaut</td>
            <td>DEFAULT 'Texte'</td>
        </tr>
        <tr>
            <td rowspan=3>Attribut d'ordre</td>
        </tr>
        <tr>
            <td>Ascendant</td>
            <td>ASC</td>
        </tr>
        <tr>
            <td>Descendent</td>
            <td>DESC</td>
        </tr>
        <tr>
            <td>Opérateurs</td>
            <td>Opérateurs</td>
            <td>AND, OR, NOT, =, !=, <,>, +, ‐, *, /</td>
        </tr>
        <tr>
            <td rowspan=5>Fonctions</td>
        </tr>
        <tr>
            <td>Fonctions mathématiques</td>
            <td>SUM(nomDeLaColonne), MIN(nomDeLaColonne),
                MAX(nomDeLaColonne), AVG(nomDeLaColonne), COUNT(nomDeLaColonne), COUNT(*)</td>
        </tr>
        <tr>
            <td>Fonction génératrices de dates</td>
            <td>NOW(), CURDATE(), CURRENT_DATE(), CURTIME()</td>
        </tr>
        <tr>
            <td>Fonctions pour extraire de l'information à partir
                des dates</td>
            <td>YEAR(uneDate), MONTH(uneDate),
                DAYOFMONTH(uneDate), TO_DAYS(uneDate)</td>
        </tr>
        <tr>
            <td>Fonctions de concaténation</td>
            <td>CONCAT(nomDeLaColonne1, nomDeLaColonne2, ...)</td>
        </tr>
    </tbody>
</table>
