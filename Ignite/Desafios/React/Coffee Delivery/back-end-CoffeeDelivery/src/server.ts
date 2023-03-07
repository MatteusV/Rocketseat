import fastify from 'fastify'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'
import { fastifySession } from '@fastify/session'

import { cartRoutes } from './routes/cart'
import { loginRoutes } from './routes/login'
import { coffeeRoutes } from './routes/coffee'
import { addressRoutes } from './routes/address'

const app = fastify()

app.register(cookie)
app.register(fastifySession, {
  secret: 'aspidjnasojdhbasodhasodhasoudshadoahdoa',
})

app.register(cors, {
  origin: true,
})

app.register(coffeeRoutes)
app.register(cartRoutes)
app.register(loginRoutes)
app.register(addressRoutes)

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server is running')
  })
