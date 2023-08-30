const figurineDataMapper = require('../models/figurineDataMapper');

const mainController = {
  homePage: async (req, res, next) => {
    try {
      const figurines = await figurineDataMapper.findAllFigurines();

      res.status(200).render("home", { figurines });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  }
};

module.exports = mainController;
