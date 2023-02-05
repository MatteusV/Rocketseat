import Imagem from '../../assets/Imagem.svg'
import { Coffee } from './components/coffees'
import { IconsSVG } from './components/iconsSVG'

import { ContentText, Main, Section } from './styles'

export function Home() {
  return (
    <>
      <Section>
        <ContentText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <IconsSVG />
        </ContentText>
        <div>
          <img src={Imagem} alt="" />
        </div>
      </Section>

      <Main>
        <h1>Nossos cafés</h1>

        <Coffee />
      </Main>
    </>
  )
}
