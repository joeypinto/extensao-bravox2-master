import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const LoadingWrapper = styled.main`
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
`

export const CircleWrapper = styled.div`
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;

  & > div:nth-child(1) {
    animation-duration: 1s;
    animation-delay: 0;
  }

  & > div:nth-child(2) {
    animation-duration: 1s;
    animation-delay: 0.12s;
  }

  & > div:nth-child(3) {
    animation-duration: 1s;
    animation-delay: 0.24s;
  }
`

export const CircleAnimation = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 0.6rem;

  animation-fill-mode: both;
  animation-name: loadingCircles;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes loadingCircles {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    16% {
      transform: scale(0.1);
      opacity: 0.7;
    }
    33% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export const LoadingImageContainer = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
`

export const LoadingTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3.8rem;
  margin-top: 1rem;
`
