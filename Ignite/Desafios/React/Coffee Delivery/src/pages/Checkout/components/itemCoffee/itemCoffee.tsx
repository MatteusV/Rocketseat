import { Minus, Plus } from 'phosphor-react'
import { DivForm, Item, Line } from './styles'

import ExpressoTradicional from '../../../../assets/img/ExpressoTradicional.png'
import Trash from '../../../../assets/Trash.svg'
import { useState } from 'react'

interface ItemCoffeeProps {
  name: string
  price: number
  amount: number
}

export function ItemCoffee(props: ItemCoffeeProps) {
  const [amount, setAmount] = useState<number>(props.amount)
  const [price, setPrice] = useState<number>(props.price)

  function moreAmountOfCoffee() {
    setAmount((state) => state + 1)
    setPrice((state) => state + props.price)
  }

  function lessAmountOfCoffee() {
    setAmount((state) => state - 1)
    setPrice((state) => state - props.price)
  }

  return (
    <>
      <Item>
        <img src={ExpressoTradicional} />
        <div>
          <p>{props.name}</p>
          <form action="">
            <DivForm>
              <div>
                <button type="button" onClick={lessAmountOfCoffee}>
                  <Minus size={14} />
                </button>

                <input type="number" min={1} value={amount} />

                <button type="button" onClick={moreAmountOfCoffee}>
                  <Plus size={14} />
                </button>
              </div>

              <button type="submit">
                <img src={Trash} />
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
