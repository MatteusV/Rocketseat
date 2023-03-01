import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

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

export function Coffee(props: CoffeeProps) {
  const [amount, setAmount] = useState<number>(1)
  const [price, setPrice] = useState<number>(props.price)

  function moreAmountOfCoffee() {
    if (amount >= 10) {
      return alert('10 é o máximo de café')
    } else {
      setAmount((state) => amount + 1)
      setPrice((state) => price + props.price)
    }
  }

  function lessAmountOfCoffee() {
    if (amount === 1) {
      return alert('1 é o minimo de café')
    } else {
      setAmount((state) => amount - 1)
      setPrice((state) => price - props.price)
    }
  }

  async function handleAddCoffeeToCart() {
    // eslint-disable-next-line camelcase
    const user_id = localStorage.getItem('id_user')
    // eslint-disable-next-line camelcase
    const coffee_id = props.id
    const name = props.name
    const img_path = props.img_path

    await api.post('/cart', {
      // eslint-disable-next-line camelcase
      user_id,
      // eslint-disable-next-line camelcase
      coffee_id,
      name,
      price,
      amount,
      img_path,
    })
  }

  return (
    <Container>
      <ContainerCoffee>
        <Img src={props.img_path} />
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

            <p>{amount}</p>

            <button onClick={moreAmountOfCoffee}>
              <Plus size={14} />
            </button>
          </div>
          <button type="button" onClick={handleAddCoffeeToCart}>
            <img src={shoppingSimpleCart} alt="" />
          </button>
        </div>
      </ContainerCoffee>
    </Container>
  )
}
