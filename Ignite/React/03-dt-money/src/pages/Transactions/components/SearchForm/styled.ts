import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const ButtonSearchTransaction = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: 0;
  padding: 1rem;
  background: transparent;
  color: ${(props) => props.theme['green-300']};
  border: 1px solid ${(props) => props.theme['green-300']};
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};

    transition: 0.5s;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.6;
  }
`
