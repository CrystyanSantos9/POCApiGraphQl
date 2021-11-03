const express = require('express')
const app = express()
const routes = require('./routes')
const graphqlServer = require('./graphql')

//para pegarmos os dados enviados pelo post no insomnia
app.use(express.json())
//para pegarmos o body do navegador
app.use(express.urlencoded({extended: true}))
//REST
app.use(routes) //apenas uma chamada 
//vincula ao express
graphqlServer.applyMiddleware({ app })

app.listen(3777, (err)=>{
    if(err){
        console.log('Not possible to listem on port 3777')
    }else{
        console.log('Server running on port 3777')
    }
})