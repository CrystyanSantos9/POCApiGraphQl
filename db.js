const mysql = require('mysql2/promise')

// without connection pool

module.exports = mysql.createConnection({
    host: '192.168.1.103',
    port: 3336,
    user: 'root',
    password: 'senha',
    database: 'cat-products'
})


// with connection pool
/*module.exports = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'cat-products',
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
})*/