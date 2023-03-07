import { Container, Img, Main } from './styles'
import Location from '../../assets/LocationBackgroundPurple.svg'
import Timer from '../../assets/TimerBackgroundYellow.svg'
import Money from '../../assets/MoneyBackgroundYellowDark.svg'
import Illustration from '../../assets/img/Illustration.png'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../contexts/coffeeContext'

export function CheckoutFilled() {
  const { address } = useContext(CoffeeContext)

  let type
  switch (address.type) {
    case 'credit card':
      type = 'Cartão de Crédito'
      break

    case 'debit card':
      type = 'Cartão de Débito'
      break

    case 'money':
      type = 'Dinheiro'
      break
    default:
      break
  }
  const city = address.city
  const road = address.road
  const number = address.number
  const neighbohood = address.neighbohood
  const uf = address.uf

  const date = new Date()
  const hora = date.toLocaleTimeString()
  function exitPage() {
    window.location.href = 'http://localhost:5173/'
  }
  setTimeout(exitPage, 600000)

  return (
    <Main>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Container>
        <div>
          <img src={Location} alt="" />
          <div>
            <p>
              Entrega em{' '}
              <span>
                {road}, {number}
              </span>
            </p>
            <p>
              {neighbohood} - {city}, {uf}
            </p>
          </div>
        </div>
        <div>
          <img src={Timer} alt="" />
          <div>
            <p>Previsão de entrega</p>
            <span>20 min - 30 min</span>
          </div>
        </div>
        <div>
          <img src={Money} alt="" />
          <div>
            <p>Pagamento na entrega</p>
            <span>{type}</span>
          </div>
        </div>
      </Container>

      <Img src={Illustration} alt="" />
    </Main>
  )
}
