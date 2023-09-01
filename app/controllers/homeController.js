const figurineMapper = require("../models/figurineMapper");

const homeController = {
  homePage: async (req, res, next) => {
    const figurinesPromise = figurineMapper.getAllFigurines();
    const categoriesPromise = figurineMapper.getAllCategories();
    const promises = [figurinesPromise, categoriesPromise];

    try {
      const results = await Promise.allSettled(promises);
      const [{ value: figurines }, { value: categories }] = results;

      res.status(200).render("home", {
        figurines,
        categories,
      });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },

  categoriesHomePage: async (req, res, next) => {
    const { category } = req.params;
    const figurinesPromise = figurineMapper.getAllFigurinesByCategory(category);
    const categoriesPromise = figurineMapper.getAllCategories();
    const promises = [figurinesPromise, categoriesPromise];

    try {
      const results = await Promise.allSettled(promises);
      const [{ value: figurines }, { value: categories }] = results;

      res.status(200).render("home", {
        figurines,
        categories,
      });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },
};

module.exports = homeController;
