const { Pool } = require('pg')

const queryGet = () => {
    return pool.query('SELECT * FROM users')
}
const queryCreate = (n, e) => {
    return pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [n, e])
}

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'firstbase',

})


const getUsers = async (req, res) => {

    const response = await queryGet();

    res.json(response.rows);

}

const create = async (req, res) => {
    const { name, email } = req.body;
    try {
        const response = await queryCreate(name, email);
        console.log(response);
        res.json({
            message: 'El usuario se añadió correctamente',
            body: {
                user: { name, email }
            }

        })
    }catch{
        console.log('Algo salió mal')
        res.json({
            error:{
                message: 'Error con los datos que los datos que se tratan de enviar'
            }
        })
    }
}

const show = async (req, res)=>{

    const response = await pool.query('SELECT * FROM users where id = $1', [req.params.id])
    const jsonn = response.rows
    res.send(jsonn);
}

const destroy = async (req, res)=>{
    const id = req.params.id
    const responde = await pool.query('DELETE FROM users WHERE id = $1', [id])
    console.log (responde);
    res.json(`User ${id} fue eliminado correctamente`);
}

module.exports = {
    getUsers,
    show,
    destroy,
    create
}
