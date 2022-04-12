import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const ContainerWrapper = styled.main`
  max-width: 1200px;
  margin: 1.6rem auto 3.6rem;
  padding: 0 1rem;
  width: 100%;

  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}

  @media(min-width: 767px) {
    padding: 0;
    ${Flex({
      direction: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    })}
  }
`

export const ContentUser = styled.section`
  width: 100%;
  padding: 1rem;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  })}

  @media(min-width: 767px) {
    padding: 1rem 2.4rem;
  }
`

export const ContentTitle = styled.h3`
  width: 100%;
  max-width: 80rem;
  font-size: 2rem;
  text-align: left;
  padding-bottom: 2rem;
  font-weight: bold;
`
