import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const NavTechnicalWrapper = styled.nav`
  width: 100%;
  ${Flex({})}

  @media(min-width: 767px) {
    margin-right: 0.6rem;
  }
`

export const NavListMenu = styled.ul`
  width: 100%;
  ${Flex({
    justifyContent: 'center'
  })}
`

export const MenuItem = styled.li`
  padding: 0.4rem;
  margin: 0.4rem;
`

export const MenuLink = styled.a`
  width: 100%;
  ${Flex({})}
  color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`
export const LogoutAccount = styled.button`
  width: 100%;
  ${Flex({})}
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
`
