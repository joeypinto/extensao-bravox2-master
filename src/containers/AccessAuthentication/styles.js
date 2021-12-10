import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const LoginWrapper = styled.main`
  width: 100%;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  min-height: 20rem;
  margin: 8rem 0;
`

export const LoginContent = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 1rem 1.2rem;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
`
export const LoginHeaderMain = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1.8rem;
`
export const LoginTextMain = styled.p`
  width: 100%;
  margin-bottom: 1.4rem;
  text-align: center;
`
