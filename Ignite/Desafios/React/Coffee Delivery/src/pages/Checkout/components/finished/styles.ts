import styled from 'styled-components'

export const Container = styled.div`
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
