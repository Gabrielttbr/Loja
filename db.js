const mysql2 = require('mysql2')

const conexaoPool = mysql2.createPool({
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT
})
exports.executeQuery = (query, params=[]) => {
    return new Promise((resolve, reject) => {
        conexaoPool.getConnection((erro, conn) => {
            if(erro) return reject(erro)
            conn.query(query, params, (erro, result, fields) => {
                conn.release();
                if(erro) return reject(erro)
                resolve(result)
            })
            

    
    })})}

exports.conexaoPool = conexaoPool;