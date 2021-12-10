import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const ConfirmInstallationList = styled.ul`
  width: 100%;
  ${Flex({
    direction: 'column',
    gridGap: '1rem'
  })}
  padding: 1rem 0;
`
