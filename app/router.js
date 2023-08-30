const express = require('express');

const mainController = require('./controllers/mainController');
const figurineController = require('./controllers/figurineController');
const bookmarksController = require('./controllers/bookmarksController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/article/:id', figurineController.showOneArticle);
router.get('/bookmarks', bookmarksController.bookmarksPage);

module.exports = router;