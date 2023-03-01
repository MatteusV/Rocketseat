import { Coffee } from './components/coffees'
import { IconsSVG } from './components/iconsSVG'

import { Container, ContentText, Main, Section } from './styles'

import Imagem from '../../assets/Imagem.svg'

import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/coffeeContext'

export function Home() {
  const { coffees } = useContext(CoffeeContext)

  const id = localStorage.getItem('id_user')

  if (!id) {
    alert('Login necessário')
    window.location.href = 'http://localhost:5173/login'
  } else {
    return (
      <>
        <Section>
          <ContentText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <IconsSVG />
          </ContentText>
          <div>
            <img src={Imagem} alt="" />
          </div>
        </Section>

        <Main>
          <h1>Nossos cafés</h1>
          <Container>
            {coffees.map((coffee) => {
              return (
                <Coffee
                  key={coffee.id}
                  id={coffee.id}
                  name={coffee.name}
                  price={coffee.price}
                  img_path={coffee.img_path}
                  title={coffee.title}
                  subtitle={coffee.subtitle}
                  subtitle2={coffee.subtitle2}
                  text={coffee.text}
                />
              )
            })}
          </Container>
        </Main>
      </>
    )
  }
}
