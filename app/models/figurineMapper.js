const db = require("../db.js");

const figurineMapper = {
  getAllFigurines: async () => {
    const figurines = await db.query("SELECT * FROM figurine;");

    if (!figurines.rowCount) {
      throw new Error("Aucune figurine trouvée !");
    }

    return figurines.rows;
  },

  getOneFigurineById: async (id) => {
    const sqlQuery = {
      text: "SELECT * FROM figurine WHERE id = $1;",
      values: [id],
    };

    const figurine = await db.query(sqlQuery);

    if (!figurine) {
      throw new Error("Cette figurine n'a pas été trouvée !");
    }

    return figurine.rows[0];
  },

  getAllCategories: async () => {
    const categories = await db.query(
      "SELECT category AS name, COUNT(*) FROM figurine GROUP BY category;"
    );

    if (!categories.rowCount) {
      throw new Error("Aucune catégorie trouvée !");
    }

    return categories.rows;
  },

  getAllFigurinesByCategory: async (category) => {

    const sqlQuery = {
      text: "SELECT * FROM figurine WHERE category = $1;",
      values: [`${category}`],
    };

    const figurines = await db.query(sqlQuery);

    return figurines.rows;
  },

  getAllFigurinesWithAverageNotes: async () => {
    const sqlQuery = `SELECT figurine.*, ROUND(AVG(r.note)) AS note 
                      FROM figurine
                      LEFT JOIN review AS r
                      ON figurine.id = r.figurine_id
                      GROUP BY figurine.id
                      ORDER BY figurine.id`;
    const figurines = await db.query(sqlQuery);
    return figurines.rows;
  }
};

module.exports = figurineMapper;
