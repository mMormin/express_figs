const figurineMapper = require("../models/figurineMapper");

const mainController = {
  homePage: async (req, res, next) => {
    const figurinesPromise = figurineMapper.getAllFigurines();
    const categoriesPromise = figurineMapper.getAllCategories();
    const promises = [figurinesPromise, categoriesPromise];

    try {
      const results = await Promise.allSettled(promises);
      const [{ value: figurines }, { value: categories }] = results;

      res.status(200).render("home", {
        figurines,
        evilNbr: categories[0].count,
        goodNbr: categories[1].count,
        animalNbr: categories[2].count,
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

    console.log(figurines);

      res.status(200).render("home", {
        figurines,
        evilNbr: categories[0].count,
        goodNbr: categories[1].count,
        animalNbr: categories[2].count,
      });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  }
};

module.exports = mainController;
