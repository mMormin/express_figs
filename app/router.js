const express = require("express");

const homeController = require("./controllers/homeController");
const figurineController = require("./controllers/figurineController");
const favoriteController = require("./controllers/favoriteController");

const router = express.Router();

// Home
router.get("/", homeController.homePage);
// Categories
router.get("/category=:category", homeController.categoriesHomePage);

// Figurine
router.get("/figurine/:name/:id", figurineController.figurinePage);

// Favoris
router.get("/favoris", favoriteController.favoritePage);
router.get("/favoris/add/:id", favoriteController.addFavorite);
router.get("/favoris/delete/:id", favoriteController.deleteFavorite);


// Other Routes
router.use("*", (req, res) => {
  res.render("404");
});

module.exports = router;
