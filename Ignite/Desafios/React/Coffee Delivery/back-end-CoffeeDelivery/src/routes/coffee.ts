import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function coffeeRoutes(app: FastifyInstance) {
  app.get('/coffee', async (req, res) => {
    const coffee = await knex.select('*').from('coffee')
    return coffee
  })
}
