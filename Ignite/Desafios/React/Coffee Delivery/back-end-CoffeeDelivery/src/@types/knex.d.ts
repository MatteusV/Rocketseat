// eslint-disable-next-line
import { knex } from 'knex'

declare module 'knex/types/table' {
  export interface Tables {
    cart: {
      user_id: number
      coffe_id: number
      name: string
      amount: number
      price: number
    }

    coffee: {
      id: number
      name: string
      title: string
      subtitle: string
      subtitle2: string
      text: string
      price: number
      img_path: string
      created_time: Date
    }

    user: {
      id: number
      username: string
      email: string
      password: string
      create_time: Date
    }

    address: {
      id: number
      road: string
      ZipCode: string
      number: number
      complement: string
      neighborhood: string
      city: string
      uf: string
      user_id: number
    }
  }
}
