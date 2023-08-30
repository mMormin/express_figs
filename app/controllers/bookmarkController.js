const figurineDataMapper = require("../models/figurineDataMapper");

const bookmarksController = {
  bookmarksPage: (req, res) => {
    let bookmarks = req.session.bookmarks;

    if (req.session.bookmarks === undefined) {
      req.session.bookmarks = [];
    }

    res.status(200).render("bookmarks", { figurines: bookmarks });
  },

  addBookmark: async (req, res, next) => {
    const { id } = req.params;

    if (req.session.bookmarks === undefined) {
      req.session.bookmarks = [];
    }

    try {
      const figurine = await figurineDataMapper.findOneFigurineById(id);
      req.session.bookmarks.push(figurine);

      res.redirect("/bookmarks");
      
    } catch (error) {
      console.log(error);
      return next();
    }
  },
  deleteBookmark: (req, res, next) => {
    const { id } = req.params;
    console.log(id);

    const result = req.session.bookmarks.filter(bookmark => {
      return bookmark.id !== id;
    });
    console.log(result);
    //req.session.bookmarks = result;
    res.redirect("/bookmarks");
    
  }
};

module.exports = bookmarksController;
