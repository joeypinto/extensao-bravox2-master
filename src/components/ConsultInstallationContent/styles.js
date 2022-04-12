import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const WrapperReviews = styled.ul`
  width: 100%;

  ${Flex({
    direction: 'column',
    gridGap: '1rem'
  })}

  @media (min-width: 767px) {
    padding: 1rem 0;
  }
`
