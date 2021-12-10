import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const FiltersWrapper = styled.ul`
  width: 90%;
  max-width: 32rem;
  ${Flex({
    alignItems: 'center',
    justifyContent: 'flex-start',
    gridGap: '0',
    wrap: 'wrap'
  })}
  position: absolute;
  padding: 1rem 1rem 1rem 0;
  top: 1rem;
  right: 0;
  margin: auto;
  z-index: 1002;

  & > li {
    margin-bottom: 0.4rem;
  }

  @media (min-width: 600px) {
    width: 100%;
    max-width: 50rem;
    margin: 0;
    padding: 1rem;
    top: 3rem;
    left: 0;
    left: calc(3vw + 45rem);
  }

  @media (min-width: 1024px) {
    & > li {
      margin-bottom: 0;
    }
  }
`

export const FilterCurrencyButton = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 1rem;

  @media (min-width: 600px) {
    display: none;
  }
`
export const ButtonMenuInside = styled.button`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.black};
  }
`
