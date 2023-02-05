import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3.375rem;
`

export const ContainerCoffee = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-align: center;

  div {
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;

    p {
      color: ${(props) => props.theme['base-title']};
      font-weight: 600;
      font-size: 20px;
      font-family: 'Baloo 2', cursive;

      span {
        font-size: 13px;
        color: ${(props) => props.theme['base-text']};
        margin-right: 0.2rem;
      }
    }

    div {
      width: 40%;

      p {
        color: ${(props) => props.theme['base-text']};
        font-weight: normal;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
      }

      button {
        border: none;
        color: ${(props) => props.theme['purple-dark']};
        background: transparent;

        cursor: pointer;

        &:active {
          border: black;
        }
      }
    }

    button {
      background: ${(props) => props.theme['purple-dark']};
      color: white;
      border-radius: 8px;
      width: 30px;
      height: 30px;

      cursor: pointer;
    }
  }
`

export const Img = styled.img`
  width: 7.5rem;
  margin-top: -1rem;
`
export const Title = styled.p`
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  padding: 0.1rem 1rem;
  border-radius: 100px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
`

export const Text = styled.p`
  color: ${(props) => props.theme['base-label']};
`
