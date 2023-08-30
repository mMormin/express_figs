const db = require("../db.js");

const figurineMapper = {
  findAllFigurines: async () => {
    const sqlQuery = "SELECT * FROM figurine;";
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
  },

  findAllGoodsInCategory: async () => {
    const sqlQuery = {
      text: "SELECT * FROM figurine WHERE category = $1",
      values: ["Gentil"],
    };

    const result = await db.query(sqlQuery);

    if (!result.rowCount) {
      throw new Error("La catégorie n'a pas été trouvé !");
    }

    return result.rows.length;
  },

  findAllEvilsInCategory: async () => {
    const sqlQuery = {
      text: "SELECT * FROM figurine WHERE category = $1",
      values: ["Méchant"],
    };

    const result = await db.query(sqlQuery);

    if (!result.rowCount) {
      throw new Error("La catégorie n'a pas été trouvé !");
    }

    return result.rows.length;
  },

  findAllAnimalsInCategory: async () => {
    const sqlQuery = {
      text: "SELECT * FROM figurine WHERE category = $1",
      values: ["Animal"],
    };

    const result = await db.query(sqlQuery);

    if (!result.rowCount) {
      throw new Error("La catégorie n'a pas été trouvé !");
    }

    return result.rows.length;
  },
};

module.exports = figurineMapper;
