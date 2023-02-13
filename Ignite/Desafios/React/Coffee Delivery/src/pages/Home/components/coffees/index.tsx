import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'

import shoppingSimpleCart from '../../../../assets/cartSimple.svg'
import { ContainerCoffee, Container, Img, Name, Text, Title } from './styles'

import { CoffeeProps } from '../../../../contexts/coffeeContext'

const addToCartFormSchema = z.object({
  amountCoffee: z.number(),
})

type AddToCartFormInput = z.infer<typeof addToCartFormSchema>

export function Coffee(props: CoffeeProps) {
  const { register, handleSubmit } = useForm<AddToCartFormInput>({
    // resolver: zodResolver(addToCartFormSchema)
  })

  function handleAddToCart(data: AddToCartFormInput) {
    console.log(data)
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
        <Title>{props.title}</Title>
        <Name>{props.name}</Name>
        <Text>{props.text}</Text>
        <div>
          <p>
            <span>R$</span> 
            {price}
          </p>
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
                {...register('amountCoffee')}
                type="number"
                min={1}
                value={amount}
              />
            </form>

            <button  onClick={moreAmountOfCoffee} >
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
