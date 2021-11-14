const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')
const { needsAuth } = require('../utils/auth')

router.use(needsAuth)
router.get('/', productsController.getAll)
router.get('/:id', productsController.getProductById)
router.post('/', productsController.createProduct)
router.post('/:id/images', productsController.createImage)
router.patch('/:id', productsController.updatePartialsProduct)
router.put('/:id', productsController.updateProduct)
router.delete('/:id', productsController.removeProduct)
router.delete('/:productId/images/:id', productsController.removeImage)


module.exports = router