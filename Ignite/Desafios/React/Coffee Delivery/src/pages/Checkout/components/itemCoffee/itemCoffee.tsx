import { Minus, Plus } from 'phosphor-react'
import { DivForm, Item, Line } from './styles'

import Trash from '../../../../assets/Trash.svg'
// import { useState } from 'react'
import { CoffeeCartProps } from '../../../../contexts/coffeeContext'
import { api } from '../../../../lib/axios'
import { useForm } from 'react-hook-form'

export function ItemCoffee(props: CoffeeCartProps) {
  const { handleSubmit } = useForm()
  // const [amount, setAmount] = useState<number>(props.amount)
  // const [price, setPrice] = useState<number>(props.price)

  async function handleRemoveCoffeeToCart() {
    await api.delete(`cart/${props.id}`)
  }

  function moreAmountOfCoffee() {
    // setAmount((state) => state + 1)
    // setPrice((state) => state + props.price)
  }

  function lessAmountOfCoffee() {
    // setAmount((state) => state - 1)
    // setPrice((state) => state - props.price)
  }

  return (
    <>
      <Item>
        <img src={props.img} />
        <div>
          <p>{props.name}</p>
          <form onSubmit={handleSubmit(handleRemoveCoffeeToCart)} action="">
            <DivForm>
              <div>
                <button type="button" onClick={lessAmountOfCoffee}>
                  <Minus size={14} />
                </button>

                <input type="number" min={1} value={props.amount} />

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
        <p>R$ {props.price}</p>
      </Item>
      <Line></Line>
    </>
  )
}
