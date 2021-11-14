const jwt = require('jsonwebtoken')
const secret = 'segredo_em_poder_do_servidor'

const token = jwt.sign({
    // Tudo abaixo é o Payload
    user: {
        id: 1,
        name: 'user1'
    }
}, secret, { expiresIn: '2 days' })

try{
    const tokenIsValid = jwt.verify(token , secret)
    console.log(token)
    console.log(tokenIsValid)
}catch (err){
    console.log(err.message)
}
// console.log(token)
