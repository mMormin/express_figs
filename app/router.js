const express = require("express");

const homeController = require("./controllers/homeController");
const figurineController = require("./controllers/figurineController");
const favoriteController = require("./controllers/favoriteController");

const router = express.Router();

// Defaults Routes
router.get("/", homeController.homePage);
router.get("/figurine/:name/:id", figurineController.articlePage);

// Favorites Routes
router.get("/favorites", favoriteController.favoritePage);
router.get("/favorites/add/:id", favoriteController.addFavorite);
router.get("/favorites/delete/:id", favoriteController.deleteFavorite);

// Categories Routes
//router.get("/category?=:category", figurineController.articlesListPage);

// Other Routes
router.use("*", (req, res) => {
  res.render("404");
});

module.exports = router;
