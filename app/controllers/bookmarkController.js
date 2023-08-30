const bookmarksController = {
  bookmarksPage: (req, res) => {
    res.status(200).render("favoris");
  },
};

module.exports = bookmarksController;