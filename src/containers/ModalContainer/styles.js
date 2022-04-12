import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const Wrapper = styled.div`
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  z-index: 9999;
  height: 0;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  &.isOpen {
    height: 100vh;
    opacity: 1;
    visibility: visible;
  }
`
