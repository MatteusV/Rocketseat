import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { knex } from '../database'

export async function addressRoutes(app: FastifyInstance) {
  app.get('/address/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = req.params
    if (!id) {
      res.send({ message: 'id não encontrado' })
    }
    const address = await knex
      .select('*')
      .where('user_id', id)
      .from('finished')
      .first()
    res.send(address)
  })
}
