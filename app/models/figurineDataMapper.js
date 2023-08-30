const db = require('../db.js');

const figurineDataMapper = {
     findAllFigurines: async () => {
        const sqlQuery = 'SELECT * FROM figurine;';
        const figurines = await db.query(sqlQuery);

        if (!figurines.rowCount) {
            throw new Error("Aucune figurine trouvée !");
          }

        return figurines.rows;
    },

    findOneFigurineById: async (id) => {
        const sqlQuery = {
            text: "SELECT * FROM figurine WHERE id = $1",
            values: [id],
          };
      
        const figurine = await db.query(sqlQuery);

        if (!figurine.rowCount) {
            throw new Error("Cette figurine n'a pas été trouvée !");
          }

        return figurine.rows[0];
    }
}

module.exports = figurineDataMapper;