const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({}, (err, courses) => {
            if (!err) res.json(courses);
            else res.status(400).json({ error: 'You S U C C!' });
        });
    }

    // [GET] /search
    // ":slug" -> là một biến có thể nhận về nhiều giá trị khác nhau
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
