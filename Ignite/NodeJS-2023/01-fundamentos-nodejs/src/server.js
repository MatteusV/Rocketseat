// Aplicações HTTP => APIs
// CommonJS => require
// ESModules => import/export
// JSON => JavaScript Object Notation
// Cabeçalhos (Requisição/Resposta) => Metadados 


import http from 'node:http'
import { json } from './middlewares/json.js';
import { routes } from './route.js';
import { extractQueryParams } from './utils/extract-query-params.js';
// Query Parameters: URL STATEFUL(filtro, paginação, não obrigatórios) ex => localhost:3333/users?userId=1&name=Matteus
// Route Parameters: IDENTIFICAÇÃO DE RECURSO GET localhost:3333/users/1 && DELETE localhost:3333/users/1  <= o 1 é um route paramenters e é o ID do usuario
// Request Body: informações enviadas pelo formulârio
// 
const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })


    if(route) {
        const routeParams = req.url.match(route.path)


        const { query, ...params } = routeParams.groups

        req.params = params
        req.query = query ? extractQueryParams(query) : {}


        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})