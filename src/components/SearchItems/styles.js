import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const SearchWrapper = styled.div`
  width: 100%;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  margin: 2rem auto;
`

export const SearchContent = styled.div`
  width: 100%;
  max-width: 80rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  margin: 0 auto;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius6};
  overflow: hidden;
  box-shadow: 0px 0px 10px -5px #000;
  background-color: ${(props) => props.theme.colors.grays.light};

  @media (min-width: 767px) {
    width: 100%;
    max-width: 90rem;
  }
`

export const SearchInput = styled.input`
  width: 94%;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 0;
  background-color: transparent;

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.grays.dark};
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.2);
  }
`

export const SearchButton = styled.button`
  height: 100%;
  width: 6%;
  min-width: 4rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  padding: 1rem;
  border-radius: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.primary};
  }
`
