const favoriteDataMapper = {
  findAllFavorites: (session) => {
    let favoriteListSession = session.favoriteList;

    if (favoriteListSession === undefined) {
      favoriteList = [];
    }

    return favoriteList;
  },
};

module.exports = favoriteDataMapper;
