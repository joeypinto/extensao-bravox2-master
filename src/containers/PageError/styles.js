import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  ${Flex({})}
`

export const ImageContent = styled.div`
  width: 100%;
  height: 100vh;
  ${Flex({
    justifyContent: 'center',
    alignItems: 'flex-start'
  })}
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.black};

  @media (min-width: 767px) {
    width: 50%;
    ${Flex({})}
  }
`

export const Title = styled.h1`
  font-size: 10rem;
  color: ${(props) => props.theme.colors.primary};
  @media (min-width: 767px) {
    font-size: 15rem;
  }
`

export const ContentInfo = styled.div`
  width: 100%;
  height: 100vh;
  ${Flex({
    direction: 'column',
    gridGap: '1rem'
  })}
  padding: 2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (min-width: 767px) {
    position: static;
    width: 50%;
    ${Flex({
      direction: 'column',
      alignItems: 'flex-start',
      gridGap: '1rem'
    })}
  }
`
export const TitleInfo = styled.h2`
  width: 100%;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 767px) {
    text-align: left;
    color: ${(props) => props.theme.colors.font};
  }
`

export const BodyInfo = styled.p`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 767px) {
    text-align: left;
    color: ${(props) => props.theme.colors.font};
  }
`

export const LinkReturn = styled.a`
  min-width: 12rem;
  ${Flex({})}
  padding: 1rem;
  border-radius: 0.6rem;
  font-weight: 700;
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
  }
`
