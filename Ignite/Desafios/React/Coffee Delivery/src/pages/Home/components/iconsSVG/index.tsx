import Box from '../../../../assets/box.svg'
import shoppingCart from '../../../../assets/shoppingCart.svg'
import Timer from '../../../../assets/Timer.svg'
import Cup from '../../../../assets/Cup.svg'

import {
  StyledShoppingCart,
  StyledIconBox,
  StyledTimer,
  StyledCup,
  ContainerSVG,
  ContainerSVGandText,
  Container,
} from './styles'

export function IconsSVG() {
  return (
    <ContainerSVG>
      <Container>
        <ContainerSVGandText>
          <StyledShoppingCart>
            <img src={shoppingCart} alt="" />
          </StyledShoppingCart>
          <p>Compra simples e segura</p>
        </ContainerSVGandText>

        <ContainerSVGandText>
          <StyledIconBox>
            <img src={Box} alt="" />
          </StyledIconBox>
          <p>Embalagem mantém o café intacto</p>
        </ContainerSVGandText>
      </Container>

      <Container>
        <ContainerSVGandText>
          <StyledTimer>
            <img src={Timer} alt="" />
          </StyledTimer>
          <p>Compra simples e segura</p>
        </ContainerSVGandText>

        <ContainerSVGandText>
          <StyledCup>
            <img src={Cup} alt="" />
          </StyledCup>
          <p>Compra simples e segura</p>
        </ContainerSVGandText>
      </Container>
    </ContainerSVG>
  )
}
