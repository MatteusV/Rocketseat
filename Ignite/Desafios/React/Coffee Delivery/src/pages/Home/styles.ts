import styled from 'styled-components'

export const Section = styled.div`
  width: 100%;
  padding: 0rem 10rem;
  margin-top: 5rem;

  display: flex;
  flex-direction: row;
`
export const ContentText = styled.div`
  padding-left: 6rem;
  padding-right: 6rem;

  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 48px;
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Main = styled.main`
  padding: 0% 10rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;

    font-weight: bold;
  }
`
