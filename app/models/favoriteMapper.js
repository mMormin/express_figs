const favoriteMapper = {
  findAllFavorites: (session) => {
    let favoriteListSession = session.favoriteList;

    if (favoriteListSession === undefined) {
      favoriteListSession = [];
    }

    return favoriteListSession;
  },
};

module.exports = favoriteMapper;
