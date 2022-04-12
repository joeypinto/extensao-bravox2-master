import styled from 'styled-components'

export const FilterCurrencyItem = styled.li`
  margin-right: 0.8rem;
`
export const FilterCurrencyButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  border: 2px solid ${(props) => props.theme.colors.black};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.primary};

  svg {
    margin-left: 1rem;
  }
`
