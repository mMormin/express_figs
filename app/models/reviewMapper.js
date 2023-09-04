const db = require("../db.js");

const reviewMapper = {
  getAllAverageNotes: async () => {
    const sqlQuery = "SELECT figurine_id, ROUND(AVG(note)) AS note FROM review GROUP BY figurine_id";
    const reviews = await db.query(sqlQuery);
    return reviews.rows;
  },
  getAllReviewsByFigurineId: async (figurineid) => {
    const sqlQuery = {
      text: "SELECT * FROM review WHERE figurine_id = $1",
      values: [figurineid],
    };
  
    const reviews = await db.query(sqlQuery);

    if (!reviews.rowCount) {
      throw new Error("Aucun commentaire trouvé !");
    }

    return reviews.rows;
  },
  getAverageNote: async (figurineId) => {
    const sqlQuery = {
      text: "SELECT ROUND(AVG(note)) FROM review WHERE figurine_id=$1",
      values: [figurineId]
    };
    const averageNote = await db.query(sqlQuery);
    return averageNote.rows[0].round;
  }
};

module.exports = reviewMapper;
