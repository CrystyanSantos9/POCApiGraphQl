const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/', productsController.getAll)

//Pega produto por id
router.get('/:id', productsController.getProductById)

//Cria produto
router.post('/', productsController.createProduct)
//Adiciona imagem em produto
router.post('/:id/images', productsController.createImage)


//Pega atualizar somente algums campos
router.patch('/:id', productsController.updatePartialsProduct)


//Pega atualizar produto por id // altera o produto como um todo
router.put('/:id', productsController.updateProduct)

//remove produto por id
router.delete('/:id', productsController.removeProduct)

//removendo imagen
router.delete('/:productId/images/:id', productsController.removeImage)


module.exports = router