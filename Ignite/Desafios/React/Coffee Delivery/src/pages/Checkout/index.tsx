import { Address, Coffee, Container, ContainerCoffee, Main } from './styles'
import LocationYellow from '../../assets/LocationYellow.svg'

import { ItemCoffee } from './components/itemCoffee/itemCoffee'
import { Finished } from './components/finished/finished'

export function Checkout() {
  return (
    <Main>
      <Container>
        <h2>Complete seu pedido</h2>
        <div>
          <Address>
            <img src={LocationYellow} alt="" />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Address>

          <form action="">
            <div>
              <input type="number" name="cep" id="cep" placeholder="CEP" />
            </div>

            <div>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Rua"
              />
            </div>

            <div>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Número"
              />
              <input
                type="text"
                name="complement"
                id="complement"
                placeholder="Complemento                                       Opcional"
              />
            </div>

            <div>
              <input
                type="text"
                name="neighborhood"
                id="neighborhood"
                placeholder="Bairro"
              />
              <input type="text" name="city" id="city" placeholder="Cidade" />

              <input type="number" name="uf" id="uf" placeholder="UF" />
            </div>
          </form>
        </div>
      </Container>

      <ContainerCoffee>
        <h2>Cafés selecionados</h2>
        <Coffee>
          <ItemCoffee name="Expresso Tradicional" amount={1} price={10} />
          <ItemCoffee name="Chocolate Quente" amount={2} price={9.9} />

          <Finished />
        </Coffee>
      </ContainerCoffee>
    </Main>
  )
}
