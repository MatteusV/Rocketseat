import { FastifyInstance } from 'fastify'

import { knex } from '../database'

export async function loginRoutes(app: FastifyInstance) {
  app.post('/login', async (req, res) => {
    const { email, password } = req.body

    await knex
      .select('*')
      .from('user')
      .where('email', email)
      .andWhere('password', password)
      .then((response) => {
        if (response) {
          const session = req.cookies.session

          if (!session) {
            res.cookie('session', email, {
              path: '/',
              maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            })
          }

          res.status(200).send(response)
        } else {
          res.status(203).send({ message: 'error' })
        }
      })
  })
}
