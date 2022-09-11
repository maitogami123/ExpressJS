class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    // ":slug" -> là một biến có thể nhận về nhiều giá trị khác nhau
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
