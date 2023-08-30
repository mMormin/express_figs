const express = require('express');

const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/article', mainController.articlePage);
router.get('/bookmarks', bookmarksController.bookmarksPage );

module.exports = router;