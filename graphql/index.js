//GRAPHQL
const { ApolloServer,   gql } = require('apollo-server-express')
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
    resolvers
})

module.exports = graphqlServer