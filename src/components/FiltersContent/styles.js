import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const FiltersWrapper = styled.section`
  width: 100%;
  max-width: 30rem;
  max-height: 0;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 13rem;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: 0.3s ease-in-out;

  &.is__open {
    max-height: 52rem;
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 600px) {
    max-width: 43rem;
    max-height: 60rem;
    margin: 0;
    left: 7vw;
    top: 3rem;
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 1024px) {
    min-height: 100%;
    left: 4vw;
  }
`

export const FiltersWrapperTitle = styled.h1`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius8};
  text-align: center;
  font-size: 2.5em;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`

export const FilterWrapperContent = styled.div`
  width: 100%;
  max-height: 45rem;
  min-height: 20rem;
  ${Flex({
    direction: 'column',
    justifyContent: 'flex-start'
  })}
  margin-top: 1rem;
  overflow: hidden;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius8};
  box-shadow: 0 0 13px 3px rgb(0 0 0 / 20%);
  background-color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease-in-out;
`
