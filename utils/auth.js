const jwt = require('jsonwebtoken')

const needsAuth = (req, res, next ) =>{
    if(req.headers && req.headers.authorization){
        const header = req.headers.authorization
        const headerParts = header.split(' ')
        const secret = 'segredo_em_poder_do_servidor'
        try{
            const payload = jwt.verify(headerParts[1], secret)
            res.locals.user = payload.user 
            //se a verificação foi bem sucedida, req passa
            return next()
        }catch(err){
            console.log(err)
        }
    }

    res.send({
        error: true, 
        message: 'needs auth'
    })
}

module.exports = { needsAuth }