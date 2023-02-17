import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import shoppingSimpleCart from '../../../../assets/cartSimple.svg'
import {
  ContainerCoffee,
  Container,
  Img,
  Name,
  Text,
  Title,
  ContainerTitles,
  PriceText,
} from './styles'

import { CoffeeProps } from '../../../../contexts/coffeeContext'
import { api } from '../../../../lib/axios'

const addToCartFormSchema = z.object({
  amountCoffee: z.number(),
})

type AddToCartFormInput = z.infer<typeof addToCartFormSchema>

export function Coffee(props: CoffeeProps) {
  const { register, handleSubmit } = useForm<AddToCartFormInput>({
    resolver: zodResolver(addToCartFormSchema),
  })

  async function handleAddToCart(data: AddToCartFormInput) {
    await api.post('cart', {
      name: props.name,
      price: props.price,
      img: props.img,
      amount: data.amountCoffee,
    })
  }

  const [amount, setAmount] = useState<number>(1)
  const [price, setPrice] = useState<number>(9.9)

  function moreAmountOfCoffee() {
    setAmount((state) => (state += 1))
    setPrice((state) => (state += props.price))
  }

  function lessAmountOfCoffee() {
    setAmount((state) => state - 1)
    setPrice((state) => state - props.price)
  }

  return (
    <Container>
      <ContainerCoffee>
        <Img src={props.img} title={props.img} />
        <ContainerTitles>
          <Title>{props.title}</Title>
          {props.subtitle ? <Title>{props.subtitle}</Title> : ''}
          {props.subtitle2 ? <Title>{props.subtitle2}</Title> : ''}
        </ContainerTitles>
        <Name>{props.name}</Name>
        <Text>{props.text}</Text>
        <div>
          <PriceText>
            <span>R$</span>
            {price}
          </PriceText>
          <div>
            <button onClick={lessAmountOfCoffee}>
              <Minus size={14} />
            </button>

            <form
              name="AddCoffee"
              onSubmit={handleSubmit(handleAddToCart)}
              id="AddCoffee"
            >
              <input
                {...register('amountCoffee', { valueAsNumber: true })}
                type="number"
                min={1}
                value={amount}
              />
            </form>

            <button onClick={moreAmountOfCoffee}>
              <Plus size={14} />
            </button>
          </div>
          <button type="submit" form="AddCoffee">
            <img src={shoppingSimpleCart} alt="" />
          </button>
        </div>
      </ContainerCoffee>
    </Container>
  )
}
