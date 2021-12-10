import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 0.8rem;
  margin: 0 auto;
`

export const FooterTop = styled.ul`
  width: 100%;
  ${Flex({
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    wrap: 'wrap'
  })}
  padding: 4em 2rem 1rem;

  @media (min-width: 767px) {
    padding: 4em 0 1rem;
  }
`

export const FooterBottom = styled.ul`
  width: 100%;
  ${Flex({
    direction: 'column',
    justifyContent: 'space-between'
  })}
  padding: 1.5rem 0 1rem;
  border-top: 2px solid ${(props) => props.theme.colors.grays.dark};

  @media (min-width: 767px) {
    flex-direction: row;
    padding: 1.5rem 0 1rem;
  }
`
