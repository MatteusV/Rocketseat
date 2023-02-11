import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

import shoppingSimpleCart from '../../../../assets/cartSimple.svg'

import { ContainerCoffee, Container, Img, Name, Text, Title } from './styles'

interface CoffeeProps {
  title: string
  subtitle?: string
  subtitle2?: string
  name: string
  text: string
  value: number
  img: string
}

export function Coffee(props: CoffeeProps) {
  const [amount, setAmount] = useState<number>(1)
  const [price, setPrice] = useState<number>(props.value)

  function moreAmountOfCoffee() {
    setAmount((state) => state + 1)
    setPrice((state) => state + props.value)
  }

  function lessAmountOfCoffee() {
    setAmount((state) => state - 1)
    setPrice((state) => state - props.value)
  }

  return (
    <Container>
      <ContainerCoffee>
        <Img src={props.img} alt="" />
        <Title>{props.title}</Title>
        <Name>{props.name}</Name>
        <Text>O tradicional café feito com água quente e grãos moídos</Text>
        <div>
          <p>
            <span>R$</span>
            {price}
          </p>
          <div>
            <button onClick={lessAmountOfCoffee}>
              <Minus size={14} />
            </button>

            <form name="AddCoffee" id="AddCoffee">
              <input type="number" min={1} value={amount} />
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
