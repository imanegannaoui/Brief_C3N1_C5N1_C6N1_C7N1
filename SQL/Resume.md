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
    </tbody>
</table>
