const db = require("../db.js");

const reviewMapper = {
  findAllReviewsById: async (id) => {
    const sqlQuery = {
      text: "SELECT * FROM review WHERE figurine_id = $1",
      values: [id],
    };
  
    const reviews = await db.query(sqlQuery);

    if (!reviews.rowCount) {
      throw new Error("Aucun commentaire trouvé !");
    }

    return reviews.rows;
  },
};

module.exports = reviewMapper;
