import { Coffee } from './components/coffees'
import { IconsSVG } from './components/iconsSVG'

import { Container, ContentText, Main, Section } from './styles'

import Imagem from '../../assets/Imagem.svg'
import ExpressoTradicional from '../../assets/img/ExpressoTradicional.png'
import ExpressoAmericano from '../../assets/img/ExpressoAmericano.png'
import ExpressoCremoso from '../../assets/img/ExpressoCremoso.png'
import ExpressoGelado from '../../assets/img/ExpressoGelado.png'
import CaféComLeite from '../../assets/img/CaféComLeite.png'
import Latte from '../../assets/img/Latte.png'
import Capuccino from '../../assets/img/Capuccino.png'
import Macchiato from '../../assets/img/Macchiato.png'
import Mocaccino from '../../assets/img/Mocaccino.png'
import ChocolateQuente from '../..//assets/img/ChocolateQuente.png'
import Cubano from '../../assets/img/Cubano.png'
import Havaiano from '../../assets/img/Havaiano.png'
import Árabe from '../../assets/img/Árabe.png'
import Irlandês from '../../assets/img/Irlandês.png'

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
        <Container>
          <Coffee
            img={ExpressoTradicional}
            title="TRADICIONAL"
            name="Expresso Tradicional"
            text="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />
          <Coffee
            img={ExpressoAmericano}
            title="TRADICIONAL"
            name="Expresso Americano"
            text="Expresso diluído, menos intenso que o tradicional"
            value={9.9}
          />
          <Coffee
            img={ExpressoCremoso}
            title="TRADICIONAL"
            name="Expresso Cremoso"
            text="Expresso diluído, menos intenso que o tradicional"
            value={9.9}
          />
          <Coffee
            img={ExpressoGelado}
            title="TRADICIONAL"
            subtitle="GELADO"
            name="Expresso Gelado"
            text="Bebida preparada com café expresso e cubos de gelo"
            value={9.9}
          />
          <Coffee
            img={CaféComLeite}
            title="TRADICIONAL"
            subtitle="COM LEITE"
            name="Café com leite"
            text="Meio a meio de expresso tradicional com leite vaporizado"
            value={9.9}
          />
          <Coffee
            img={Latte}
            title="TRADICIONAL"
            subtitle="COM LEITE"
            name="Latte"
            text="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            value={9.9}
          />
          <Coffee
            img={Capuccino}
            title="TRADICIONAL"
            subtitle="COM LEITE"
            name="Capuccino"
            text="Bebida com canela feita de doses iguais de café, leite e espuma"
            value={9.9}
          />
          <Coffee
            img={Macchiato}
            title="TRADICIONAL"
            subtitle="COM LEITE"
            name="Macchiato"
            text="Café expresso misturado com um pouco de leite quente e espuma"
            value={9.9}
          />
          <Coffee
            img={Mocaccino}
            title="TRADICIONAL"
            subtitle="COM LEITE"
            name="Macaccino"
            text="Café expresso com calda de chocolate, pouco leite e espuma"
            value={9.9}
          />
          <Coffee
            img={ChocolateQuente}
            title="ESPECIAL"
            subtitle="COM LEITE"
            name="Chocolate Quente"
            text="Bebida feita com chocolate dissolvido no leite quente e café"
            value={9.9}
          />
          <Coffee
            img={Cubano}
            title="ESPECIAL"
            subtitle="ALCOÓLICO"
            subtitle2="GELADO"
            name="Cubano"
            text="Drink gelado de café expresso com rum, crem de leite e hortelã"
            value={9.9}
          />
          <Coffee
            img={Havaiano}
            title="ESPECIAL"
            name="Havaino"
            text="Bebida adocicada preparada com café e leite de coco"
            value={9.9}
          />
          <Coffee
            img={Árabe}
            title="ESPECIAL"
            name="Árabe"
            text="Bebida preparada com grãos de café árabe e especiarias"
            value={9.9}
          />
          <Coffee
            img={Irlandês}
            title="ESPECIAL"
            subtitle="ALCOÓLICO"
            name="Irlandês"
            text="Expresso diluído, menos intenso que o tradicional"
            value={9.9}
          />
        </Container>
      </Main>
    </>
  )
}
