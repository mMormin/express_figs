const figurineDataMapper = require('../models/figurineDataMapper');

const mainController = {
  homePage: async (req, res, next) => {
    const figurines = await figurineDataMapper.findAllFigurines();

    res.status(200).render('home', { figurines });
  }
};

module.exports = mainController;
