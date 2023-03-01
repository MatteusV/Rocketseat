import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { knex } from '../database'

export async function cartRoutes(app: FastifyInstance) {
  app.get('/cart', async (req: FastifyRequest, res: FastifyReply) => {
    const cart = await knex.select('*').from('cart')
    return cart
  })

  app.get('/cart/sum', async (req: FastifyRequest, res: FastifyReply) => {
    const sumPriceCoffee: number = await knex('cart').select(
      knex.raw('sum(price) as price'),
    )
    res.send(sumPriceCoffee)
  })

  app.post('/cart', async (req: FastifyRequest, res: FastifyReply) => {
    // eslint-disable-next-line
    const { user_id, coffee_id, name, price, amount, img_path } = req.body

    await knex
      .insert({
        // eslint-disable-next-line
        user_id,
        // eslint-disable-next-line
        coffee_id,
        name,
        amount,
        price,
        // eslint-disable-next-line
        img_path,
      })
      .into('cart')
      .then((response) => {
        res.status(201)
      })
      .catch((error) => {
        console.log(error)
        res.send(error)
      })
  })

  app.delete('/cart/:id', async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = req.params
    if (!id) {
      res.status(422)
    }

    await knex('cart').where('coffee_id', id).del()
  })
}
