const db = require('../db')
const Product = require('../models/products')(db)

const getAll = async (req, res) =>{
    let products = null 
    try{
        if(req.query.categoryId){
            products =  await Product.findAllByCategory(req.query.categoryId)
        }else{
            products =  await Product.findAll()
        }
        res.send({
            products
        })
    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }
    
}

//Pega produto por id
const getProductById = async (req, res)=>{
    const {id} = req.params
    try{
        const data = await Product.findAllById(id)
        res.send(data)
    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }
}

//Cria produto
const createProduct = async (req, res)=>{
    try{
        const { product, price } = req.body
        await Product.create([product, price])
        res.status(200).send('The request has been fulfilled and has resulted in one or more new resources being created');
    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }
}

const createImage = async (req, res) =>{
    const { id } = req.params
    const { description, url } = req.body
    try{
        await Product.addImage(id, [description, url])
        res.send({
            success: true,
            data: req.body
        })
    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }

}


//Pega atualizar somente algums campos //PATCH
const updatePartialsProduct = async (req, res)=>{
    //seleciona o produto
    try{
        const oldProduct = await Product.findAllById(req.params.id)
        //se produto não existir 
        if(!oldProduct){
           return res.send({
                success: false, 
                message: 'Product not found'
            })
        }
        //products/id/categories
    //verifica quais valores serão substituídos
    if(req.body.product){
        oldProduct.product = req.body.product
    }
    if(req.body.price){
        oldProduct.price = req.body.price
    }
    //atualiza - com o auxiliar oldProduct 
    await Product.update(req.params.id, [oldProduct.product, oldProduct.price])

    //se existir o campo categories, eu atualizo a categoria do produto 
    if(req.body.categories){
        await Product.updateCategories(req.params.id, req.body.categories)
    }
 
    res.send({
        success: true, 
        data: req.body 
    })

    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }
}


//Pega atualizar produto por id // altera o produto como um todo
const updateProduct = async (req, res)=>{
    const { id } = req.params
    const { product, price } = req.body

    try{
        await Product.update(id, [product, price])
        res.status(200).send({success: true})
    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }
}

//remove produto por id
const removeProduct = async (req, res)=>{
    const { id } = req.params
    try{
        await Product.remove(id)
        res.status(200).send({success: true})
    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }
}
const removeImage =  async (req, res)=>{ 
    const {productId, id} = req.params
    try{
        await Product.removeImage(productId, id)
        res.send({
            success: true,
        })
    }catch(err){
        res.status(500).send('Internal Server Error')
        console.log( { error: err })
    }
}

module.exports = {
    getAll,
    getProductById,
    createProduct,
    createImage,
    updatePartialsProduct,
    updateProduct,
    removeProduct,
    removeImage
}