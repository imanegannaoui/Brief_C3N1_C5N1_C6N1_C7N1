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
                (nomDeLaColonne TypeDeValeurs AttributDesValeurs, nomDeLaColonne TypeDeValeurs AttributDesValeurs, … );</i></td>
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
                VALUES  (valeur1,  valeur2, …);</td>
        </tr>
        <tr>
            <td>INSERT  INTO <i>nomDeLaTable  (nomDeLaColonne1, nomDeLaColonne2, ...)</i>
                VALUES  (valeur1,  valeur2,  …);</td>
        </tr>
        <tr>
            <td>Afficher des données</td>
            <td>SELECT <i>nomDeLaColonne1, nomDeLaColonne2,  ...</i>
                FROM  <i>nomDeLaTable</i>
                WHERE <i>certainnesColonnes=CertainesValeurs</i>
                GROUP BY  <i>nomDeLaColonne</i>
                ORDER BY  <i>nomDeLaColonne   AttributD'ordre;</i>
             </td>
        </tr>
        <tr>
            <td>Mises à jour de données	</td>
            <td>UPDATE  <i>nomDeLaTable</i>
                SET  <i>nomDeLaColonne1=valeur1, nomDeLaColonne2=valeur2, …</i>
                WHERE <i>certainnesColonnes=CertainesValeurs;</i>
            </td>
        </tr>
        <tr>
            <td>Modifier l’affichage du nom de colonne</td>
            <td>SELECT … FROM … AS  <i>nomAlias;</i></td>
        </tr>
        <tr>
            <td>Recherche d'un pattern. (Retourne ici ce qui commence par ‘a’)	</td>
            <td>SELECT … FROM … WHERE … LIKE ‘a%’;</td>
        </tr>
        <tr>
            <td>Effacer des données	</td>
            <td>"DELETE  FROM <i>nomDeLaTable</i>
                WHERE <i>certainnesColonnes=CertainesValeurs;</i></td>
        </tr>
  
    </tbody>
</table>
