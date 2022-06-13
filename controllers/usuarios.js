const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const {query,nombre='No name',apikey,page=1,limit=2} = req.query;

    res.send({
        msg: 'get API - Controller',
        query,
        nombre,
        apikey,
        page,
        limit,
    })
}
const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body;
    res.send({
        msg: 'post API - Controller',
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.send({
        msg: 'put API - Controller',
        id
    })

    res.send('put API - Controller')
}
const usuariosPatch = (req, res = response) => {
    res.send('patch API - Controller')
}
const usuariosDelete = (req, res = response) => {
    res.send('delete API - Controller')
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}