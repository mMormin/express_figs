const figurineDataMapper = require("../models/figurineDataMapper");

const figurineController = {
  articlesListPage: async (req, res, next) => {
    try {
      const figurines = await figurineDataMapper.findAllFigurines();

      res.status(200).render("home", { figurines });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },

  articlePage: async (req, res, next) => {
    const { id } = req.params;

    try {
      const figurine = await figurineDataMapper.findOneFigurineById(id);

      res.status(200).render("article", { figurine });
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },
};

module.exports = figurineController;
