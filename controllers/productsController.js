const getAll = (req, res) =>{
    res.send({
        products: ['all products']
    })
}

//Pega produto por id
const getProductById = (req, res)=>{
    
}

//Cria produto
const createProduct = (req, res)=>{
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
    })
}


//Pega atualizar somente algums campos
const updatePartialsProduct = (req, res)=>{
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
    })
}


//Pega atualizar produto por id // altera o produto como um todo
const updateProduct = (req, res)=>{
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
    })
}

//remove produto por id
const removeProduct = (req, res)=>{
    console.log(req.body)
    res.send({
        success: true,
        data: 'id' + req.params.id
    })
}

module.exports = {
    getAll,
    getProductById,
    createProduct,
    updatePartialsProduct,
    updateProduct,
    removeProduct
}