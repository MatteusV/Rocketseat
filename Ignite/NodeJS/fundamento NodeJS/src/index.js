const express = require('express');
const app = express();

app.use(express.json())

app.listen(3333);

// GET - Buscar uma informação dentro do  servidor
// POST - Inserir uma informação dentro do servidor
// PUT - Alterar uma informação dentro do servidor
// PATCH - ALterar uma informação especifica dentro do servidor
// DELETE - Deletar uma informação dentro do servidor

/*
 TIPOS DE PARÂMETROS 
 Route Params => Identificar um recurso (editar/deletar/buscar)
 Query Params => Paginação / filtro
 Body Params => Os objetos inserção/alteração (JSON)
*/

app.get('/courses', (req, res) => {
    const query = req.query
    console.log(query)

    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
]);
})

app.post('/courses', (req, res) => {
    const body = req.body;
    console.log(body)

    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
]);
})

app.put('/courses/:id', (req, res) => {
    const params = req.params;
    console.log(params)

    return res.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
]);
})

app.delete('/courses/:id', (req, res) => {
    return res.json([
        "Curso 6",
        "Curso 3",
        "Curso 4"
]);
})