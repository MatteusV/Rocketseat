import logoCoffee from '../../assets/Logo-coffee.svg'
import IconCart from '../../assets/Cart.svg'
import IconLocation from '../../assets/Location.svg'

import { Cart, HeaderStyled, Location } from './styles'

export function Header() {
  return (
    <HeaderStyled>
      <img src={logoCoffee} />

      <nav>
        <Location href="">
          <img src={IconLocation} />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart href="">
          <img src={IconCart} />
        </Cart>
      </nav>
    </HeaderStyled>
  )
}
