import { Minus, Plus } from 'phosphor-react'
import expressoTradicional from '../../../../assets/img/expressoTradicional.png'
import shoppingSimpleCart from '../../../../assets/cartSimple.svg'
import {
  ContainerCoffee,
  Container,
  Img,
  Subtitle,
  Text,
  Title,
} from './styles'

export function Coffee() {
  return (
    <Container>
      <ContainerCoffee>
        <Img src={expressoTradicional} alt="" />
        <Title>Tradicional</Title>
        <Subtitle>Expresso tradicional</Subtitle>
        <Text>O tradicional café feito com água quente e grãos moídos</Text>
        <div>
          <p>
            <span>R$</span>9,90
          </p>
          <div>
            <button>
              <Minus size={14} />
            </button>
            <p>1</p>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <button>
            <img src={shoppingSimpleCart} alt="" />
          </button>
        </div>
      </ContainerCoffee>
    </Container>
  )
}
