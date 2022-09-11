
class NewsController {
    
    // [GET] /news
    index(req, res) {
        res.send('Wonderhoyyyyyy')
    }

    // [GET] /news/:slug    
    // ":slug" -> là một biến có thể nhận về nhiều giá trị khác nhau
    show(req, res) {
        res.send('News details')
    } 

}

module.exports = new NewsController