const figurineMapper = require("../models/figurineMapper");
const reviewMapper = require("../models/reviewMapper");

const figurineController = {
  figurinePage: async (req, res, next) => {
    const { id: figurineId } = req.params;
    const figurinePromise = figurineMapper.getOneFigurineById(figurineId);
    const reviewsPromise = reviewMapper.getAllReviewsByFigurineId(figurineId);
    const reviewsAverageNote = reviewMapper.getAverageNote(figurineId);
    const categoriesPromise = figurineMapper.getAllCategories();
    const promises = [figurinePromise, reviewsPromise, reviewsAverageNote, categoriesPromise];

    try {
      const results = await Promise.allSettled(promises);
      const [{ value: figurine }, { value: reviews }, {value: averageNote}, {value: categories}] = results;
      res
        .status(200)
        .render("figurine", {
          figurine,
          reviews,
          averageNote,
          categories
        });

    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },
};

module.exports = figurineController;
