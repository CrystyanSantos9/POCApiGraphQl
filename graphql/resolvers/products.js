const db = require('../../db')
const Product = require('../../models/products')(db)
const { ApolloError } = require('apollo-server-express')

const getAllProducts = async (context, {  filter }) => { 
    let products = null 
    if(filter && filter.categoryId){
        products = await Product.findAllByCategory(filter.categoryId)
    }else{
        products = await Product.findAll()
    }
    return products
}

const createProduct = async (context, {input}) => {
    const {product, price } = input 
    await Product.create([product, price])
    return {
       product, price 
    }
}

const deleteProduct = async (context, { id }) => {
    await Product.remove(id)
    return true 
}

const updateProduct = async (context, {id, input}) =>{
   const oldProduct = await Product.findAllById(id)
    if(!oldProduct){
        throw new ApolloError('Product not found!')
    }
    if(input.product){
        oldProduct.product = input.product
    }
    if(input.price){
        oldProduct.price = input.price
    }
    //atualiza - com o auxiliar oldProduct 
    await Product.update(id, [oldProduct.product, oldProduct.price])

    //se existir o campo categories, eu atualizo a categoria do produto 
    if(input.categories){
        try{
            await Product.updateCategories(id, input.categories)
        }catch(err){
            throw new ApolloError('Product not found!')
        }
    }
    return oldProduct
}

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct
}