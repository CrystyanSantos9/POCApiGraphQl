const jwt = require('jsonwebtoken')
const secret = 'segredo_em_poder_do_servidor'

const USERS = {
    'user1': 'abc123'
}

const auth = async (req, res) =>{
    const { user, passwd } = req.body

    //Checa se usuário existe e se senha corresponde 
    if(USERS[user] && USERS[user] === 'abc123'){
        const token = jwt.sign(
            {user
            },secret, { expiresIn: '2 days'})

            //envia token e encerra conexao 
            return res.send({
                success: true,
                token
            })
    }

    res.send({
        success: false,
        message: 'wrong credentials '
    })
}


module.exports = {
   auth
}