import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

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

export const ContainerFinished = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-family: 'Roboto', sans-serif;
    }

    p {
      font-family: 'Roboto', sans-serif;

      color: ${(props) => props.theme['base-subtitle']};

      span {
        font-family: 'Roboto', sans-serif;

        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    &:last-child {
      h2 {
        color: ${(props) => props.theme['base-title']};
      }

      p {
        color: ${(props) => props.theme['base-title']};
      }

      span {
        color: ${(props) => props.theme['base-title']};
        font-size: 1.2rem;
      }
    }
  }

  button {
    background: ${(props) => props.theme.yellow};
    width: 100%;
    padding: 1rem 0;
    border-radius: 8px;

    color: white;
    font-family: 'Roboto', sans-serif;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`
export const TransactionTypeButton = styled(RadioGroup.Item)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  margin: 1rem 0rem;
  gap: 12px;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  font-size: 13px;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
  &:active,
  :focus {
    border: none;
  }
`
