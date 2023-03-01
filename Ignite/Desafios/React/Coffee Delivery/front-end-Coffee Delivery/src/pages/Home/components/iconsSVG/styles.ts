import styled from 'styled-components'

export const ContainerSVG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  margin-top: 2rem;

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1rem;
`

export const ContainerSVGandText = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
`

const IconSVG = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledShoppingCart = styled(IconSVG)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const StyledIconBox = styled(IconSVG)`
  background: ${(props) => props.theme['base-subtitle']};
`
export const StyledTimer = styled(IconSVG)`
  background: ${(props) => props.theme.yellow};
`
export const StyledCup = styled(IconSVG)`
  background: ${(props) => props.theme.purple};
`
