import logoCoffee from '../../assets/Logo-coffee.svg'
import IconCart from '../../assets/Cart.svg'
import IconLocation from '../../assets/Location.svg'

import { Cart, HeaderStyled, Location } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/coffeeContext'

export function Header() {
  const { address } = useContext(CoffeeContext)
  const city = address.city
  const uf = address.uf

  return (
    <HeaderStyled>
      <a href="http://localhost:5173/">
        <img src={logoCoffee} alt="" />
      </a>

      <nav>
        <Location href="https://open.spotify.com/playlist/3et6o1K0tToy6U4PM0Hd34">
          <img src={IconLocation} />
          <span>
            {city}, {uf}
          </span>
        </Location>
        <Cart href="/checkout">
          <img src={IconCart} />
        </Cart>
      </nav>
    </HeaderStyled>
  )
}
