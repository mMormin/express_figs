const bookmarksController = {
  bookmarksPage: (request, response) => {
    res.status(200).render("favoris");
  },
};

module.exports = bookmarksController;
