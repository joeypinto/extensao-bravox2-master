import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const NavUser = styled.nav`
  &,
  & > ul {
    width: 100%;
  }
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
`

export const NavList = styled.ul`
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '1rem',
    wrap: 'wrap'
  })}
  margin-bottom: 1rem;
  padding: 0 1.4rem;

  @media (min-width: 767px) {
    margin-bottom: 0rem;
    justify-content: flex-end;
  }
`

export const NavLink = styled.a`
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`
export const NavLoggout = styled.button`
  padding: 0.6rem 1.8rem;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  transition: 0.3s ease-in-out;

  svg {
    margin-left: 1rem;
  }
`
