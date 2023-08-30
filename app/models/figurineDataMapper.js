const db = require('../database');

const figurineDataMapper = {
    async findAllFigurines() {
        const sqlQuery = 'SELECT * FROM figurine;';
        const figurines = await db.query(sqlQuery);

        return figurines.rows;
    },

    async findOneFigurineById(id) {
        const sqlQuery = {
            text: "SELECT * FROM figurine WHERE id = $1",
            values: [id],
          };
      
        const figurine = await db.query(sqlQuery);

        return figurine.rows[0];
    }
}

module.exports = figurineDataMapper;