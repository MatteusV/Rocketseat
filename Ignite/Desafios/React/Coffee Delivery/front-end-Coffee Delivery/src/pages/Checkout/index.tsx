import {
  Address,
  Coffee,
  Container,
  ContainerCoffee,
  ContainerFinished,
  Main,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import LocationYellow from '../../assets/LocationYellow.svg'
import CreditCard from '../../assets/CreditCard.svg'
import DebitCard from '../../assets/DebitCard.svg'
import Money from '../../assets/Money.svg'

import { ItemCoffee } from './components/itemCoffee/itemCoffee'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/coffeeContext'
import { api } from '../../lib/axios'
import { Controller, useForm } from 'react-hook-form'

interface SchemaInput {
  zipCode: string
  road: string
  number: number
  complement: string
  neighborhood: string
  city: string
  uf: string
  type: 'credit card' | 'debit card' | 'money'
}

export function Checkout() {
  const { coffeesCart } = useContext(CoffeeContext)
  const [sumPrice, setSumPrice] = useState<number>(0)

  const { register, handleSubmit, control } = useForm()

  const user_id = localStorage.getItem('id_user')

  let frete = 3
  if (sumPrice === 0) {
    frete = 0
  }
  const total = sumPrice + frete

  async function loadSumPrice() {
    const response = await api.get('/cart/sum')

    if (response.data[0].price === null) {
      setSumPrice(0)
    } else {
      setSumPrice(parseInt(response.data[0].price))
    }
  }

  useEffect(() => {
    loadSumPrice()
  }, [])

  async function handleSubmitForm(data: SchemaInput) {
    console.log(data)
    const { road, zipCode, city, complement, neighborhood, number, type, uf } =
      data
    await api
      .post('/cart/finished', {
        road,
        zipCode,
        city,
        complement,
        neighborhood,
        number,
        type,
        uf,
        user_id,
      })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = 'http://localhost:5173/checkoutFilled'
        }
      })
  }

  return (
    <Main>
      <Container>
        <h2>Complete seu pedido</h2>
        <div>
          <Address>
            <img src={LocationYellow} alt="" />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Address>

          <form
            name="address"
            onSubmit={handleSubmit(handleSubmitForm)}
            id="address"
          >
            <div>
              <input
                {...register('zipCode')}
                type="number"
                name="zipCode"
                id="zipCode"
                placeholder="cep"
              />
            </div>

            <div>
              <input
                {...register('road')}
                type="text"
                name="road"
                id="road"
                placeholder="Rua"
              />
            </div>

            <div>
              <input
                {...register('number')}
                type="number"
                name="number"
                id="number"
                placeholder="Número"
              />
              <input
                {...register('complement')}
                type="text"
                name="complement"
                id="complement"
                placeholder="Complemento                                       Opcional"
              />
            </div>

            <div>
              <input
                {...register('neighborhood')}
                type="text"
                name="neighborhood"
                id="neighborhood"
                placeholder="Bairro"
              />
              <input
                {...register('city')}
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
              />

              <input
                {...register('uf')}
                type="text"
                name="uf"
                id="uf"
                placeholder="UF"
              />
            </div>
            {coffeesCart.length > 0 ? (
              <Controller
                control={control}
                name="type"
                render={({ field }) => {
                  return (
                    <TransactionType
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <TransactionTypeButton value="credit card">
                        <img src={CreditCard} alt="" /> CARTÃO DE CRÉDITO
                      </TransactionTypeButton>

                      <TransactionTypeButton value="debit card">
                        <img src={DebitCard} alt="" /> CARTÃO DE DÉBITO
                      </TransactionTypeButton>
                      <TransactionTypeButton value="money">
                        <img src={Money} alt="" /> DINHEIRO
                      </TransactionTypeButton>
                    </TransactionType>
                  )
                }}
              />
            ) : (
              ''
            )}
          </form>
        </div>
      </Container>

      <ContainerCoffee>
        <h2>Cafés selecionados</h2>
        <Coffee>
          {coffeesCart.map((coffee) => {
            return (
              <ItemCoffee
                key={coffee.coffee_id}
                coffee_id={coffee.coffee_id}
                user_id={coffee.user_id}
                name={coffee.name}
                amount={coffee.amount}
                price={coffee.price}
                img_path={coffee.img_path}
              />
            )
          })}

          <ContainerFinished>
            <div>
              <p>Total de itens</p>
              <p>
                R$ <span>{sumPrice}</span>
              </p>
            </div>

            <div>
              <p>Entrega</p>
              <p>
                R$ <span>{frete}</span>
              </p>
            </div>

            <div>
              <h2>Total</h2>
              <p>
                R$ <span>{total}</span>
              </p>
            </div>

            <button type="submit" form="address">
              CONFIRMAR PEDIDO
            </button>
          </ContainerFinished>
        </Coffee>
      </ContainerCoffee>
    </Main>
  )
}
