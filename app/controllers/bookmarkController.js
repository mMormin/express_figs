const figurineDataMapper = require('../models/figurineDataMapper');

const bookmarksController = {
  bookmarksPage: (req, res) => {
    const bookmarks = req.session.bookmarks;
    //console.log(req.session);
    res.status(200).render("bookmark", {figurines: bookmarks});
  },
  addBookmark: async (req, res, next) => {
    const { id } = req.params;
    let bookmarks = req.session.bookmarks;
    
    bookmarks = [];
    if (!bookmarks) {
    }

    try {
      const figurine = await figurineDataMapper.findOneFigurineById(id);
      bookmarks.push(figurine);
      console.log(bookmarks);
      console.log(bookmarks);
      res.status(201).redirect('/bookmarks');
    } catch (error) {
      console.log(error);
    }
  },
  // deleteBookmark: (req, res, next) => {
  //   const { id } = req.params;
  //   let bookmarks = req.session.bookmarks;

  //   const result = bookmarks.filter(bookmark => {
  //     return bookmark.id !== id;
  //   });

  //   bookmarks = result;
  // }
};

module.exports = bookmarksController;