import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100vw;
  padding: 2rem 10rem;
  background: ${(props) => props.theme.white};

  display: flex;
  justify-content: space-between;

  nav {
    width: 15%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const BaseLinks = styled.a`
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Cart = styled(BaseLinks)`
  border-radius: 10px;
  background: ${(props) => props.theme['yellow-light']};
`

export const Location = styled(BaseLinks)`
  background: ${(props) => props.theme['purple-light']};
`
