import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  @media (min-width: 768px) {
    max-width: 15rem;
  }
`
