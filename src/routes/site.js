
const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.use('/search', siteController.show)
router.use('/', siteController.index)

module.exports = router