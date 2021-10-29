const express = require('express')
const app = express()

//Para utilizar graphql
const { ApolloServer,   gql } = require('apollo-server-express')

//rotas de recursos
// const productsRouter = require('./routes/products') // antes
const routes = require('./routes')

//para pegarmos os dados enviados pelo post no insomnia
app.use(express.json())
//para pegarmos o body do navegador
app.use(express.urlencoded({extended: true}))

//GRAPHQL

//Tipos
//Produto tipo
//Minha query retorna um vetor de produtos
const typeDefs = gql`
    type Query {
        getAllProducts: [Product]
    }
    type Product {
        id: String 
        name: String
    }
    type Mutation {
        createProduct(input: ProductInput): Product
    }
    input ProductInput {
        id: String!
        name: String!
    }
`

//Resolve queries
const resolvers = {
    Query: {
        getAllProducts: () =>[{id: '1', name: 'All products'}]
    },
    Mutation: {
        createProduct: (context, {input}) => {
            const {id, name } = input 
            console.log(id, name)
            return {
                id, name
            }
        }
    }
}
const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers
})
//vincula ao express
graphqlServer.applyMiddleware({ app })


//usando rotas
// app.use('/products', productsRouter) // antes - uma linha por rotas
app.use(routes) //apenas uma chamada 


app.listen(3777, (err)=>{
    if(err){
        console.log('Not possible to listem on port 3777')
    }else{
        console.log('Server running on port 3777')
    }
})