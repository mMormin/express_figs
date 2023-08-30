const express = require('express');

const homeController = require('./controllers/homeController');
const figurineController = require('./controllers/figurineController');
const bookmarksController = require('./controllers/bookmarkController');

const router = express.Router();

router.get('/', homeController.homePage);
router.get('/article/:name/:id', figurineController.articlePage);
//router.get('/bookmark', bookmarkController.bookmarkPage);

router.use("*", (req, res) => {
    res.render("404");
  });

module.exports = router;