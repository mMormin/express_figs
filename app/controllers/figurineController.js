const figurineMapper = require("../models/figurineMapper");
const reviewMapper = require("../models/reviewMapper");

const figurineController = {
  articlePage: async (req, res, next) => {
    const { id } = req.params;
    const getFigurineByIdPromise = figurineMapper.findOneFigurineById(id);
    const getReviewsByIdPromise = reviewMapper.findAllReviewsById(id);
    const promises = [getFigurineByIdPromise, getReviewsByIdPromise];

    try {
      const results = await Promise.allSettled(promises);
      const [{ value: figurine }, { value: reviews }] = results;

      res.status(200).render("article", { figurine, reviews });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },
};

module.exports = figurineController;
