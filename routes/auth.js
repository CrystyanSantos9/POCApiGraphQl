const express = require('express')
const router = express.Router()
const authCotroller = require('../controllers/authController')
 

router.post('/login', authCotroller.auth)
 
module.exports = router