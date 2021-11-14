const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct } = require('./products')

//Resolve queries
const resolvers = {
    Query: {
        getAllProducts
    },
    Mutation: {
        createProduct,
        deleteProduct,
        updateProduct,
        createImageOnProduct,
        deleteImageOnProduct
    }
}

module.exports = resolvers