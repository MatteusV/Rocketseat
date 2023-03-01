import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;

  h1 {
    font-size: 48px;
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ContainerForm = styled.div`
  padding: 1rem;

  form {
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input[type='email'],
    input[type='password'] {
      padding: 5px 5px;
      border: 0;
      background-color: ${(props) => props.theme['base-input']};

      &:focus {
        border-radius: 8px;
        color: ${(props) => props.theme.yellow};
      }
    }

    input[type='submit'] {
      border: none;
      border-radius: 8px;
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      padding: 5px 0px;

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
