const { getAllProducts, createProduct, deleteProduct, updateProduct} = require('./products')

//Resolve queries
const resolvers = {
    Query: {
        getAllProducts
    },
    Mutation: {
        createProduct,
        deleteProduct,
        updateProduct
    }
}

module.exports = resolvers