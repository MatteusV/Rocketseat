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
  border-radius: 0px 25px 0px 25px;

  text-align: center;

  div {
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;

    div {
      width: 40%;

      p {
        color: ${(props) => props.theme['base-text']};
        font-weight: normal;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
      }

      button {
        border: none;
        color: ${(props) => props.theme['purple-dark']};
        background: transparent;

        cursor: pointer;
        margin: 0 1rem;
      }
    }

    button {
      background: ${(props) => props.theme['purple-dark']};
      color: white;
      border-radius: 8px;
      width: 35px;
      height: 35px;

      cursor: pointer;
    }

    input[type='number'] {
      background: transparent !important;
      border: none !important;

      color: ${(props) => props.theme['base-text']};
      font-weight: normal;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;

      width: 1rem;

      -moz-appearance: textfield;
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const Img = styled.img`
  width: 7.5rem;
  margin-top: -1rem;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;

  text-transform: uppercase;

  padding: 0.1rem 0.8rem;
  border-radius: 100px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const Name = styled.p`
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  font-size: 1.2rem;

  color: ${(props) => props.theme['base-title']};
`

export const Text = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-family: 'Roboto', sans-serif;
`

export const PriceText = styled.p`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 130%;

  span {
    font-size: 0.8125rem;
    color: ${(props) => props.theme['base-text']};
    margin-right: 0.2rem;
  }
`
