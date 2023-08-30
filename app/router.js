const express = require('express');

const homeController = require('./controllers/homeController');
const figurineController = require('./controllers/figurineController');
const bookmarkController = require('./controllers/bookmarkController');

const router = express.Router();

router.get('/', homeController.homePage);
router.get('/article/:name/:id', figurineController.articlePage);

// bookmarks
router.get('/bookmarks', bookmarkController.bookmarksPage);
router.get('/bookmarks/add/:id', bookmarkController.addBookmark);
// router.get('/bookmarks/delete/:id', bookmarkController.deleteBookmark);

router.use("*", (req, res) => {
    res.render("404");
  });

module.exports = router;