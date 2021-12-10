import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const MenuWrapper = styled.div`
  width: 100%;
  max-width: 90%;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  })}

  position: relative;
  box-shadow: 0px 0px 10px -5px #000;

  @media (min-width: 767px) {
    max-width: 26rem;
  }
`
export const ButtonToogleMenu = styled.button`
  width: 4rem;
  height: 4rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  position: absolute;
  padding: 1rem;
  border-radius: 50%;
  left: 0;
  top: -4rem;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: 767px) {
    display: none;
  }
`

export const TitleMenu = styled.h2`
  width: 100%;
  display: none;
  margin-top: 1.4rem;
  padding: 1rem 1.6rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 2.2rem;

  &.is__open {
    display: block;
  }

  @media (min-width: 767px) {
    display: block;
    margin-top: 0;
    cursor: default;
  }
`

export const NavWrapper = styled.nav`
  width: 100%;
  height: 0;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  background-color: ${(props) => props.theme.colors.grays.light};
  transition: 0.3s ease-in-out;

  &.is__open {
    height: 100%;
    padding: 1.4rem 0 1rem;
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 767px) {
    height: 100%;
    min-height: 40rem;
    padding: 1.4rem 0 1rem;
    opacity: 1;
    visibility: visible;
  }
`

export const ListItems = styled.ul`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  })}

  .menuItem {
    &,
    .menuItem__link {
      width: 100%;
      ${Flex({
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      })}
      text-align: center;
    }

    margin-bottom: 0.5rem;

    .menuItem__link {
      padding: 1.6rem 1rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.secondary};
      transition: 0.3s ease-in-out;

      &.is__active {
        background-color: ${(props) => props.theme.colors.primary};
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`
