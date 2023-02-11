import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  padding: 2rem 10rem;

  display: flex;
  justify-content: center;
`
export const Container = styled.div`
  width: 45rem;
  height: 23.25rem;
  margin-right: 2rem;

  div {
    margin-top: 1rem;
  }

  form {
    background: ${(props) => props.theme['base-card']};
    padding: 0 2.5rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      background: ${(props) => props.theme['base-input']};
      border: 2px solid ${(props) => props.theme['base-button']};

      height: 2.625rem;

      margin: 1rem 1rem;

      &:focus {
        border-radius: 8px;
        color: ${(props) => props.theme.yellow};
      }
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[name='cep'] {
      width: 12.5rem;
    }

    input[name='address'] {
      width: 35rem;
    }

    input[name='number'] {
      width: 12.5rem;
    }

    input[name='complement'] {
      width: 21.75rem;
    }

    input[name='neighborhood'] {
      width: 12.5rem;
    }

    input[name='city'] {
      width: 17.25rem;
    }

    input[name='uf'] {
      width: 3.75rem;
    }
  }
`
export const Address = styled.div`
  padding: 2.5rem 2.5rem;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  gap: 1.2rem;

  div {
    margin-top: 1rem;

    p:first-child {
      font-size: 1.3rem;
      font-weight: 300;

      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p:last-child {
      font-size: 1rem;

      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ContainerCoffee = styled.div`
  width: 28rem;
`

export const Coffee = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 100%;
  height: 100%;
  margin-top: 1rem;

  padding: 2.5rem;

  border-radius: 0px 16px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`
