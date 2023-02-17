import {
  Address,
  Coffee,
  Container,
  ContainerCoffee,
  ContainerFinished,
  Main,
} from './styles'
import LocationYellow from '../../assets/LocationYellow.svg'

import { ItemCoffee } from './components/itemCoffee/itemCoffee'
import { useContext } from 'react'
import {  CoffeeContext } from '../../contexts/coffeeContext'

export function Checkout() {
  const { coffeesCart } = useContext(CoffeeContext)

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
          {coffeesCart.map((coffee) => {
            return (
              <ItemCoffee
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                amount={coffee.amount}
                price={coffee.price}
                img={coffee.img}
              />
            )
          })}

          <ContainerFinished>
            <div>
              <p>Total de itens</p>
              <p>
                R$ <span>29,70</span>
              </p>
            </div>

            <div>
              <p>Entrega</p>
              <p>
                R$ <span>3,50</span>
              </p>
            </div>

            <div>
              <h2>Total</h2>
              <p>
                R$ <span>33,20</span>
              </p>
            </div>

            <button>CONFIRMAR PEDIDO</button>
          </ContainerFinished>
        </Coffee>
      </ContainerCoffee>
    </Main>
  )
}
