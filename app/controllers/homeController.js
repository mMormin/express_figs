const figurineMapper = require("../models/figurineMapper");

const mainController = {
  homePage: async (req, res, next) => {
    try {
      const figurines = await figurineMapper.findAllFigurines();
      const goodFigurinesNbr = await figurineMapper.findAllGoodsInCategory();
      const evilFigurinesNbr = await figurineMapper.findAllEvilsInCategory();
      const animalFigurinesNbr = await figurineMapper.findAllAnimalsInCategory();

      res.status(200).render("home", {
        figurines,
        goodFigurinesNbr,
        evilFigurinesNbr,
        animalFigurinesNbr,
      });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },
};

module.exports = mainController;
