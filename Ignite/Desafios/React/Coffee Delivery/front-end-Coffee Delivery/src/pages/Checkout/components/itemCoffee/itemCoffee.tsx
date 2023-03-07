import { Minus, Plus } from 'phosphor-react'
import { DivForm, Item, Line } from './styles'

import Trash from '../../../../assets/Trash.svg'
// import { useState } from 'react'
import { CoffeeCartProps } from '../../../../contexts/coffeeContext'
import { api } from '../../../../lib/axios'
import { useState } from 'react'

export function ItemCoffee(props: CoffeeCartProps) {
  const [amount, setAmount] = useState<number>(props.amount)
  const [price, setPrice] = useState<number>(props.price)

  async function handleRemoveCoffeeToCart() {
    await api.delete(`cart/${props.coffee_id}`)
  }

  function moreAmountOfCoffee() {
    setAmount((state) => state + 1)
    setPrice((state) => state + props.price)
  }

  function lessAmountOfCoffee() {
    setAmount((state) => state - 1)
    setPrice((state) => state - 10)
  }
  return (
    <>
      <Item>
        <img src={props.img_path} alt="" />
        <div>
          <p>{props.name}</p>
          <form action="">
            <DivForm>
              <div>
                <button type="button" onClick={lessAmountOfCoffee}>
                  <Minus size={14} />
                </button>

                <input type="number" readOnly min={1} value={amount} />

                <button type="button" onClick={moreAmountOfCoffee}>
                  <Plus size={14} />
                </button>
              </div>

              <button onClick={handleRemoveCoffeeToCart} type="submit">
                <img src={Trash} alt="" />
                REMOVER
              </button>
            </DivForm>
          </form>
        </div>
        <p>R$ {price}</p>
      </Item>
      <Line></Line>
    </>
  )
}
