import { Container } from './styles'

export function Finished() {
  return (
    <Container>
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
    </Container>
  )
}
