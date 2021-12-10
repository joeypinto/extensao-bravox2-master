import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const DialogLGPD = styled.div`
  width: 100%;
  height: 100vh;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);

  &.is_visible {
    ${Flex({
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    })}
  }
`

export const WrapperModalLGPD = styled.div`
  width: 100%;
  max-width: 38rem;
  min-height: 10rem;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  padding-top: 1.4rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease-in-out;

  svg {
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: 381px) {
    border-radius: ${(props) => props.theme.sizes.borders.borderRadius6};
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.4);
  }
`

export const HeaderModalLGPD = styled.header`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1.4rem;

  .header__title {
    width: 100%;
    text-align: center;
    font-weight: 700;
  }
`

export const ContentModalLGPD = styled.p`
  padding: 0 1.4rem;
  margin-bottom: 0.8rem;
  text-align: center;
`

export const ContentButtonLGPD = styled.div`
  width: 100%;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    wrap: 'wrap'
  })}

  @media (min-width: 767px) {
    flex-wrap: nowrap;
  }
`

export const ButtonModalLGPD = styled.button`
  width: 100%;
  min-width: 6rem;
  min-height: 6rem;
  padding: 0.8rem 1rem;
  font-weight: 700;
  border-radius: 0;
  opacity: 0.9;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};
  }

  &:active,
  &:focus {
    box-shadow: none;
  }

  @media (min-width: 767px) {
    width: 50%;
  }
`
