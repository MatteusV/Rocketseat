import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'matteus',
    password: '08053119',
    database: 'CoffeeDelivery',
  },
})
