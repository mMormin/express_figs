const figurineMapper = require("../models/figurineMapper");

const favoriteController = {
  favoritePage: (req, res) => {
    res.status(200).render("favoris", { favoris: req.session.favoris });
  },

  addFavorite: async (req, res, next) => {
    const { id: figurineId } = req.params;

    const alreadyExists = req.session.favoris.find(
      (figurine) => figurine.id === Number(figurineId)
    );

    if (!alreadyExists) {
      const figurine = await figurineMapper.getOneFigurineById(figurineId);
      req.session.favoris.push(figurine);
    }

    res.redirect("/favoris");
  },
  deleteFavorite: (req, res) => {
<<<<<<< HEAD
    const { id: figurineId } = req.params;

    req.session.favoris = req.session.favoris.filter(
      (favoris) => favoris.id !== Number(figurineId)
    );

    res.redirect("/favoris");
=======
    const { id } = req.params;
    req.session.favoriteList.splice(id, 1);
    console.log(req.session.favoriteList);
    res.redirect("/favorites");
>>>>>>> 071aa568da7096ac139b8cf1165884a99ecc29a0
  },
};

module.exports = favoriteController;
