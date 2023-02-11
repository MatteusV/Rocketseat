import logoCoffee from '../../assets/Logo-coffee.svg'
import IconCart from '../../assets/Cart.svg'
import IconLocation from '../../assets/Location.svg'

import { Cart, HeaderStyled, Location } from './styles'

export function Header() {
  return (
    <HeaderStyled>
      <img src={logoCoffee} />

      <nav>
        <Location href="https://open.spotify.com/playlist/3et6o1K0tToy6U4PM0Hd34">
          <img src={IconLocation} />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart href="/checkout">
          <img src={IconCart} />
        </Cart>
      </nav>
    </HeaderStyled>
  )
}
