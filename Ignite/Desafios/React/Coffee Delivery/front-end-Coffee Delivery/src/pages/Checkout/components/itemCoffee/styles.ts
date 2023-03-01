import styled from 'styled-components'

export const Item = styled.div`
  width: 23rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    width: 10.6875rem;
    height: 4rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      font-size: 16px;
      width: 100%;
    }
  }
`
export const DivForm = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5rem;

  input[type='number'] {
    background: ${(props) => props.theme['base-input']};
    border: 0;

    font-weight: 100;
    font-size: 0.8rem;
    font-family: 'Roboto', sans-serif;

    width: 1rem;
    height: 1rem;

    -moz-appearance: textfield;

    &:hover {
      cursor: default;
    }
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['base-button']};
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 2px;

    background: ${(props) => props.theme['base-button']};

    border-radius: 8px;

    button {
      color: ${(props) => props.theme['purple-dark']};
      &:hover {
        cursor: pointer;
      }
    }
  }

  button[type='submit'] {
    padding: 6px 15px;
    border-radius: 8px;

    gap: 0.5rem;

    font-size: 0.5rem;

    img {
      width: 1rem;
      height: 1rem;
    }
    &:hover {
      cursor: pointer;

      background: ${(props) => props.theme['base-hover']};
    }
  }
`
export const Line = styled.div`
  width: 70%;
  border: 0.5px solid ${(props) => props.theme['base-hover']};
`
