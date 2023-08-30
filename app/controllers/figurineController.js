const figurineDataMapper = require('../models/figurineDataMapper');

const figurineController = {
    async showAllArticles(req, res, next) {
        try {
            const figurines = await figurineDataMapper.findAllFigurines();
            res.status(200).render('home', {figurines});
        } catch(err) {
            console.log(err);
            next();
        }
    },
    
    async showOneArticle(req, res, next) {
        const { id } = req.params;
        const figurine = await figurineDataMapper.findOneFigurineById(id);
        console.log(figurine);
        res.status(200).render("article", { figurine });
    }
}

module.exports = figurineController;