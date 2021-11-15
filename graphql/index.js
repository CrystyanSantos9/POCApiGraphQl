//GRAPHQL
const { ApolloServer,   gql } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
//SCHEMA
const fs = require('fs')
const path = require('path')
const schema = fs.readFileSync(path.join(__dirname,'schema.graphql'))


console.log(path.join(__dirname,'schema.graphql'))

//Tipos
//Produto tipo
//Minha query retorna um vetor de produtos
const typeDefs = gql`${schema}`
const resolvers = require('./resolvers/index')
 
const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        if(req.headers && req.headers.authorization){
            const header = req.headers.authorization
            const headerParts = header.split(' ')
            const secret = 'segredo_em_poder_do_servidor'
            try{
                const payload = jwt.verify(headerParts[1], secret)
                return { user: payload.user }
            }catch(err){
                console.log(err)
            }
        }
        return {
        }
    }
})

module.exports = graphqlServer