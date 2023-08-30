const mainController = {
  homePage: (req, res ) => {
    res.status(200).render("home");
  },

  articlePage: (req, res) => {
    res.status(200).render("article");
  },
};

module.exports = mainController;
