import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  height: 100%;
  padding: 4rem 10rem;

  display: flex;
  flex-direction: column;

  > h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Container = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  width: 32.875rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid;
  border: 1px solid transparent;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      margin-left: 1rem;

      span {
        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`

export const Img = styled.img`
  position: absolute;
  width: 492px;
  height: 293px;
  left: calc(50% - 492px / 2 + 314px);
  top: 254px;
`
