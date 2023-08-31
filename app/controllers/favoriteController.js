const figurineMapper = require("../models/figurineMapper");
const favoriteMapper = require("../models/favoriteMapper");

const favoriteController = {
  favoritePage: (req, res) => {
    const session = req.session;
    const favoriteList = favoriteMapper.findAllFavorites(session);

    res.status(200).render("favorite", { figurines: favoriteList });
  },

  addFavorite: async (req, res, next) => {
    const { id } = req.params;
    const session = req.session;
    const favoriteList = favoriteMapper.findAllFavorites(session);

    try {
      const figurine = await figurineMapper.findOneFigurineById(id);

      req.session.favoriteList = favoriteList;
      req.session.favoriteList.push(figurine);

      res.redirect("/favorites");
    } catch (error) {
      res.locals.error = { code: 404, message: error };

      return next();
    }
  },
  deleteFavorite: (req, res) => {
    const { id } = req.params;
    req.session.favoriteList.splice(id, 1);
    console.log(req.session.favoriteList);
    res.redirect("/favorites");
  },
};

module.exports = favoriteController;
