import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const FiltersPrimaryWrapper = styled.div`
  width: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &.is__visible {
    width: 100%;
    height: auto;
    visibility: visible;
    opacity: 1;
  }
`

export const FiltersHeader = styled.header`
  width: 100%;
  ${Flex({
    justifyContent: 'flex-end'
  })}
  padding: 1.2rem 1.8rem;

  button {
    border: none;
    background-color: transparent;
  }
`

export const FilterWrapperContent = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    justifyContent: 'space-between'
  })}
  padding: 0.6rem 1.8rem 1.4rem;
`

export const FilterWrapperForm = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start'
  })}
`

export const FilterWrapperFields = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    justifyContent: 'space-between'
  })}
  margin-bottom: 2rem;
`

export const DivisorWrapper = styled.b`
  margin-bottom: 1.6rem;
  font-size: 2rem;
`

export const FilterInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0;
`

export const FilterSelect = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: ${(props) => props.theme.colors.white};
`

export const FilterLabel = styled.label`
  width: 100%;
  margin-bottom: 0.4rem;
  text-align: left;
  font-weight: 700;
  font-size: 1.4rem;
`

export const FilterListDistance = styled.ul`
  width: 100%;
  ${Flex({
    justifyContent: 'flex-start',
    wrap: 'wrap'
  })}

  li {
    margin-right: 1rem;
  }
`

export const FilterButtonForm = styled.button`
  height: 4rem;
  ${Flex({})}
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.grays.light};

  &.is__rounded {
    width: 4rem;
    border-radius: 50%;
  }

  &:hover,
  &.is__active {
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.primary};
  }
`

export const FilterButtonSubmit = styled.button`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
`
